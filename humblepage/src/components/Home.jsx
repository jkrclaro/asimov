import React from 'react';

const success1 = require('../imgs/success1.png');
const success2 = require('../imgs/success2.png');
const success3 = require('../imgs/success3.png');
const logo = require('../imgs/logo.png');


const styles = {
    topPadding: {marginTop: 20},
    border: {backgroundColor: '#7289DA', color: '#111', borderRadius: '10%'},
    font: {fontFamily: 'Helvetica', fontWeight: 700, fontSize: '12px'},
    brand: {color: '#fff', fontSize: 34, textDecoration: 'none'},
    navItem: {color: '#fff', cursor: 'pointer'},
}

class Home extends React.Component {
    
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

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    scrollToContactUs = () => {
        const contactUsId = document.getElementById('contactus')
        contactUsId.scrollIntoView({behavior: "smooth"});
    }

    scrollToServices = () => {
        const servicesId = document.getElementById('services')
        servicesId.scrollIntoView({behavior: "smooth"});
    }

    scrollToAbout = () => {
        const aboutId = document.getElementById('about')
        aboutId.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div className='hero-section'>
                <div className='container'>
                    <ul className="nav justify-content-center">
                        <li className='nav-item'><a href='/' style={styles.brand} className='nav-link'><img src={logo} alt='logo' className='img-fluid mr-2' height='250' width='100'/></a></li>
                    </ul>
                    <ul className="nav justify-content-center">
                    </ul>
                </div>
                <div className='container'>
                    <div className='col-lg-12 text-center mt-5 mb-5'>
                        <h2><b>WE FOCUS ON DRIVING RESULTS</b></h2>
                        <div><h4>Humblepage is a web design company based in Dublin, Ireland.</h4></div>
                        <div><h4>We collaborate with brands to accelerate their growth.</h4></div>
                        <a className='btn btn-humblepage-primary mt-3 mr-2' href='mailto:gethumblepage@gmail.com'>Contact us</a>
                        <span className='btn btn-humblepage-alternative mt-3' onClick={this.scrollToContactUs}>Via Form</span>
                    </div>
                    <div className='col-lg-12 mb-3' id='about'>
                        <div className='row'>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-2 text-center mb-3'>
                                <img src={success3} alt='success-3' className='img-fluid' height='100' width='100'></img>
                            </div>
                            <div className='col-lg-6'>
                                <h5><b>THE RIGHT APPROACH</b></h5>
                                <p>
                                    Most online strategies being sold today are focused on the wrong things. 
                                    SEO. Adwords. Mobile optimization and tablet friendly design. 
                                    It sounds cool but it misses what really matters. 
                                </p>
                                <p>
                                    The truth is your customers only care about 
                                    how you can help them. There is a huge 
                                    difference between building a website and 
                                    building trust. 
                                </p>
                                <p>
                                    <b>We do things differently. </b>
                                </p>
                                <p>
                                    When we work with you we build innovative sales 
                                    and marketing systems that really get results. 
                                    We will find you not just more business, but 
                                    the right business. Those customers who are 
                                    thrilled to work with you. Those clients who 
                                    understand that you’re unique and different 
                                    from anyone else in the marketplace. 
                                    The people who will love your company and 
                                    happily recommend your services far and wide. 
                                </p>
                            </div>
                        </div>
                        <div className='col-lg-2'></div>
                    </div>
                    <div className='col-lg-12'>
                        {this.state.isDesktop ? (
                            <div className='row'>
                                <div className='col-lg-2'></div>
                                <div className='col-lg-6 mb-3' id='services'>
                                    <h5><b>WE GET RESULTS</b></h5>
                                    <p>
                                        If you have a need for results then reach out. 
                                        We won’t try impress you with fancy features or cool buzz words. 
                                        We are normal everyday folk who work hard to get our clients big results. 
                                        Our websites are built around what is best for you and the people you want to connect with. 
                                    </p>
                                </div>
                                <div className='col-lg-2 text-center'>
                                    <img src={success1} alt='success-1' className='img-fluid' height='100' width='100'></img>
                                </div>
                            </div>
                        ) : (
                            <div className='row'>
                                <div className='col-lg-2'></div>
                                <div className='col-lg-2 text-center mb-3'>
                                    <img src={success1} alt='success-1' className='img-fluid' height='100' width='100'></img>
                                </div>
                                <div className='col-lg-6 mb-3' id='services'>
                                    <h5><b>WE GET RESULTS</b></h5>
                                    <p>
                                        If you have a need for results then reach out. 
                                        We won’t try impress you with fancy features or cool buzz words. 
                                        We are normal everyday folk who work hard to get our clients big results. 
                                        Our websites are built around what is best for you and the people you want to connect with. 
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='col-lg-12 mb-5'>
                        <div className='row'>
                            <div className='col-lg-2'></div>
                            <div className='col-lg-2 text-center mb-3'>
                                <img src={success2} alt='success-2' className='img-fluid' height='100' width='100'></img>
                            </div>
                            <div className='col-lg-6'>
                                <h5><b>SIMPLE SUCCESS</b></h5>
                                <p>
                                    Most businesses feel that to compete online 
                                    they need to be doing a dozen different things. 
                                    They don’t. We set up easy to manage systems 
                                    that run like clockwork. No monthly service 
                                    fees, no hidden costs, no nonsense – just 
                                    consistent sales and results. This allows you 
                                    to focus on your own strengths and let us 
                                    worry about running your online assets.
                                </p>
                                <p>
                                    Chances are success is closer than you think. 
                                    We love to work with people who want real 
                                    change and who are willing to let us get it 
                                    for them. If you want to do things differently 
                                    then we can’t wait to help.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-12' id='contactus'>
                        <div className='card'>
                            <div className='card-body'>
                                <div className='text-center mb-3'>
                                    <h5><b>CONTACT US</b></h5>
                                    <div>Let’s get things started.</div>
                                    <div>Send us a quick email below and we are happy to write back or get on a phone call.</div>
                                </div>
                                <form action='https://formspree.io/gethumblepage@gmail.com' method='POST'>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <label htmlFor='first_name'><small>FIRST NAME</small></label>
                                            <input type='text' id='first_name' name='first_name' className='form-control mb-3' required></input>
                                        </div>
                                        <div className='col-lg-6'>
                                            <label htmlFor='last_name'><small>LAST NAME</small></label>
                                            <input type='text' id='last_name' name='last_name' className='form-control mb-3' required></input>
                                        </div>
                                        <div className='col-lg-6'>
                                            <label htmlFor='_replyto'><small>EMAIL</small></label>
                                            <input type='email' id='_replyto' name='_replyto' className='form-control mb-3' required></input>
                                        </div>
                                        <div className='col-lg-6'>
                                            <label htmlFor='phone'><small>PHONE</small></label>
                                            <input type='text' id='phone' name='phone' className='form-control mb-3' required></input>
                                        </div>
                                        <div className='col-lg-12'>
                                            <label className='message'><small>MESSAGE</small></label>
                                            <textarea name='message' id='message' className='form-control mb-3'></textarea>
                                        </div>
                                    </div>
                                    <input type="hidden" name="_subject" value="Humblepage Proposal" />
                                    <input type="hidden" name="_next" value="https://humblepage.com" />
                                    <input type='submit' className='btn btn-humblepage-primary btn-block' value='Send message'></input>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;