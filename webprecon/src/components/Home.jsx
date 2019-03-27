import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';


class Home extends React.Component {

    state = {
        isDesktop: false
    }
    updatePredicate = this.updatePredicate.bind(this);

    componentDidMount() {
        document.title = 'Webprecon - Website design for ambitious brands';
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
        window.scrollTo(0 ,0);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className='Site'>
                <div className='Site-content'>
                    <Header theme='invert' />
                    <div className='invert-bg'>
                        <div className='container mb-5'>
                            <div className='col-lg-12' style={{paddingTop: 50}}>
                                {this.state.isDesktop ? (
                                    <h1 className='h1-title mb-3'>
                                        Enhance your online presence with a website. We focus on the results.
                                    </h1>
                                ) : (
                                    <h1 className='h1-title h1-title-mobile mb-3'>
                                        Enhance your online presence with a website. We focus on the results.
                                    </h1>
                                )}
                                <Link to='/contact' className='btn btn-webprecon-primary'>Contact us</Link>
                            </div>
                        </div>
                        <div className='section-work'>
                            <div className='container'>
                                <div className='col-lg-12' style={{paddingTop: 50}}>
                                    <div className='row'>
                                        <div className='col-lg-4 mb-3'>
                                            <h3 className='h3-title mb-3'>Web development</h3>
                                            <p className='p-content'>
                                                We offer flexible web services to
                                                ensure that your web platform is
                                                aligned with your business
                                                initiatives and marketing goals.
                                            </p>
                                        </div>
                                        <div className='col-lg-4 mb-3'>
                                            <h3 className='h3-title'>UI / UX design</h3>
                                            <p className='p-content'>
                                                We work as an extension of your
                                                company and collaborate with you
                                                to create a website tailored to
                                                your brand’s goals and initiatives.
                                            </p>
                                        </div>
                                        <div className='col-lg-4 mb-3'>
                                            <h3 className='h3-title'>Responsive web design</h3>
                                            <p className='p-content'>
                                                We create engaging visuals that
                                                scales across desktop, tablet and
                                                mobile ensuring your brand’s
                                                website works at all sizes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-12 mt-5 mb-5 text-center'>
                                    {this.state.isDesktop ? (
                                        <h2 className='h2-title'>
                                            We are an independent company based in Dublin, Ireland.
                                            <span className='title-sub'> We work with people that wants real change.</span>
                                        </h2>
                                    ) : (
                                        <h2 className='h2-title h2-title-mobile'>
                                            We are an independent company based in Dublin, Ireland.
                                            <span className='title-sub'> We work with people that wants real change.</span>
                                        </h2>
                                    )}
                                </div>
                                <div className='col-lg-12 text-center'>
                                    <h3 className='h3-title' style={{paddingTop: 40}}>Work with us</h3>
                                    <p className='p-content'>Tell us a little bit about your project.</p>
                                    <Link to='/contact' className='btn btn-webprecon-alternative mb-5'>Get in touch</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer theme='main' />
            </div>
        )
    }
}

export default Home;
