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
        const theme = this.props.theme;
        return (
            <div className={`footer ${theme}-bg`}>
                <div className='container mt-5 mb-5'>
                    {this.state.isDesktop ? (
                        <div className='col-lg-12'>
                            <div className='row'>
                                <div className='col-lg-3 mt-3'>
                                    <Link to='/' className={`brand-title ${theme}-title`}>Healthy Stamp</Link>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-title footer-title mb-2`}>Explore</div>
                                    <div><Link to='/' className={`${theme}-text`}>Home</Link></div>
                                    <div><Link to='/contact' className={`${theme}-text`}>Contact</Link></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-title footer-title mb-2`}>Follow</div>
                                    <div><a href='https://www.facebook.com/Healthy-Stamp-1750298871738308' rel='nofollow' className={`${theme}-text`}>Facebook</a></div>
                                    <div><a href='https://www.instagram.com/healthystamp' rel='nofollow' className={`${theme}-text`}>Instagram</a></div>
                                    <div><a href='https://www.twitter.com/healthystamp' rel='nofollow' className={`${theme}-text`}>Twitter</a></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-title footer-title mb-2`}>Get in touch</div>
                                    <div><a href='mailto:info@healthystamp.com' rel='nofollow' className={`${theme}-text`}>info@healthystamp.com</a></div>
                                    <div><a href='tel:0894518912' rel='nofollow' className={`${theme}-text`}>(089) 451 8912</a></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='col-lg-12 text-center'>
                            <div className='mb-5'><Link to='/' className={`brand-title ${theme}-title`}>Healthy Stamp</Link></div>
                            <div className={`${theme}-title footer-title mb-2`}>Get in touch</div>
                            <div><a href='mailto:info@healthystamp.com' rel='nofollow' className={`${theme}-text`}>info@healthystamp.com</a></div>
                            <div className='mb-3'><a href='tel:0894518912' rel='nofollow' className={`${theme}-text`}>(089) 451 8912</a></div>
                            <div>
                                <a href='https://www.facebook.com/Healthy-Stamp-1750298871738308' rel='nofollow'><i className='fab fa-facebook mr-5'></i></a>
                                <a href='https://www.instagram.com/healthystamp' rel='nofollow'><i className='fab fa-instagram mr-5'></i></a>
                                <a href='https://www.twitter.com/healthystamp' rel='nofollow'><i className='fab fa-twitter'></i></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;