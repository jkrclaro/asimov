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
                                    <span className={`brand-title ${theme}-text`}>Leprechaun Design</span>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-text footer-title mb-2`}>Explore</div>
                                    <div><Link to='/about' className={`${theme}-text`}>About</Link></div>
                                    <div><Link to='/contact' className={`${theme}-text`}>Contact</Link></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-text footer-title mb-2`}>Follow</div>
                                    <div><a href='https://www.facebook.com/leprechaundesign' rel='nofollow' className={`${theme}-text`}>Facebook</a></div>
                                    <div><a href='https://www.instagram.com/leprechaundesign' rel='nofollow' className={`${theme}-text`}>Instagram</a></div>
                                    <div><a href='https://www.twitter.com/leprechaundsgn' rel='nofollow' className={`${theme}-text`}>Twitter</a></div>
                                    <div><a href='https://www.linkedin.com/company/leprechaundesign' rel='nofollow' className={`${theme}-text`}>LinkedIn</a></div>
                                </div>
                                <div className='col-lg-3 mt-3'>
                                    <div className={`${theme}-text footer-title mb-2`}>Get in touch</div>
                                    <div><a href='mailto:john@humblepage.com' rel='nofollow' className={`${theme}-text`}>john@humblepage.com</a></div>
                                    <div><a href='tel:0894518912' rel='nofollow' className={`${theme}-text`}>(089) 451 8912</a></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className='col-lg-12 text-center'>
                            <div className='mb-3'><span className={`brand-title ${theme}-text`}>Leprechaun Design</span></div>
                            <div className={`${theme}-text footer-title mb-2`}>Get in touch</div>
                            <div><a href='mailto:john@humblepage.com' rel='nofollow' className={`${theme}-text`}>john@humblepage.com</a></div>
                            <div><a href='tel:0894518912' rel='nofollow' className={`${theme}-text`}>(089) 451 8912</a></div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Footer;