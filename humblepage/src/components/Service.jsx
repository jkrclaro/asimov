import React from 'react';

const vector2 = require('../imgs/vector2.png');
const vector3 = require('../imgs/vector3.png');
const vector4 = require('../imgs/vector4.png');
const styles = {
    serviceFont: {fontFamily: 'Titillium Web'},
}

class Service extends React.Component {

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
                <div className='container mt-5' style={styles.serviceFont}>
                    <h1 className='mb-5'><b>This is what we offer.</b></h1>
                    <div className='row'>
                        <div className='col-lg-6'>
                            {this.state.isDesktop ? (
                                <img src={vector2} className='img-fluid mt-5'></img>
                            ) : (null)}
                        </div>
                        <div className='col-lg-6'>
                        <h3 className='theme-color'><b>WEB DESIGN</b></h3>
                            <h5><b>Our dev team brings engaging visuals to life through custom development.</b></h5>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>Free Hosting</li>
                                        <li>Responsive Development</li>
                                        <li>Javascript &amp; React</li>
                                    </ul>
                                </div>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>Front End Development</li>
                                        <li>CSS / HTML</li>
                                        <li>Single Page Application</li>
                                    </ul>
                                </div>
                            </div>
                            <p className='text-muted'>
                                From front-end to back-end, leverage custom 
                                development to create an intuitive website 
                                for your users as well as your internal team. 
                                Our in-house development team works seamlessly 
                                with our creative team to build a website 
                                supported by engaging animations and purposeful 
                                interactions. By combining elevate visuals with 
                                sophisticated motion elements, your website can 
                                engage web users and ultimately convert them to 
                                loyal customers.
                            </p>
                            <p className='text-muted'>
                                We offer flexible services to ensure that your 
                                web platform is aligned with your business 
                                initiatives and marketing goals. 
                                From custom code, to seamless integration, 
                                to exclusive portal functionality, our 
                                dedicated team of developers have the 
                                capabilities to take your website to the next level.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                        <h3 className='theme-color'>
                            <b>UI / UX DESIGN</b></h3>
                            <h5><b>We build elevated websites, optimized for engagement and conversion.</b></h5>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>Interface</li>
                                        <li>Usability</li>
                                        <li>Interactions</li>
                                    </ul>
                                </div>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>User Experience</li>
                                        <li>Accessibility</li>
                                        <li>Custom</li>
                                    </ul>
                                </div>
                            </div>
                            <p className='text-muted'>
                                UI refers to user interface design,
                                which includes all visual design elements in the series of web pages or screens. 
                                UX refers to user experience, which is the 
                                internal experience that a user participates 
                                in as they interact with a brand's website, 
                                product, or service. 
                                An impactful website brings together content 
                                architecture, typography, color, photos, videos, 
                                and interactive elements in order to create a 
                                meaningful user journey that ultimately aims 
                                to convert customers.
                            </p>
                            <p className='text-muted'>
                                We work as an extension of your company’s 
                                marketing team to build a website driven by 
                                intuitive UI and engaging UX. We combine 
                                best-in-class web design, sophisticated UI 
                                elements, and an intuitive path to purchase 
                                to drive user engagement and conversion. 
                                Our dedicated team collaborates with you to create a 
                                website tailored to your brand’s goals and initiatives.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            {this.state.isDesktop ? (
                                <img src={vector3} className='img-fluid mt-5'></img>
                            ) : (null)}
                        </div>
                        <div className='col-lg-6'>
                            {this.state.isDesktop ? (
                                <img src={vector4} className='img-fluid mt-5'></img>
                            ) : (null)}
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h3 className='theme-color'><b>RESPONSIVE WEB DESIGN</b></h3>
                            <h5><b>We ensure that your platform works well across desktop, tablet, and mobile.</b></h5>
                            <div className='row'>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>Mobile Functionality</li>
                                        <li>Social Optimization</li>
                                        <li>Cross-Device Testing</li>
                                    </ul>
                                </div>
                                <div className='col-sm-6'>
                                    <ul>
                                        <li>Tablet Functionality</li>
                                        <li>Mobile Development</li>
                                        <li>Cross-Browser Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <p className='text-muted'>
                                Responsive design is an approach to web design 
                                that allows the pages of a website to render, 
                                or "respond," to different device, window, or screen sizes. 
                                An effective website translates seamlessly 
                                across all devices and browsers, ensuring that 
                                the pages maintain optimum functionality and visual layout. 
                                Depending on the client and needs, some websites 
                                may require a mobile-first design approach to 
                                accommodate for customers on-the-go.
                            </p>
                            <p className='text-muted'>
                                With the digital landscape evolving, 
                                it is essential to build a fully-responsive 
                                website that translates effectively across all 
                                devices and browsers. 
                                Users expect intuitive, sophisticated web 
                                experiences, both on their computers as well 
                                as mobile devices. Our design team creates 
                                engaging visuals and scales them across desktop, 
                                tablet, and mobile to ensure that your brand’s 
                                website is impactful at all touchpoints.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Service;