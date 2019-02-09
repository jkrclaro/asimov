import React from 'react';
import { Link } from 'react-router-dom';

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

                <div className='container mt-5 mb-5'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-3 mb-5'>
                            <img src={stock2} alt='stock-2' width='100%' height='300' style={{borderRadius: '50%'}}></img>
                        </div>
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;