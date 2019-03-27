import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../imgs/logo.png');


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
                                    <Link to='/'><img src={logo} className='logo'></img></Link>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-title footer-title mb-2`}>Explore</div>
                                    <div><Link to='/' className={`${theme}-text`}>Home</Link></div>
                                    <div><Link to='/contact' className={`${theme}-text`}>Contact</Link></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-title footer-title mb-2`}>Follow</div>
                                    <div><a href='https://www.twitter.com/leprechaundsgn' rel='nofollow' className={`${theme}-text`}>Twitter</a></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-title footer-title mb-2`}>Get in touch</div>
                                    <div><a href='mailto:info@webprecon.com' rel='nofollow' className={`${theme}-text`}>info@webprecon.com</a></div>
                                    <div><a href='tel:0894518912' rel='nofollow' className={`${theme}-text`}>(089) 451 8912</a></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='col-lg-12 text-center'>
                            <hr/>
                            <div className='mt-5 mb-3'><Link to='/'><img src={logo} className='logo'></img></Link></div>
                            <div className={`${theme}-title footer-title mb-2`}>Get in touch</div>
                            <div><a href='mailto:info@webprecon.com' rel='nofollow' className={`${theme}-text`}>info@webprecon.com</a></div>
                            <div className='mb-3'><a href='tel:0894518912' rel='nofollow' className={`${theme}-text`}>(089) 451 8912</a></div>
                            <div>
                                <a href='https://www.twitter.com/webprecon' rel='nofollow'><i className='fab fa-twitter'></i></a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;
