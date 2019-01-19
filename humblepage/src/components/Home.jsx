import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const isometric1 = require('../imgs/isometric1.png');
const mobileresponsive1 = require('../imgs/mobileresponsive.png');
const enforcehttps = require('../imgs/enforcehttps.png');
const styles = {
    reactIcon: {fontSize: 60, color: '#00d8ff'},
    githubIcon: {fontSize: 60, color: '#111'}
}

class Home extends React.Component {
    
    state = {
        isFormOpen: false,
        isDesktop: false,
        email: '',
        message: ''
    }
    updatePredicate = this.updatePredicate.bind(this);
    viaForm = this.viaForm.bind(this);

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

    viaForm() {
        this.setState({isFormOpen: !this.state.isFormOpen});
    }

    handleChange = (event) => {
        console.log(`${event.target.name} : ${event.target.value}`);
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className='container'>
                <div className='col-lg-12 mb-5'>
                    <div className='row'>
                        <div className='col-lg-6 mb-5'>
                            <div className='mb-3'>
                                <h1><b>Get a modern website</b></h1>
                                <h4>
                                    Humblepage builds brochure websites 
                                    or landing pages for active small businesses, 
                                    creative freelancers or wedding couples.
                                </h4>
                            </div>
                            <div className='mb-3'>
                                <a className='btn btn-humblepage-primary mr-3' href='mailto:gethumblepage@gmail.com'>Contact us</a>
                                <span className='btn btn-humblepage-alternative' onClick={this.viaForm}>
                                    {this.state.isFormOpen ? ('Close') : ('Via form')}
                                </span>
                            </div>

                            <div>
                                {this.state.isFormOpen ? (
                                    <form action='https://formspree.io/gethumblepage@gmail.com' method='POST'>
                                        <input type='email' name='email' placeholder='Your email' className='form-control mb-3' value={this.state.email} onChange={this.handleChange}></input>
                                        <textarea name='message' placeholder='Your message' className='form-control mb-3' value={this.state.message} onChange={this.handleChange}></textarea>
                                        <input type='submit' className='btn btn-humblepage-alternative btn-block' value='Send message'></input>
                                    </form>
                                ) : (null)}
                            </div>
                        </div>
                        <div className='col-lg-6 text-center'>
                            <img src={isometric1} className='img-fluid' alt='isometric1'></img>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 text-center mb-5'>
                    <h4>
                        Humblepage is a web design company based in Dublin, Ireland.
                        Let us help you get a professional website in a matter of days. 
                        Your search for a web designer or web developer ends here.
                        No more hidden fees or outrages quotes.
                        Get your business online and make it as an extension of your brand.
                    </h4>
                </div>
                <div className='col-lg-12 mb-5'>
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            <FontAwesomeIcon icon={['fab', 'github']} style={styles.githubIcon}/>
                            <h4><b>No more monthly hosting cost</b></h4>
                            <h5>
                                Get your site powered by the world's leading
                                software development platform backed by Microsoft
                                to ensure you don't pay for montly hosting cost.
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <FontAwesomeIcon icon={['fab', 'react']} style={styles.reactIcon}/>
                            <h4><b>Single page application</b></h4>
                            <h5>
                                Our technology uses React to deliver a frictionless and instant
                                user experience for the user. React is continuously developed by Facebook
                                and backed by other large tech companies such as Airbnb, Netflix, etc.
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={mobileresponsive1} alt='mobile-responsive' height='60' width='60' />
                            <h4><b>Mobile responsive</b></h4>
                            <h5>
                                Provide great user experience across many devices and screen sizes all in one site.
                                Responsive web designs are considered <a href='https://developers.google.com/search/mobile-sites/'>best practice</a> by Google! 
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <img src={enforcehttps} alt='enforce-https' height='60' width='120' />
                            <h4><b>Enforce HTTPS</b></h4>
                            <h5>
                                Strengthen your website using HTTPS. 
                                Your site will then be served via CDN making your site faster and protected against DDoS attacks.
                            </h5>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12 mb-5'>
                    <div className='row'>
                        <div className={this.state.isDesktop ? ('col-lg-6 text-right') : ('col-lg-6 text-center')}>
                            <h4><b>Ready to get started?</b></h4>
                            <h5>
                                Get in touch, let us know your issue.
                            </h5>
                        </div>
                        <div  className={this.state.isDesktop ? ('col-lg-6') : ('col-lg-6 text-center')}>
                                <div className='mb-3'>
                                <a className='btn btn-humblepage-primary mr-3' href='mailto:gethumblepage@gmail.com'>Contact us</a>
                                <span className='btn btn-humblepage-alternative' onClick={this.viaForm}>
                                    {this.state.isFormOpen ? ('Close') : ('Via form')}
                                </span>
                            </div>

                            <div>
                                {this.state.isFormOpen ? (
                                    <form action='https://formspree.io/gethumblepage@gmail.com' method='POST'>
                                        <input type='email' name='email' placeholder='Your email' className='form-control mb-3' value={this.state.email} onChange={this.handleChange}></input>
                                        <textarea name='message' placeholder='Your message' className='form-control mb-3' value={this.state.message} onChange={this.handleChange}></textarea>
                                        <input type='submit' className='btn btn-humblepage-alternative btn-block' value='Send message'></input>
                                    </form>
                                ) : (null)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;