import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const nils = require('../imgs/nils.jpg');


class Home extends React.Component {

    state = {
        isDesktop: false,
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
                            <h2 className='h2-heading mb-3'>About the tours</h2>
                            <div className='row'>
                                <div className='col-6 col-lg-3 mb-3'>
                                    <h3 className='hoppyhistory'>200+</h3>
                                    <h3 className='h3-heading'>Bookings</h3>
                                </div>
                                <div className='col-6 col-lg-3 mb-3'>
                                    <h3 className='hoppyhistory'>1,500+</h3>
                                    <h3 className='h3-heading'>Guests</h3>
                                </div>
                                <div className='col-6 col-lg-3 mb-3'>
                                    <h3 className='hoppyhistory'>4.95/5</h3>
                                    <h3 className='h3-heading'>Stars</h3>
                                </div>
                                <div className='col-6 col-lg-3 mb-3'>
                                    <h3 className='hoppyhistory'>650+</h3>
                                    <h3 className='h3-heading'>Reviews</h3>
                                </div>
                            </div>

                            <div class="main-timeline">
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fas fa-city"></i>
                                        </div>
                                        <div class="inner-content">
                                            <h3 class="title">Explore the city</h3>
                                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci culpa
                                                dolore explicabo fuga pariatur gjkfdgj  quis reprehenderit tenetur vel!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fas fa-history"></i>
                                        </div>
                                        <div class="inner-content">
                                            <h3 class="title">Learn about the history</h3>
                                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci culpa
                                                dolore explicabo fuga pariatur gjkfdgj  quis reprehenderit tenetur vel!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fas fa-clock"></i>
                                        </div>
                                        <div class="inner-content">
                                            <h3 class="title">Learn about the present</h3>
                                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci culpa
                                                dolore explicabo fuga pariatur gjkfdgj  quis reprehenderit tenetur vel!</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fas fa-language"></i>
                                        </div>
                                        <div class="inner-content">
                                            <h3 class="title">Get the chance to chat to a local</h3>
                                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci culpa
                                                dolore explicabo fuga pariatur gjkfdgj  quis reprehenderit tenetur vel!</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fas fa-map-marker-alt"></i>
                                        </div>
                                        <div class="inner-content">
                                            <h3 class="title">Drink where the locals drink</h3>
                                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci culpa
                                                dolore explicabo fuga pariatur gjkfdgj  quis reprehenderit tenetur vel!</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="timeline">
                                    <div class="timeline-content">
                                        <div class="timeline-icon">
                                            <i class="fas fa-beer"></i>
                                        </div>
                                        <div class="inner-content">
                                            <h3 class="title">And of course, drink where the locals drink!</h3>
                                            <p class="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci culpa
                                                dolore explicabo fuga pariatur gjkfdgj  quis reprehenderit tenetur vel!</p>
                                        </div>
                                    </div>
                                </div>
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