import React from 'react';
import { Link } from 'react-router-dom';


const vector2 = require('../imgs/vector2.png');
const vector3 = require('../imgs/vector3.png');
const vector4 = require('../imgs/vector4.png');


class ServiceList extends React.Component {

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
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-6 text-center'>
                            {this.state.isDesktop ? (
                                <img alt='vector-2' src={vector2} className='img-fluid mt-5'></img>
                            ) : (null)}
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h2 className='h2-title'>WEB DESIGN</h2>
                            <p>Our team brings engaging visuals to life through custom development.</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <ul>
                                        <li>Mobile Friendly</li>
                                        <li>Responsive Development</li>
                                        <li>Javascript &amp; React</li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul>
                                        <li>Front End Development</li>
                                        <li>CSS / HTML</li>
                                        <li>Single Page Application</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
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
                            <p>
                                We offer flexible services to ensure that your 
                                web platform is aligned with your business 
                                initiatives and marketing goals. 
                                From custom code, to seamless integration, 
                                our dedicated team has the 
                                capabilities to take your website to the next level.
                            </p>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h2 className='h2-title'>UI / UX DESIGN</h2>
                            <p>We build elevated websites, optimized for engagement and conversion.</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <ul>
                                        <li>Interface</li>
                                        <li>Usability</li>
                                        <li>Interactions</li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul>
                                        <li>User Experience</li>
                                        <li>Accessibility</li>
                                        <li>Custom</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
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
                            <p>
                                We combine best-in-class web design, sophisticated UI 
                                elements, and an intuitive path to purchase 
                                to drive user engagement and conversion. 
                                Our dedicated team collaborates with you to create a 
                                website tailored to your brand’s goals and initiatives.
                            </p>
                        </div>
                        <div className='col-lg-6'>
                            {this.state.isDesktop ? (
                                <img alt='vector-3' src={vector3} className='img-fluid mt-5'></img>
                            ) : (null)}
                        </div>
                        <div className='col-lg-6'>
                            {this.state.isDesktop ? (
                                <img alt='vector-4' src={vector4} className='img-fluid mt-5'></img>
                            ) : (null)}
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h2 className='h2-title'>RESPONSIVE WEB DESIGN</h2>
                            <p>We ensure that your platform works well across desktop, tablet, and mobile.</p>
                            <div className='row'>
                                <div className='col-6'>
                                    <ul>
                                        <li>Mobile Functionality</li>
                                        <li>Social Optimization</li>
                                        <li>Cross-Device Testing</li>
                                    </ul>
                                </div>
                                <div className='col-6'>
                                    <ul>
                                        <li>Tablet Functionality</li>
                                        <li>Mobile Development</li>
                                        <li>Cross-Browser Testing</li>
                                    </ul>
                                </div>
                            </div>
                            <p>
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
                            <p>
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
                <div className='section-work'>
                    <div className='container text-center'>
                        <h2 className='h2-title' style={{paddingTop: 40}}>WORK WITH US</h2>
                        <h3>Tell us a little bit about your project.</h3>
                        <Link to='/contact' className='btn btn-humblepage-primary-inverse mb-5'>Let's talk</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServiceList;