import React from 'react';
import Lightbox from 'react-images';

import Header from './Header';
import Footer from './Footer';


const germany = require('../imgs/germany.png');


class TourBerlin extends React.Component {

    constructor() {
        super();
        this.state = {
            isDesktop: false,
            experiencesLightboxIsOpen: false,
            experiencesCurrentImage: 0,
            landmarksLightboxIsOpen: false,
            landmarksCurrentImage: 0,
            landmarks: [
                {'caption': 'Reichstag Building', 'src': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Berlin_reichstag_west_panorama_2.jpg'},
                {'caption': 'Berlin Wall', 'src': 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg'},
                {'caption': 'Memorial Sinti and Roma', 'src': require('../imgs/berlin/memorialsintiandromamemorial.jpg')},
                {'caption': 'Brandenburg Gate', 'src': 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Berlin_Brandenburger_Tor_Abend.jpg'},
                {'caption': 'Pariser Platz', 'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2005-10-26_Brandenburger-Tor.JPG/1920px-2005-10-26_Brandenburger-Tor.JPG'},
                {'caption': 'Memorial to Murdered Jews', 'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Holocaust_memorial_tree.jpg/1024px-Holocaust_memorial_tree.jpg'},
                {'caption': 'Potsdamer Platz', 'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Berlin_-_Potsdamer_Platz_-_2016.jpg/1920px-Berlin_-_Potsdamer_Platz_-_2016.jpg'},
                {'caption': 'Luftwaffe & SS Headquarters ', 'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Berlin%2C_Mitte%2C_Wilhelmstra%C3%9Fe%2C_Detlev-Rohwedder-Haus.jpg/1920px-Berlin%2C_Mitte%2C_Wilhelmstra%C3%9Fe%2C_Detlev-Rohwedder-Haus.jpg'},
                {'caption': 'German Chancellery', 'src': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Canciller%C3%ADa_Federal%2C_Berl%C3%ADn%2C_Alemania%2C_2016-04-21%2C_DD_37-39_HDR.JPG/1920px-Canciller%C3%ADa_Federal%2C_Berl%C3%ADn%2C_Alemania%2C_2016-04-21%2C_DD_37-39_HDR.JPG'},
                {'caption': "Hitler's Bunker", 'src': require('../imgs/berlin/hitlersbunker.jpg')},
                {'caption': 'Tiergarten', 'src': require('../imgs/berlin/tiergarten.jpg')}
            ],
            testimonials: [
                {'stars': 5, 'user': 'Christina', 'date': 'Sep 2018', 'message': "Nils was incredibly informative and knowledgeable and I learned SO much on this tour! He has such great energy and gave a unique perspective on all of the places we visited. Loved hanging out in the park with a super nice view and it was fun learning about German beer. He also gave us great recommendations for his favorite food and bars we tried out later, Nils just knows his stuff! Five stars, THANKS NILS!!!"},
                {'stars': 5, 'user': 'Amanda', 'date': 'Sep 2018', 'message': "Easily one of the best tours we experienced in Europe! Nils is extremely knowledgeable, engaging and fun and we had a great time exploring Berlin with him. He knows exactly what to focus on when giving you the highlights of each site/attraction and we learned a lot while laughing along the way. And, relaxing in the park with a few beers = perfect way to end our last day in Berlin. Highly recommend - you won't regret it!"},
                {'stars': 5, 'user': 'Losida', 'date': 'Sep 2018', 'message': "I am so happy I did this tour and really recommend it. Nils is an enthusiastic and knowledgeable guide. He keeps the tours at a manageable size and it was nice to chat with and get to know other travelers as we walked without feeling overwhelmed by the size of the crowd. Ending in a park with some beers while learning fun facts about German beer culture was perfect."}
            ],
            experiences: []
        }
        this.updatePredicate = this.updatePredicate.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
        this.gotoImage = this.gotoImage.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
        this.onClickThumbnail = this.onClickThumbnail.bind(this)
    }

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
        window.scrollTo(0 ,0);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 992 });
    };

    openLightbox = (feature, index) => (e) =>  {
        console.log(`Feature: ${feature} | Index: ${index}`)
        if (feature == 'landmarks') {
            this.setState({landmarksCurrentImage: index, landmarksLightboxIsOpen: true})
        } else {
            this.setState({experiencesCurrentImage: index, experiencesLightboxIsOpen: true})
        }
    }

    closeLightbox = (feature) => (e) => {
        if (feature == 'landmarks') {
            this.setState({landmarksCurrentImage: 0, landmarksLightboxIsOpen: false})
        } else {
            this.setState({experiencesCurrentImage: 0, experiencesLightboxIsOpen: false})
        }
    }

    gotoPrevious = (feature) => (e) => {
        if (feature == 'landmarks') {
            this.setState({landmarksCurrentImage: this.state.landmarksCurrentImage - 1})
        } else {
            this.setState({experiencesCurrentImage: this.state.experiencesCurrentImage - 1})
        }
    }

    gotoNext = (feature) => (e) => {
        if (feature == 'landmarks') {
            this.setState({landmarksCurrentImage: this.state.landmarksCurrentImage + 1})
        } else {
            this.setState({experiencesCurrentImage: this.state.experiencesCurrentImage + 1})
        }
    }

    gotoImage = (index) => (e) => {
        this.setState({experiencesCurrentImage: index})
    }

    onClickThumbnail = (notused) => (index) => {
        this.setState({experiencesCurrentImage: index})
    }


    render() {
        return (
            <div>
                <Header tour='berlin' />
                <div className='container'>
                    <div className='text-center'>
                        <div><a href='https://www.airbnb.ie/experiences/233421'><img src={germany} alt='germany' height='100' width='200'></img></a></div>
                        <a className='berlin' style={{fontSize: '5em'}} href='https://www.airbnb.ie/experiences/233421'>Berlin</a>
                    </div>
                    <h3 className='h3-heading mb-3'>WHAT WE'LL DO</h3>
                    <div className='mb-5'>
                        <p className='p-content'>
                            When you think of Germany, what are the first two things that come to mind? History and beer. 
                            Take a journey through Germany's and Berlin's history, from the Prussian Empire all the way up to the current day. 
                        </p>
                        <p className='p-content'>
                            This 3 hour tour will include the Reichstag, Brandenburg Gate, Holocaust memorial, Berlin Wall, Hitler's bunker, and much more. 
                            We'll cover historic figures like Adolf Hitler, Napoleon, Frederick the Great, and even Michael Jackson. 
                            We'll also take a look at the relationship between Germany and its history, 
                            and see how events here over the last few decades have impacted and shaped Berlin as a city. 
                        </p>
                    </div>
                    <h3 className='h3-heading mb-3'>WHERE WE'LL GO</h3>
                    {this.state.isDesktop ? (
                        <div className='row mb-5'>
                            {this.state.landmarks.map((landmark, landmarkIndex) =>
                                <div className="enlarge col-lg-2 mb-2" key={landmarkIndex}>
                                    <img onClick={this.openLightbox('landmarks', landmarkIndex)} src={landmark.src} alt={landmark.src} width='100%' height='150px'></img>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='row'>
                            {this.state.landmarks.map((landmark, landmarkIndex) =>
                                <div className="enlarge col-6 mb-2" key={landmarkIndex}>
                                    <img onClick={this.openLightbox('landmarks', landmarkIndex)} src={landmark.src} alt={landmark.src} width='100%' height='150px'></img>
                                </div>
                            )}
                        </div>
                    )}
                    <Lightbox
                        images={this.state.landmarks}
                        isOpen={this.state.landmarksLightboxIsOpen}
                        currentImage={this.state.landmarksCurrentImage}
                        showThumbnails={true}
                        onClickPrev={this.gotoPrevious('landmarks')}
                        onClickNext={this.gotoNext('landmarks')}
                        onClose={this.closeLightbox('landmarks')}
                        onClickThumbnail={this.onClickThumbnail(999)}
                    />
                    <h3 className='h3-heading mb-3'>A MEMORABLE BEER</h3>
                    <div className='mb-5'>
                        <p className='p-content'>
                            Follow this up with a beer tasting experience, 
                            where you'll learn about and sample several of Germany's most popular beers, 
                            while sat in the grass in the wonderful setting of Tiergarten, the city's historic park.
                        </p>
                        <p className='p-content'>
                            If it rains the tour will still go ahead and we will improvise about where we drink the beers :)
                        </p>
                        <p className='p-content'>
                            I'll provide 3 different german beers. For non beer drinkers - Club Mate, Germany's favourite soft drink (Please let me know in advance if you wish to try this).
                        </p>
                        <p className='p-content'>
                            Fascinating history followed by ice cold beers - what could be better?
                        </p>
                    </div>
                    <h3 className='h3-heading'>Testimonials</h3>
                    {this.state.testimonials.map((testimonial, testimonialIndex) => (
                        <div key={testimonialIndex}>
                            <div className='speech-bubble'>
                                <p className='p-content'>{testimonial.message}</p>
                            </div>
                            <div className='text-right mb-3'>
                                <i className="fas fa-star hoppyhistory"></i>
                                <i className="fas fa-star hoppyhistory"></i>
                                <i className="fas fa-star hoppyhistory"></i>
                                <i className="fas fa-star hoppyhistory"></i>
                                <i className="fas fa-star hoppyhistory"></i>
                                <span className='ml-3'>{testimonial.user}, {testimonial.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='container mt-5'>
                    <a href='https://www.airbnb.ie/experiences/233421' className='btn btn-custom-berlin btn-block mb-3'>Book now</a>
                </div>
                <Footer />
            </div>
        )
    }
}

export default TourBerlin;