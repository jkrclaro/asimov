import React from 'react';
import { Link } from 'react-router-dom';


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
                                <h4>HUMBLEPAGE</h4>
                            </div>
                            <div className='col-lg-3 mt-4'>
                                <h6 className='text-muted mb-3'>EXPLORE</h6>
                                <div><Link to='/about' className='white-color'>About</Link></div>
                                <div><Link to='/contact' className='white-color'>Contact</Link></div>
                            </div>
                            <div className='col-lg-3 mt-4'>
                                <h6 className='text-muted mb-3'>FOLLOW</h6>
                                <div><a href='https://www.facebook.com/gethumblepage' className='white-color'>Facebook</a></div>
                                <div><a href='https://www.instagram.com/gethumblepage' className='white-color'>Instagram</a></div>
                                <div><a href='https://www.twitter.com/gethumblepage' className='white-color'>Twitter</a></div>
                                <div><a href='https://www.linkedin.com/company/humblepage' className='white-color'>LinkedIn</a></div>
                            </div>
                            <div className='col-lg-3 mt-4'>
                                <h6 className='text-muted mb-3'><b>GET IN TOUCH</b></h6>
                                <div><a href='mailto:john@humblepage.com' className='white-color'>john@humblepage.com</a></div>
                                <div><a href='tel:0894518912' className='white-color'>(089) 451 8912</a></div>
                            </div>
                        </div>
                    ) : (
                        <div className='col-lg-12 text-center'>
                            <h4 className='mb-5'>HUMBLEPAGE</h4>
                            <h6 className='text-muted mb-3'>GET IN TOUCH</h6>
                            <div><a href='mailto:john@humblepage.com' className='white-color'>john@humblepage.com</a></div>
                            <div><a href='tel:0894518912' className='white-color'>(089) 451 8912</a></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;