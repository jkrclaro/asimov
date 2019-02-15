import React from 'react';

import Header from './Header';
import Footer from './Footer';


const germany = require('../imgs/germany.png');


class TourDublin extends React.Component {

    state = {
        isDesktop: false,
        visits: [
            {'title': 'Reichstag Building', 'image': 'https://upload.wikimedia.org/wikipedia/commons/0/0d/Berlin_reichstag_west_panorama_2.jpg'},
            {'title': 'Berlin Wall', 'image': 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Berlinermauer.jpg'},
            {'title': 'Memorial Sinti and Roma', 'image': require('../imgs/berlin/memorialsintiandromamemorial.jpg')},
            {'title': 'Brandenburg Gate', 'image': 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Berlin_Brandenburger_Tor_Abend.jpg'},
            {'title': 'Pariser Platz', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/2005-10-26_Brandenburger-Tor.JPG/1920px-2005-10-26_Brandenburger-Tor.JPG'},
            {'title': 'Memorial to Murdered Jews', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Holocaust_memorial_tree.jpg/1024px-Holocaust_memorial_tree.jpg'},
            {'title': 'Potsdamer Platz', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Berlin_-_Potsdamer_Platz_-_2016.jpg/1920px-Berlin_-_Potsdamer_Platz_-_2016.jpg'},
            {'title': 'Luftwaffe & SS Headquarters ', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Berlin%2C_Mitte%2C_Wilhelmstra%C3%9Fe%2C_Detlev-Rohwedder-Haus.jpg/1920px-Berlin%2C_Mitte%2C_Wilhelmstra%C3%9Fe%2C_Detlev-Rohwedder-Haus.jpg'},
            {'title': 'German Chancellery', 'image': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Canciller%C3%ADa_Federal%2C_Berl%C3%ADn%2C_Alemania%2C_2016-04-21%2C_DD_37-39_HDR.JPG/1920px-Canciller%C3%ADa_Federal%2C_Berl%C3%ADn%2C_Alemania%2C_2016-04-21%2C_DD_37-39_HDR.JPG'},
            {'title': "Hitler's Bunker", 'image': require('../imgs/berlin/hitlersbunker.jpg')},
            {'title': 'Tiergarten', 'image': require('../imgs/berlin/tiergarten.jpg'    )}
        ]
    }
    updatePredicate = this.updatePredicate.bind(this);

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

    render() {
        return (
            <div>
                <Header tour='berlin' />
                <div className='container'>
                    <div className='text-center'>
                        <div><a href='https://www.airbnb.ie/experiences/233421'><img alt='germany.png' src={germany} height='100' width='200'></img></a></div>
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
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-lg-2 enlarge mb-3" key={visitIndex}>
                                    <div className="content-overlay"></div>
                                    <div className="content card-block">
                                        <img className="content-image" src={visit.image} alt={visit.title} width='100%' height='100%'></img>
                                        <div className='content-details fadeIn-bottom'>
                                            <h3 className="content-title">{visit.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className='row'>
                            {this.state.visits.map((visit, visitIndex) =>
                                <div className="col-6 enlarge mb-2" key={visitIndex}>
                                    <div className="content-overlay"></div>
                                    <div className="content card-block-mobile">
                                        <img className="content-image" src={visit.image} alt={visit.title} width='100%' height='100%'></img>
                                        <div className="content-details fadeIn-bottom">
                                            <h3 className="content-title">{visit.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
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
                    <div className='speech-bubble'>
                        <p className='p-content'>
                        Nils was incredibly informative and knowledgeable and 
                        I learned SO much on this tour! 
                        He has such great energy and gave a unique perspective on all of the places we visited. 
                        Loved hanging out in the park with a super nice view and 
                        it was fun learning about German beer. 
                        He also gave us great recommendations for his favorite food and bars we tried out later, 
                        Nils just knows his stuff! Five stars, THANKS NILS!!!
                        </p>
                    </div>
                    <div className='text-right mb-3'><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><span className='ml-3'>Christina, Sep 2018</span></div>
                    <div className='speech-bubble'>
                        <p>
                            Easily one of the best tours we experienced in Europe! 
                            Nils is extremely knowledgeable, engaging and fun 
                            and we had a great time exploring Berlin with him. 
                            He knows exactly what to focus on when giving you 
                            the highlights of each site/attraction and we 
                            learned a lot while laughing along the way. 
                            And, relaxing in the park with a few beers = perfect way 
                            to end our last day in Berlin. 
                            Highly recommend - you won't regret it!
                        </p>
                    </div>
                    <div className='text-right mb-3'><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><span className='ml-3'>Amanda, Sep 2018</span></div>
                    <div className='speech-bubble'>
                        <p>
                            I am so happy I did this tour and really recommend it. 
                            Nils is an enthusiastic and knowledgeable guide. 
                            He keeps the tours at a manageable size and 
                            it was nice to chat with and get to know other 
                            travelers as we walked without feeling overwhelmed 
                            by the size of the crowd. Ending in a park with 
                            some beers while learning fun facts about German beer culture was perfect.
                        </p>
                    </div>
                    <div className='text-right mb-3'><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><i className="fas fa-star hoppyhistory"></i><span className='ml-3'>Losida, Sep 2018</span></div>
                </div>
                <div className='container mt-5'>
                    <a href='https://www.airbnb.ie/experiences/233421' className='btn btn-custom-berlin btn-block mb-3'>Book now</a>
                </div>
                <Footer />
            </div>
        )
    }
}

export default TourDublin;