import React from 'react';
import  { Link } from 'react-router-dom';


const pilarlokko = require('../imgs/pilarlokko.png');


class LandingPage extends React.Component {

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
                <div className='container mt-5 mb-5'>             
                    <div className='col-lg-12'>
                        {this.state.isDesktop ? (
                            <div className='row'>
                                <div className='col-lg-6 mt-5 text-right'>
                                    <h1 className='title h1-title'>Are you ready to transform your body?</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Sed gravida erat in 
                                        nulla malesuada, sit amet hendrerit 
                                        enim porttitor. Ut posuere.
                                    </p>
                                    <div className='mb-3'>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-instagram'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-twitter'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-facebook'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-pinterest'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-linkedin'></i></a>
                                    </div>
                                    <Link to='/contact' className='btn btn-pilarlokko-primary'>Contact me</Link>
                                </div>
                                <div className='col-lg-6 text-center'>
                                    <img alt='pilarlokko.jpg' className='img-fluid' src={pilarlokko}></img>
                                </div>
                            </div>
                        ) : (
                            <div className='row'>
                                <div className='col-lg-12 text-center'>
                                    <img alt='pilarlokko.jpg' className='img-fluid' src={pilarlokko}></img>
                                </div>
                                <div className='col-lg-6 mt-5'>
                                    <h1 className='title h1-title text-center'>Are you ready to transform your body?</h1>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Sed gravida erat in 
                                        nulla malesuada, sit amet hendrerit 
                                        enim porttitor. Ut posuere.
                                    </p>
                                    <div className='text-center mb-3'>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-instagram'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-twitter'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-facebook'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-pinterest'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-linkedin'></i></a>
                                    </div>
                                    <Link to='/contact' className='btn btn-pilarlokko-primary btn-block'>Contact me</Link>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='container'>
                        <div className='col-lg-12'>
                            <div className='row'>
                                {this.state.isDesktop ? (
                                    <div className='col-lg-6 mb-5'>
                                        <img src='http://www.wellandgoodnyc.com/wp-content/uploads/2013/08/DMF_NYC_dance_cardio-e1376364021949.png' className='img-fluid'></img>
                                    </div>
                                ) : (null)}
                                <div className='col-lg-6'>
                                    <h2 className='title h2-title'>DANCEITOFF</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Integer non hendrerit 
                                        nisl, at dignissim sapien. In dignissim 
                                        accumsan odio, sed rutrum lorem commodo 
                                        et. Mauris non dui quis ligula ultrices
                                        convallis ac non erat. Pellentesque 
                                        ultricies, tellus ac molestie blandit nullam.
                                    </p>
                                </div>
                                {!this.state.isDesktop ? (
                                    <div className='col-lg-6 mb-5'>
                                        <img src='http://www.wellandgoodnyc.com/wp-content/uploads/2013/08/DMF_NYC_dance_cardio-e1376364021949.png' className='img-fluid'></img>
                                    </div>
                                ) : (null)}
                                <div className='col-lg-6 text-right'>
                                    <h2 className='title h2-title'>Kids Dance Camp</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Integer non hendrerit 
                                        nisl, at dignissim sapien. In dignissim 
                                        accumsan odio, sed rutrum lorem commodo 
                                        et. Mauris non dui quis ligula ultrices
                                        convallis ac non erat. Pellentesque 
                                        ultricies, tellus ac molestie blandit nullam.
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <img src='https://www.cre8ivedance.co.uk/secure/wp-content/uploads/2014/09/dancecamp0-.jpg' className='img-fluid'></img>
                                </div>
                                {this.state.isDesktop ? (
                                    <div className='col-lg-6 mb-5'>
                                        <img src='https://www.precor.com/sites/default/files/Precor%20Queenax%20Spinning%20Print%2034-2000x1333%20Body.jpg' className='img-fluid'></img>
                                    </div>
                                ) : (null)}
                                <div className='col-lg-6'>
                                    <h2 className='title h2-title'>Personal Training</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Integer non hendrerit 
                                        nisl, at dignissim sapien. In dignissim 
                                        accumsan odio, sed rutrum lorem commodo 
                                        et. Mauris non dui quis ligula ultrices
                                        convallis ac non erat. Pellentesque 
                                        ultricies, tellus ac molestie blandit nullam.
                                    </p>
                                </div>
                                {!this.state.isDesktop ? (
                                    <div className='col-lg-6 mb-5'>
                                        <img src='https://www.precor.com/sites/default/files/Precor%20Queenax%20Spinning%20Print%2034-2000x1333%20Body.jpg' className='img-fluid'></img>
                                    </div>
                                ) : (null)}
                                <div className='col-lg-6 text-right'>
                                    <h2 className='title h2-title'>Group Training</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur 
                                        adipiscing elit. Integer non hendrerit 
                                        nisl, at dignissim sapien. In dignissim 
                                        accumsan odio, sed rutrum lorem commodo 
                                        et. Mauris non dui quis ligula ultrices
                                        convallis ac non erat. Pellentesque 
                                        ultricies, tellus ac molestie blandit nullam.
                                    </p>
                                </div>
                                <div className='col-lg-6 mb-5'>
                                    <img src='http://limitlessvictoria.com/wp-content/uploads/2016/05/group-fitness1-1024x685.jpg' className='img-fluid'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mb-3'>
                    {this.state.isDesktop ? (
                        <div className='row'>
                            <div className='col-lg-6 text-right'>
                                <h2 className='title'>Stay in touch</h2>
                                <p>
                                    Subscribe to our newsletter and stay updated.
                                </p>
                            </div>
                            <div className='col-lg-6 mt-3'>
                                <Link to='/newsletter' className='btn btn-pilarlokko-primary'>Join newsletter</Link>
                            </div>
                        </div>
                    ) : (
                        <div className='text-center'>
                            <h2 className='title'>Stay in touch</h2>
                            <p>
                                Subscribe to our newsletter and stay updated.
                            </p>
                            <Link to='/newsletter' className='btn btn-pilarlokko-primary'>Join newsletter</Link>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default LandingPage;