import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Footer extends React.Component {

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
            <div className='footer white-color'>
                <div className='container mt-5 mb-5'>
                    {this.state.isDesktop ? (
                        <div className='row'>
                            <div className='col-lg-3 mt-4'>
                                <h3><b>HUMBLEPAGE</b></h3>
                            </div>
                            <div className='col-lg-3 mt-4'>
                                <h5 className='text-muted mb-3'><b>EXPLORE</b></h5>
                                <h5><Link to='/work' className='white-color' href='/'>Work</Link></h5>
                                <h5><Link to='/services' className='white-color' href='/'>Services</Link></h5>
                                <h5><Link to='/about' className='white-color' href='/'>About</Link></h5>
                                <h5><Link to='/contact' className='white-color' href='/'>Contact</Link></h5>
                            </div>
                            <div className='col-lg-3 mt-4'>
                                <h5 className='text-muted mb-3'><b>FOLLOW</b></h5>
                                <h5><a href='https://www.facebook.com' className='white-color' href='/'>Facebook</a></h5>
                                <h5><a href='https://www.instagram.com' className='white-color' href='/'>Instagram</a></h5>
                                <h5><a href='https://www.twitter.com' className='white-color' href='/'>Twitter</a></h5>
                                <h5><a href='https://www.linkedin.com' className='white-color' href='/'>LinkedIn</a></h5>
                            </div>
                            <div className='col-lg-3 mt-4'>
                                <h5 className='text-muted mb-3'><b>GET IN TOUCH</b></h5>
                                <h5><a href='mailto:gethumblepage@gmail.com' className='white-color' href='/'>gethumblepage@gmail.com</a></h5>
                                <h5><a href='tel:1231234567' className='white-color' href='/'>(123) 123-4567</a></h5>
                            </div>
                        </div>
                    ) : (
                        <div className='col-lg-12 text-center'>
                            <h3 className='mb-5'><b>HUMBLEPAGE</b></h3>
                            <h5 className='text-muted mb-3'><b>GET IN TOUCH</b></h5>
                            <h5><a href='mailto:gethumblepage@gmail.com' className='white-color' href='/'>gethumblepage@gmail.com</a></h5>
                            <h5><a href='tel:1231234567' className='white-color' href='/'>(123) 123-4567</a></h5>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;