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
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false,
            isDesktop: false,
            email: '',
            message: ''
        }
        this.updatePredicate = this.updatePredicate.bind(this);
        this.viaForm = this.viaForm.bind(this);
        this.formRef = React.createRef();
        this.scrollToFormRef = this.scrollToFormRef.bind(this);
    }

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
        if (!this.state.isFormOpen) {
            this.scrollToFormRef();
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    scrollToFormRef() {
        window.scrollTo({
            top: this.formRef.current.offsetTop,
            behavior: 'smooth'
        })
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
                                    Humblepage is a web design company based in Dublin, Ireland.
                                    Modernize your website and make it an extension of your brand.
                                </h4>
                            </div>
                            <div className='mb-3'>
                                <a className='btn btn-humblepage-primary mr-3' href='mailto:gethumblepage@gmail.com'>Get In Touch</a>
                                <span className='btn btn-humblepage-alternative' onClick={this.viaForm}>
                                    {this.state.isFormOpen ? ('Close') : ('Via form')}
                                </span>
                            </div>

                            <div ref={this.formRef}>
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
                        Get a professional website in a matter of days. 
                        Your search for a web designer or web developer ends here.
                        No more hidden fees or outrages quotes.
                    </h4>
                </div>
                <div className='col-lg-12 mb-5'>
                    <div className='row'>
                        <div className='col-lg-6 mb-5'>
                            <FontAwesomeIcon icon={['fab', 'github']} style={styles.githubIcon}/>
                            <h4><b>No hosting cost</b></h4>
                            <h5>
                                Get your site powered by the world's leading
                                software development platform backed by Microsoft
                                to ensure you don't pay for montly hosting cost.
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <FontAwesomeIcon icon={['fab', 'react']} style={styles.reactIcon}/>
                            <h4><b>Single page application</b></h4>
                            <h5>
                                Your website will be developed using React, delivering you a frictionless and instant
                                user experience for your customers. React is maintained by Facebook
                                and used by other large tech companies such as Airbnb and Netflix.
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <img src={mobileresponsive1} alt='mobile-responsive' height='60' width='60' />
                            <h4><b>Mobile responsive</b></h4>
                            <h5>
                                Provide great user experience across many devices and screen sizes all in one site.
                                Fully mobile responsive designs are considered <a href='https://developers.google.com/search/mobile-sites/'>best practice</a> by Google! 
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <img src={enforcehttps} alt='enforce-https' height='60' width='120' />
                            <h4><b>Enforce HTTPS</b></h4>
                            <h5>
                                This further protects your website and users' browser from attackers.
                                In 2018, 51.8% of the 1,000,000 most
                                visited websites worldwide still only redirect to HTTPS.
                            </h5>
                        </div>
                        <div className={this.state.isDesktop ? ('col-lg-6 text-right') : ('col-lg-6 text-center')}>
                            <h4><b>Ready to get started?</b></h4>
                            <h5>
                                Get in touch with your website description.
                            </h5>
                        </div>
                        <div  className={this.state.isDesktop ? ('col-lg-6') : ('col-lg-6 text-center')}>
                            <div className='mb-3'>
                                <a className='btn btn-humblepage-primary mr-3' href='mailto:gethumblepage@gmail.com'>Get In Touch</a>
                                <span className='btn btn-humblepage-alternative' onClick={this.viaForm}>
                                    {this.state.isFormOpen ? ('Close') : ('Via form')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;