import React from 'react';

import Header from './Header';
import WorkWithUs from './WorkWithUs';


class About extends React.Component {

    state = {
        isDesktop: false
    }
    updatePredicate = this.updatePredicate.bind(this);

    componentDidMount() {
        document.title = 'Leprechaun Design - About';
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

    render() {
        return (
            <div>
                <Header theme='main'/>
                <div className='container'>
                    <div className='col-lg-10 mt-5 mb-5'>
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
                    <div className='col-lg-12'>
                        <h4 className='h4-title mb-5'>What we do</h4>
                        <div className='row'>
                            <div className='col-lg-4 mb-3'>
                                <h5 className='h5-title mb-3'>Web development</h5>
                                <p className='p-content'>
                                    We offer flexible services to 
                                    ensure that your web platform is 
                                    aligned with your business 
                                    initiatives and marketing goals.
                                </p>
                            </div>
                            <div className='col-lg-4 mb-3'>
                                <h5 className='h5-title'>UI / UX design</h5>
                                <p className='p-content'>
                                    We work as an extension of your 
                                    company and collaborate with you 
                                    to create a website tailored to 
                                    your brand’s goals and initiatives.
                                </p>
                            </div>
                            <div className='col-lg-4 mb-3'>
                                <h5 className='h5-title'>Responsive web design</h5>
                                <p className='p-content'>
                                    We create engaging visuals that 
                                    scales across desktop, tablet and 
                                    mobile ensuring your brand’s 
                                    website works at all sizes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <WorkWithUs />
            </div>
        )
    }
}

export default About;