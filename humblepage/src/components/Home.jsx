import React from 'react';

const me = require('../imgs/me.png');
const logoWhite = require('../imgs/logo-white.png');


const styles = {
    topPadding: {marginTop: 20},
    border: {backgroundColor: '#7289DA', color: '#111', borderRadius: '10%'},
    font: {fontFamily: 'Helvetica', fontWeight: 700, fontSize: '12px'},
    brand: {color: '#fff', fontSize: 34, fontWeight: 700, textDecoration: 'none'},
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
        this.setState({ isDesktop: window.innerWidth > 1024 });
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
            <div>
                {this.state.isDesktop ? (
                    <div className='hero-section'>
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className='container mb-5'>
                                <a href='/' style={styles.brand}><img src={logoWhite} alt='logo-white' className='img-fluid mr-2' height='60' width='60'/> { this.state.isDesktop ? ('humblepage') : (null) }</a>
                                <ul className="nav justify-content-end">
                                    <li className="nav-item"><span className='nav-link' style={{...styles.navItem, ...styles.font}} onClick={this.scrollToAbout}>ABOUT</span></li>
                                    <li className="nav-item"><span className='nav-link' style={{...styles.navItem, ...styles.font}} onClick={this.scrollToServices}>SERVICES</span></li>
                                    <li className="nav-item"><span className='nav-link' style={{...styles.navItem, ...styles.font}} onClick={this.scrollToContactUs}>CONTACT</span></li>
                                </ul>
                            </div>
                        </nav>
                        <div className='container' style={{color: '#fff'}}>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <h4><b>Let your website do the talking</b></h4>
                                    <h5>
                                        Humblepage is a web design and development 
                                        company based in Dublin, Ireland. 
                                        We help entrepreneurs attract more customers
                                        and attention for their business online.
                                    </h5>
                                    <span className='btn btn-humblepage-alternative' onClick={this.scrollToContactUs}>Contact us</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='hero-section-mobile'>
                            <div className='container'>
                                <ul className="nav justify-content-center">
                                    <li className='nav-item'><a href='/' style={styles.brand} className='nav-link'><img src={logoWhite} alt='logo-white' className='img-fluid mr-2' height='60' width='60'/> humblepage</a></li>
                                </ul>
                                <ul className="nav justify-content-center">
                                    <li className="nav-item"><span className='nav-link' style={{...styles.navItem, ...styles.font}} onClick={this.scrollToAbout}>ABOUT</span></li>
                                    <li className="nav-item"><span className='nav-link' style={{...styles.navItem, ...styles.font}} onClick={this.scrollToServices}>SERVICES</span></li>
                                    <li className="nav-item"><span className='nav-link' style={{...styles.navItem, ...styles.font}} onClick={this.scrollToContactUs}>CONTACT</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                <div className='container mt-3' id='feature-section'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            {!this.state.isDesktop ? (
                                <div className='col-lg-12'>
                                    <h4><b>LET YOUR WEBSITE DO THE TALKING</b></h4>
                                    <h5>
                                        Humblepage is a web design and development 
                                        company based in Dublin, Ireland.
                                        We help entrepreneurs attract more customers
                                        and attention for their business online.
                                    </h5>
                                    <span className='btn btn-humblepage-alternative' onClick={this.scrollToContactUs}>Contact us</span>
                                </div>
                            ) : (null)}
                            <div className='col-lg-9 mb-5' id='about'>
                                <h4><b>THE RIGHT APPROACH</b></h4>
                                <h5>
                                    Most online strategies being sold today are focused on the wrong things. 
                                    SEO. Adwords. Mobile optimization and tablet friendly design. 
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
                            </div>
                            <div className='col-lg-3 text-center mb-5'>
                                <img src={me} alt='me' className='img-fluid rounded' />
                                <small>John Claro, Founder</small>
                            </div>
                            <div className='col-lg-6 mb-5' id='services'>
                                <h4><b>WE GET RESULTS</b></h4>
                                <h5>
                                    If you have a need for results then reach out. 
                                    We won’t try impress you with fancy features or cool buzz words. 
                                    We are normal everyday folk who work hard to get our clients big results. 
                                    Our websites are built around what is best for you and the people you want to connect with. 
                                </h5>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4><b>SIMPLE SUCCESS</b></h4>
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
                            <div className='col-lg-12' id='contactus'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <div className='text-center'>
                                            <h4><b>CONTACT US</b></h4>
                                            <h5>Let’s get things started.</h5>
                                            <h5>Send us a quick email below and we are happy to write back or get on a phone call.</h5>
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
                                                    <input type='number' id='phone' name='phone' className='form-control mb-3' required></input>
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
                </div>
            </div>
        )
    }
}

export default Home;