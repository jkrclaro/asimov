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
                                        Curabitur condimentum velit et consectetur interdum. 
                                        Suspendisse condimentum in est non sollicitudin. 
                                        Nunc neque justo, scelerisque at erat vitae, eleifend mollis metus.
                                        Curabitur maximus, ipsum vitae fringilla imperdiet, neque odio vehicula elit, ut scelerisque nulla nibh ut massa. 
                                        Vivamus facilisis sed odio a consequat. 
                                        Nunc auctor vulputate elit, cursus euismod diam mollis et. 
                                        Morbi eget purus tempus tortor fringilla laoreet. 
                                        Quisque finibus metus leo, in vehicula tellus fringilla eget.
                                    </p>
                                    <Link to='/contact' className='btn btn-pilarlokko-primary mb-3'>Contact me</Link>
                                    <div>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-instagram'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-twitter'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-facebook'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-pinterest'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-linkedin'></i></a>
                                    </div>
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
                                        Curabitur condimentum velit et consectetur interdum. 
                                        Suspendisse condimentum in est non sollicitudin. 
                                        Nunc neque justo, scelerisque at erat vitae, eleifend mollis metus.
                                        Curabitur maximus, ipsum vitae fringilla imperdiet, neque odio vehicula elit, ut scelerisque nulla nibh ut massa. 
                                        Vivamus facilisis sed odio a consequat. 
                                        Nunc auctor vulputate elit, cursus euismod diam mollis et. 
                                        Morbi eget purus tempus tortor fringilla laoreet. 
                                        Quisque finibus metus leo, in vehicula tellus fringilla eget.
                                    </p>
                                    <Link to='/contact' className='btn btn-pilarlokko-primary btn-block mb-3'>Contact me</Link>
                                    <div className='text-center'>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-instagram'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-twitter'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-facebook'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-pinterest'></i></a>
                                        <a href='https://google.com' rel='nofollow'><i className='fab fa-linkedin'></i></a>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='mb-5'>
                    <div className='container'>
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-3 mt-3 mb-1'>
                                    <Link to='/danceitoff' className='img-link'>
                                        <img alt='danceitoff.jpg' width='100%' height='150' src='http://www.wellandgoodnyc.com/wp-content/uploads/2013/08/DMF_NYC_dance_cardio-e1376364021949.png'></img>
                                        <div className='text-center'><h3 className='title h3-title'>Danceitoff</h3></div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 mt-3 mb-1'>
                                    <Link to='/kidsdancecamp' className='img-link'>
                                        <img alt='kidsdancecamp.jpg' width='100%' height='150' src='https://www.cre8ivedance.co.uk/secure/wp-content/uploads/2014/09/dancecamp0-.jpg'></img>
                                        <div className='text-center'><h3 className='title h3-title'>Kids Camp Dance</h3></div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 mt-3 mb-1'>
                                    <Link to='/personaltraining' className='img-link'>
                                        <img alt='personaltraining.jpg' width='100%' height='150' src='https://www.precor.com/sites/default/files/Precor%20Queenax%20Spinning%20Print%2034-2000x1333%20Body.jpg'></img>
                                        <div className='text-center'><h3 className='title h3-title'>Personal Training</h3></div>
                                    </Link>
                                </div>
                                <div className='col-lg-3 mt-3 mb-1'>
                                    <Link to='/grouptraining' className='img-link'>
                                        <img alt='grouptraining.jpg' width='100%' height='150' src='http://limitlessvictoria.com/wp-content/uploads/2016/05/group-fitness1-1024x685.jpg'></img>
                                        <div className='text-center'><h3 className='title h3-title'>Group Training</h3></div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container mb-5'>
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