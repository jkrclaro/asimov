import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../imgs/logo.png')

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
                            <div className='col-lg-3 mt-3'>
                                <img src={logo} className='logo mb-2 mr-2 mb-5'></img>
                            </div>
                            <div className='col-lg-3 mt-3'>
                                <span className='footer-title text-muted mb-3'>EXPLORE</span>
                                <div><Link to='/about' className='footer-text-color'>About</Link></div>
                                <div><Link to='/services' className='footer-text-color'>Services</Link></div>
                                <div><Link to='/contact' className='footer-text-color'>Contact</Link></div>
                            </div>
                            <div className='col-lg-3 mt-3'>
                                <span className='footer-title text-muted mb-3'>FOLLOW</span>
                                <div><a href='https://www.facebook.com/humblepagedesign' className='footer-text-color'>Facebook</a></div>
                                <div><a href='https://www.instagram.com/humblepagedesign' className='footer-text-color'>Instagram</a></div>
                                <div><a href='https://www.twitter.com/humblepageweb' className='footer-text-color'>Twitter</a></div>
                                <div><a href='https://www.linkedin.com/company/humblepage' className='footer-text-color'>LinkedIn</a></div>
                            </div>
                            <div className='col-lg-3 mt-3'>
                                <span className='footer-title text-muted mb-3'>GET IN TOUCH</span>
                                <div><a href='mailto:john@humblepage.com' className='footer-text-color'>john@humblepage.com</a></div>
                                <div><a href='tel:0894518912' className='footer-text-color'>(089) 451 8912</a></div>
                            </div>
                        </div>
                    ) : (
                        <div className='col-lg-12 text-center'>
                            <img src={logo} className='logo mb-2 mr-2 mb-5'></img> 
                            <h6 className='footer-title text-muted mb-3'>GET IN TOUCH</h6>
                            <div><a href='mailto:john@humblepage.com' className='footer-text-color'>john@humblepage.com</a></div>
                            <div><a href='tel:0894518912' className='footer-text-color'>(089) 451 8912</a></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;