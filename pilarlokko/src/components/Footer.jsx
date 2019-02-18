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
        this.setState({ isDesktop: window.innerWidth > 768 });
    };

    render() {
        const theme = this.props.theme;
        return (
            <div className={`footer ${theme}-bg`}>
                <div className='container mt-5 mb-5'>
                <hr/>
                    {this.state.isDesktop ? (
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-3 mt-3'>
                                    <span className='brand-title theme-text'>Pilar Lokko</span>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className='footer-title mb-2'>Services</div>
                                    <div><Link to='/danceitoff' className='theme-text'>Danceitoff</Link></div>
                                    <div><Link to='/kidsdancecamp' className='theme-text'>Kids Dance Camp</Link></div>
                                    <div><Link to='/personaltraining' className='theme-text'>Personal Training</Link></div>
                                    <div><Link to='/grouptraining' className='theme-text'>Group Training</Link></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className='footer-title mb-2'>Follow</div>
                                    <div><a href='https://www.facebook.com' rel='nofollow' className='theme-text'>Facebook</a></div>
                                    <div><a href='https://www.instagram.com' rel='nofollow' className='theme-text'>Instagram</a></div>
                                    <div><a href='https://www.twitter.com' rel='nofollow' className='theme-text'>Twitter</a></div>
                                    <div><a href='https://www.linkedin.com' rel='nofollow' className='theme-text'>LinkedIn</a></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className='footer-title mb-2'>Get in touch</div>
                                    <div><a href='mailto:pilar.lokko@gmail.com' rel='nofollow' className='theme-text'>pilar.lokko@gmail.com</a></div>
                                    <div><a href='tel:1231234567' rel='nofollow' className='theme-text'>(123) 123 4567</a></div>
                                    <div><Link to='/newsletter' className='theme-text'>Join newsletter</Link></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='col-lg-12 text-center'>
                            <div className='mb-3'><span className={`brand-title ${theme}-text`}>Pilar Lokko</span></div>
                            <div className='footer-title mb-2'>Get in touch</div>
                            <div><a href='mailto:pilar.lokko@gmail.com' rel='nofollow' className='theme-text'>pilar.lokko@gmail.com</a></div>
                            <div><a href='tel:1231234567' rel='nofollow' className='theme-text'>(123) 123 4567</a></div>
                            <div><Link to='/newsletter' className='theme-text'>Join newsletter</Link></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;