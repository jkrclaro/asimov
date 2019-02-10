import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Footer from './Footer';

const stock2 = require('../imgs/stock2.jpg');


class Home extends React.Component {

    state = {
        isDesktop: false
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
                <div className='section-1'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-12 text-center mt-5 mb-5'>
                                <h1>
                                    <div style={{fontSize: '4.5rem', fontWeight: 900}}>NIL'S</div>
                                    <div style={{fontSize: '3rem'}}>HISTORY &amp; PINTS</div>
                                </h1>
                                <h3 style={{fontSize: '1.5rem'}}>
                                    <div>EXPLORE DUBLIN WITH A</div>
                                    <div>PASSIONATE AND EXPERT</div>
                                    <div>LOCAL GUIDE</div>
                                </h3>
                                <a href='https://www.airbnb.ie/experiences/385040' className='btn btn-custom-primary mr-3'>Book now</a>
                                <Link to='/tour' className='btn btn-custom-alternative'>See tour</Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='container'>
                        <div className='row mt-5'>
                            {!this.state.isDesktop ? (
                            <div className='col-md-6 col-lg-3 mb-5'>
                                <img src={stock2} alt='stock-2' width='100%' height='250' style={{borderRadius: '50%'}}></img>
                            </div>
                            ) : (null)}
                            <div className='col-md-6 col-lg-9'>
                                <h3 className='h3-heading'>ABOUT ME</h3>
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
                            {this.state.isDesktop ? (
                            <div className='col-md-6 col-lg-3 mb-5'>
                                <img src={stock2} alt='stock-2' width='100%' height='250' style={{borderRadius: '50%'}}></img>
                            </div>
                            ) : (null)}
                            <div className='col-md-12'>
                                <h3 className='h3-heading'>TESTIMONIALS</h3>
                                <div className='speech-bubble'>
                                    <p className='p-content'>
                                    Nils was a super tour guide! Not only was he 
                                    gracious enough to let me catch up to the group 
                                    when I slept in the morning of our walk, 
                                    but he was also super engaging with me and all 
                                    the others as we walked about the city, which I 
                                    appreciate. It’s no fun when a guide just keeps to 
                                    themself! To top it all off, our group got along 
                                    well and the Guinness was delicious. Highly recommended!
                                    </p>
                                </div>
                                <div className='text-right mb-3'><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><span className='ml-3'>Elizabeth, February 2019</span></div>
                                <div className='speech-bubble'>
                                    <p>
                                        I went with my boyfriend on this tour with Nils, 
                                        it was very informative and really interesting. 
                                        We saw all of the most important sights and Nils 
                                        kept the information concise with a little humour 
                                        too at each stopping point. After learning a 
                                        great deal more about the City of Dublin, we 
                                        finished up in a lovely traditional Irish pub, 
                                        this was where Nils showed his other great passion 
                                        of Guinness, by having a drink with him whilst 
                                        describing the importance of the Black Stuff. 
                                        A thoroughly enjoyable tour from a friendly and 
                                        highly knowledgeable tour guide, an easy 
                                        recommendation to others, Thanks Nils! :)
                                    </p>
                                </div>
                                <div className='text-right mb-3'><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><span className='ml-3'>Jessica, February 2019</span></div>
                                <div className='speech-bubble'>
                                    <p>
                                        Touring with Nils was a delight - being taken 
                                        through the city and getting to know the areas and 
                                        architecture was great but his overlay of the 
                                        history of Ireland during the past 150 years and 
                                        how Dublin is part of that, both the city and the 
                                        characters was really well done. Nils is a pleasure 
                                        to spend the afternoon with and best of all has 
                                        made me rediscover my taste for Guinness!
                                    </p>
                                </div>
                                <div className='text-right mb-3'><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><FontAwesomeIcon icon='star' className='ireland-orange'/><span className='ml-3'>Paul, February 2019</span></div>
                            </div>
                            <div className='col-md-12 mt-5 text-center'>
                                <h3 className='h3-heading'>ARE YOU LOOKING TO VISIT DUBLIN?</h3>
                                <p className='p-content'>Join us for a historic tour in Dublin city and afterwards have a pint or two at a local Irish pub!</p>
                                <Link to='/tour' className='btn btn-custom-alternative'>See tour</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Home;