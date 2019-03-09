import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const nils = require('../imgs/nils.jpg');


class Home extends React.Component {

    state = {
        isDesktop: false,
        abouts: [
            {'title': 'Bookings', 'stat': '200+'},
            {'title': 'Guests', 'stat': '1,500+'},
            {'title': 'Stars', 'stat': '4.95/5'},
            {'title': 'Reviews', 'stat': '650+'}
        ],
        timelines: [
            {'title': 'Explore the city', 'logo': 'fas fa-city', 'description': "Stroll around and see the most famous landmarks and buildings. Learn about how their history, as well as where they fit in the current life of the city."},
            {'title': 'Learn about the history', 'logo': 'fas fa-history', 'description': "Hear about the events, people, moments, and stories that have happened in the city and the wider country, and importantly how they are remembered today."},
            {'title': 'Learn about the present', 'logo': 'fas fa-clock', 'description': "Find out how this history has impacted the present day - politically, culturally, etc. and what it might mean for the future."},
            {'title': 'Get local insights', 'logo': 'fas fa-info', 'description': "Find out everything you need to know from someone who knows the city well; whether it's where to find the best burger or the easiest way to get to the airport."},
            {'title': 'Get the chance to chat to a local', 'logo': 'fas fa-language', 'description': "Find out everything you need to know from someone who knows the city well; whether it's where to find the best burger or the easiest way to get to the airport."},
            {'title': 'Drink where the locals drink', 'logo': 'fas fa-map-marker-alt', 'description': "After 2 hours of history, it's time to relax with a cold beer. And not in a tourist trap, but instead where locals like to drink."},
            {'title': 'History followed by delicious beer - what could be better?', 'logo': 'fas fa-beer', 'description': ''}
        ],
        features: [
            {'title': 'Small group sizes', 'description': "No one wants to be herded around the city like sheep. Hoppy History is all about quality over quantity with small intimate groups."},
            {'title': 'Suitable for all travellers', 'description': "Whether travelling alone, as a couple, family, or with friends, Hoppy History tours are suitable for everyone."},
            {'title': 'History and Beer together', 'description': "Sure there are a lot of history tours and a lot of beer tours. But Hoppy History is the first to combine the two."},
            {'title': 'Short and sweet', 'description': "Most city tours are 3-4 hours long, Hoppy History is two hours of history with one hour of beer along with great conversation."}
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
        this.setState({ isDesktop: window.innerWidth > 768 });
    };

    render() {
        return (
            <div>
                <div className='section-1'>
                    <Header tour='default'/>
                    <div className='section-1-content mt-3'>
                        <div className='container'>
                            <h1 className='h1-heading'>Hoppy History</h1>
                            <h3 className='h3-heading'>Why can't history and beer go together?</h3>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-md-6 col-lg-3 text-center mb-5'>
                            <img src={nils} alt='nils' width='200' height='250' style={{borderRadius: '50%'}}></img>
                        </div>
                        <div className='col-md-6 col-lg-9 mb-5'>
                            <h2 className='h2-heading'>About Me</h2>
                            <p className='p-content'>
                            How often do you meet a historian who's also a professional beer expert? 
                            I'm Nils and I have created my own tour combining history and beer. 
                            Having established the tour in Berlin (Rated 4.93/5 from 374 reviews),
                            I have now decided to do the same in my hometown.
                            Born and bred in Dublin, I have a degree in Irish history from Trinity College, 
                            and have also worked as a guide in the Guinness Brewery. 
                            All this puts me in a offer position to offer insights on 
                            both Ireland's history and its favourite beer.
                            </p>
                        </div>
                        <div className='col-md-12 text-center'>
                            <h2 className='h2-heading mb-5'>About the tours</h2>
                            <div className='row mb-5'>
                                {this.state.abouts.map((about) => (
                                    <div className='col-6 col-lg-3 mb-3'>
                                        <h3 className='hoppyhistory'>{about.stat}</h3>
                                        <h3 className='h3-heading'>{about.title}</h3>
                                    </div>
                                ))}
                            </div>

                            <div className="main-timeline">
                                {this.state.timelines.map((timeline) => (
                                    <div className="timeline">
                                        <div className="timeline-content">
                                            <div className="timeline-icon">
                                                <i className={timeline.logo}></i>
                                            </div>
                                            <div className="inner-content">
                                                <h3 className="title">{timeline.title}</h3>
                                                <p className="description">{timeline.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='col-md-12 mt-5'>
                            <h3 className='h3-heading'>What makes Hoppy History tours different?</h3>
                            <div className='row mt-3'>
                                {this.state.features.map((feature) => (
                                    <div className='col-lg-3 mb-3'>
                                        <div className='card'>
                                            <div className='card-body'>
                                                <h3 className='h3-heading'>{feature.title}</h3>
                                                <p className='p-content'>{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className='col-md-12 text-center mt-5'>
                            <h3 className='h3-heading'>Are you looking to visit Dublin or Berlin?</h3>
                            <p className='p-content'>Join us for a historic tour and afterwards have a pint or two where the locals drink!</p>
                            <Link to='/tours/dublin' className='btn btn-custom-dublin mr-3 mb-3'>See Dublin Tour</Link>
                            <Link to='/tours/berlin' className='btn btn-custom-berlin mr-3 mb-3'>See Berlin Tour</Link>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;