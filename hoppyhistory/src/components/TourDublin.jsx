import React from 'react';
import Lightbox from 'react-images';

import Header from './Header';
import Footer from './Footer';


const ireland = require('../imgs/ireland.png');


class TourDublin extends React.Component {

    constructor() {
        super();
        this.state = {
            isDesktop: false,
            experiencesLightboxIsOpen: false,
            experiencesCurrentImage: 0,
            landmarksLightboxIsOpen: false,
            landmarksCurrentImage: 0,
            landmarks: [
                {'caption': 'Garden of Remembrance', 'src': require("../imgs/dublin/landmarks/gardenofremembrance.jpg")},
                {'caption': 'Parnell Monument', 'src': require("../imgs/dublin/landmarks/parnellmonument.jpg")},
                {'caption': "O'Connell Street", 'src': require("../imgs/dublin/landmarks/oconnellstreet.jpg")},
                {'caption': 'The Spire', 'src': require("../imgs/dublin/landmarks/thespire.jpg")},
                {'caption': 'General Post Office', 'src': require("../imgs/dublin/landmarks/generalpostoffice.jpg")},
                {'caption': "O'Connell Monument", 'src': require("../imgs/dublin/landmarks/oconnellmonument.jpg")},
                {'caption': 'Liffey Boardwalk', 'src': require("../imgs/dublin/landmarks/liffeyboardwalk.jpg")},
                {'caption': "Ha'penny Bridge", 'src': require("../imgs/dublin/landmarks/hapennybridge.jpg")},
                {'caption': 'Temple Bar', 'src': require("../imgs/dublin/landmarks/templebar.jpg")},
                {'caption': 'City Hall', 'src': require("../imgs/dublin/landmarks/cityhall.jpg")},
                {'caption': 'Dublin Castle', 'src': require("../imgs/dublin/landmarks/dublincastle.jpg")},
                {'caption': '1916 Memorial', 'src': require("../imgs/dublin/landmarks/1916memorial.jpg")},
                {'caption': 'College Green', 'src': require("../imgs/dublin/landmarks/collegegreen.jpg")},
                {'caption': 'Trinity College', 'src': require("../imgs/dublin/landmarks/trinitycollege.jpg")},
                {'caption': 'Merrion Square', 'src': require("../imgs/dublin/landmarks/merrionsquare.jpg")},
                {'caption': 'Oscar Wilde Statue', 'src': require("../imgs/dublin/landmarks/oscarwildestatue.jpg")},
                {'caption': 'Leinster House', 'src': require("../imgs/dublin/landmarks/leinsterhouse.jpg")},
                {'caption': "Napper Tandy's", 'src': require("../imgs/dublin/landmarks/nappertandys.jpg")},
            ],
            testimonials: [
                {'stars': 5, 'user': 'Paul', 'date': 'Feb 2019', 'message': "Touring with Nils was a delight - being taken through the city and getting to know the areas and architecture was great but his overlay of the history of Ireland during the past 150 years and how Dublin is part of that, both the city and the characters was really well done. Nils is a pleasure to spend the afternoon with and best of all has made me rediscover my taste for Guinness!"},
                {'stars': 5, 'user': 'Jessica', 'date': 'Feb 2019', 'message': "I went with my boyfriend on this tour with Nils, it was very informative and really interesting. We saw all of the most important sights and Nils kept the information concise with a little humour too at each stopping point. After learning a great deal more about the City of Dublin, we finished up in a lovely traditional Irish pub, this was where Nils showed his other great passion of Guinness, by having a drink with him whilst describing the importance of the Black Stuff. A thoroughly enjoyable tour from a friendly and highly knowledgeable tour guide, an easy recommendation to others, Thanks Nils! :)"},
                {'stars': 5, 'user': 'Elizabeth', 'date': 'Feb 2019', 'message': "Nils was a super tour guide! Not only was he gracious enough to let me catch up to the group when I slept in the morning of our walk, but he was also super engaging with me and all the others as we walked about the city, which I appreciate. It’s no fun when a guide just keeps to themself! To top it all off, our group got along well and the Guinness was delicious. Highly recommended!"}
            ],
            experiences: [
                {'src': require("../imgs/dublin/experiences/rehearsal.jpg")},
            ]
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
                <Header tour='dublin' />
                <div className='container'>
                    <div className='text-center'>
                        <div><a href='https://www.airbnb.ie/experiences/385040'><img src={ireland} alt='ireland' height='100' width='200'></img></a></div>
                        <a className='dublin' style={{fontSize: '5em'}} href='https://www.airbnb.ie/experiences/385040'>Dublin</a>
                    </div>
                    <h3 className='h3-heading mb-3'>WHAT WE'LL DO</h3>
                    <div className='mb-5'>
                        <p className='p-content'>
                        Join me as we take a journey through Dublin’s and Ireland’s history, focussing on the most important figures of the last centuries; from St. Patrick to Queen Elizabeth, from Oscar Wilde to Bono. 
                        </p>
                        <p className='p-content'>
                        As we make our way through the city, we’ll discuss it all - from the first English invasion up to Brexit, from the arrival of St. Patrick up to the abortion referendum of 2018. And everything in between. We’ll see how this history has shaped Dublin, and how its legacy can still be seen all over the city today. 
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
                    <h3 className='h3-heading mb-3'>A MEMORABLE PINT</h3>
                    <div className='mb-5'>
                        <p className='p-content'>
                        After 2 hours of history, we'll head to one of my favourite pubs and enjoy a pint of Guinness (pint is included in the price of the tour). As we enjoy it, I’ll tell you everything there is to know about the beer, especially important info that you wouldn't necessarily hear at the Guinness Storehouse – Why does it take so long to pour a pint? Why is it so beloved in Ireland? Why is it so smooth and creamy? Why does it taste so much better here than elsewhere? Why does every can of Guinness have a plastic ball in it?
                        </p>
                        <p className='p-content'>
                        Fascinating history followed by a delicious pint. What could be better?
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
                    <h3 className='h3-heading'>Photos</h3>
                    <div className='row'>
                        {this.state.experiences.map((experience, experienceIndex) => (
                            <div className="enlarge col-lg-3 col-md-4 mb-2" key={experienceIndex}>
                                <img onClick={this.openLightbox('experiences', experienceIndex)} src={experience.src} alt={experience.src} width='100%' height='150px'></img>
                            </div>
                        ))}
                    </div>
                    <Lightbox
                        images={this.state.experiences}
                        isOpen={this.state.experiencesLightboxIsOpen}
                        currentImage={this.state.experiencesCurrentImage}
                        showThumbnails={true}
                        onClickPrev={this.gotoPrevious('experiences')}
                        onClickNext={this.gotoNext('experiences')}
                        onClose={this.closeLightbox('experiences')}
                        onClickThumbnail={this.onClickThumbnail(999)}
                    />
                </div>
                <div className='container mt-5'>
                    <a href='https://www.airbnb.ie/experiences/385040' className='btn btn-custom-dublin btn-block mb-3'>Book now</a>
                </div>
                <Footer />
            </div>
        )
    }
}

export default TourDublin;