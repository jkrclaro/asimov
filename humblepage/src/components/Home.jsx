import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const isometric1 = require('../imgs/isometric1.png');
const mobileresponsive = require('../imgs/mobileresponsive.png');
const enforcehttps = require('../imgs/enforcehttps.png');
const styles = {
    reactIcon: {fontSize: 60, color: '#00d8ff'},
    githubIcon: {fontSize: 60, color: '#111'}
}

class Home extends React.Component {
    
    state = {
        isDesktop: false,
        email: '',
        message: ''
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
        this.setState({ isDesktop: window.innerWidth > 1024 });
    };

    render() {
        return (
            <div className='container'>
                <div className='col-lg-12 mb-5'>
                    <div className='row'>
                        <div className='col-lg-6 mb-5'>
                            <div className='mb-3'>
                                <h1><b>Get a custom website</b></h1>
                                <h4>
                                    Humblepage builds websites that captures
                                    the owner's values.
                                </h4>
                            </div>
                            <div className='mb-3'>
                                <a className='btn btn-humblepage-primary mr-3' href='mailto:gethumblepage@gmail.com'>Get In Touch</a>
                                <Link to={process.env.PUBLIC_URL + '/contact'} className='btn btn-humblepage-primary mr-3'>Contact</Link>
                            </div>
                        </div>
                        <div className='col-lg-6 text-center'>
                            <img src={isometric1} className='img-fluid' alt='isometric1'></img>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 mb-5'>
                    <div className='row'>
                        <div className='col-lg-12 mb-5'>
                            <img src={mobileresponsive} alt='mobile-responsive' height='60' width='60' />
                            <h4><b>The right approach</b></h4>
                            <h5>
                                Most online strategies being sold today are 
                                focused on the wrong things. SEO. Adwords. 
                                Mobile optimization and tablet friendly design. 
                                It sounds cool but it misses what really matters. 
                            </h5>
                            <h5>
                                The truth is your customers only care about 
                                how you can help them. There is a huge 
                                difference between building a website and 
                                building trust. 
                            </h5>
                            <h5>
                                <b>We do things differently. </b>
                            </h5>
                            <h5>
                                When we work with you we build innovative sales 
                                and marketing systems that really get results. 
                                We will find you not just more business, but 
                                the right business. Those customers who are 
                                thrilled to work with you. Those clients who 
                                understand that you’re unique and different 
                                from anyone else in the marketplace. 
                                The people who will love your company and 
                                happily recommend your services far and wide. 
                            </h5>
                            <h5>
                                We can say this confidently because every year 
                                we create millions of dollars in revenue for 
                                the select few clients we work with. 
                                If you really want to reach your market we can help.
                            </h5>
                        </div>
                        <div className='col-lg-12 mb-5'>
                            <FontAwesomeIcon icon={['fab', 'react']} style={styles.reactIcon}/>
                            <h4><b>We get results</b></h4>
                            <h5>
                                If you have a need for results then reach out. We won’t try impress you with fancy features or cool buzz words. We are normal everyday folk who work hard to get our clients big results. Our websites are built around what is best for you and the people you want to connect with. 
                            </h5>
                            <h5>
                                Our biggest victories are watching our clients succeed. These are just a few of the people we have worked with since we launched. While some businesses have made well over one million dollars in direct revenue from our websites we love working on projects of all sizes.
                            </h5>
                        </div>
                        <div className='col-lg-12 mb-5'>
                            <FontAwesomeIcon icon={['fab', 'github']} style={styles.githubIcon}/>
                            <h4><b>Simple success</b></h4>
                            <h5>
                                Most businesses feel that to compete online 
                                they need to be doing a dozen different things. 
                                They don’t. We set up easy to manage systems 
                                that run like clockwork. No monthly service 
                                fees, no hidden costs, no nonsense – just 
                                consistent sales and results. This allows you 
                                to focus on your own strengths and let us 
                                worry about running your online assets.
                            </h5>
                            <h5>
                                Chances are success is closer than you think. 
                                We love to work with people who want real 
                                change and who are willing to let us get it 
                                for them. If you want to do things differently 
                                then we can’t wait to help.
                            </h5>
                        </div>
                        <div className='col-lg-12 text-center'>
                            <h4><b>Contact us</b></h4>
                            <h5>Let’s get things started.</h5>
                            <h5>Send us a quick email below and we are happy to write back or get on a phone call.</h5>
                        </div>
                        <div className='col-lg-12 mb-5'>
                            <form action='https://formspree.io/gethumblepage@gmail.com' method='POST'>
                                <div class='row'>
                                    <div class='col-lg-6'>
                                        <label for='id_first_name'><small>FIRST NAME</small></label>
                                        <input type='text' name='id_first_name' className='form-control mb-3' required></input>
                                    </div>
                                    <div class='col-lg-6'>
                                        <label for='id_last_name'><small>LAST NAME</small></label>
                                        <input type='text' name='id_last_name' className='form-control mb-3' required></input>
                                    </div>
                                    <div class='col-lg-6'>
                                        <label for='id_email'><small>EMAIL</small></label>
                                        <input type='text' name='id_email' className='form-control mb-3' required></input>
                                    </div>
                                    <div class='col-lg-6'>
                                        <label for='id_phone'><small>PHONE</small></label>
                                        <input type='text' name='id_phone' className='form-control mb-3' required></input>
                                    </div>
                                    <div class='col-lg-12'>
                                        <label class='id_message'><small>MESSAGE</small></label>
                                        <textarea name='message' placeholder='' className='form-control mb-3'></textarea>
                                    </div>
                                </div>
                                <input type='submit' className='btn btn-humblepage-primary btn-block' value='Send message'></input>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;