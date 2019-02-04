import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logo = require('../imgs/logo.png');
const vector1 = require('../imgs/vector1.png');
const vector2 = require('../imgs/vector2.png');


const styles = {
    topPadding: {marginTop: 20},
    border: {backgroundColor: '#7289DA', color: '#111', borderRadius: '10%'},
    navItem: {color: '#fff', cursor: 'pointer'},
    navItemInverse: {color: '#E34343', cursor: 'pointer'},
    cursor: {cursor: 'pointer'},
    menuBar: {fontSize: 30, color: '#fff'},
    professionalFont: {fontFamily: 'Georgia'}
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

    openNav() {
        document.getElementById("overlay-nav").style.width = "100%";
    }

    closeNav() {
        document.getElementById("overlay-nav").style.width = "0%";
    }

    scrollToAbout = () => {
        const aboutId = document.getElementById('about')
        aboutId.scrollIntoView({behavior: "smooth"});
    }

    render() {
        return (
            <div>
                <div id="overlay-nav" className="overlay">
                    <span className="closebtn" style={styles.cursor} onClick={this.closeNav}>&times;</span>
                    <div className="overlay-content">
                        <div className='container'>              
                            <b>
                                <a href="/">About</a>                
                                <a className='mb-5' href="/">Contact</a>
                                <a href="mailto:gethumblepage@gmail.com" style={{fontSize: 20}}>gethumblepage@gmail.com</a>
                                <a href="tel:1231234567">(123) 123-4567</a>
                            </b>
                        </div>
                    </div>
                </div>

                <div className='hero-section'>
                    <nav className="navbar navbar-expand-lg navbar-dark" >
                        <div className='container mt-3'>
                            <a href='/' style={styles.brand}><img src={logo} alt='logo' height='40' width='40'></img></a>
                            {this.state.isDesktop ? (
                                <ul className="nav justify-content-end">
                                    <li className='nav-item'><span className='nav-link'><a className='btn btn-humblepage-primary-inverse' href='tel:1231234567'><FontAwesomeIcon icon='phone'/> (123) 123-4567</a></span></li>
                                    <li className='nav-item'><span className='nav-link'><a className='btn btn-humblepage-primary-inverse' href='mailto:gethumblepage@gmail.com'><FontAwesomeIcon icon='envelope'/> gethumblepage@gmail.com</a> </span></li>
                                </ul>
                            ) : (
                                <ul className="nav justify-content-end">
                                    <li className='nav-item'><span className='nav-link' style={{...styles.menuBar, ...styles.cursor}} onClick={this.openNav}><FontAwesomeIcon icon='bars'/></span></li>
                                </ul>
                            )}
                        </div>
                    </nav>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 mt-5'>
                                <div className='mb-5' style={styles.professionalFont}>
                                    <h1>Tailored design for growing brands. Based in Dublin.</h1>
                                    <h1 className='text-muted'>We focus on driving results.</h1>
                                </div>
                                <span className='btn btn-humblepage-primary-inverse mr-2 mb-5' onClick={this.scrollToAbout}>About us</span>
                                <a className='btn btn-humblepage-primary-inverse mb-5' href='mailto:gethumblepage@gmail.com'>Let's talk</a>
                            </div>
                            {this.state.isDesktop ? (
                                <div className='col-lg-6 mt-5'>
                                    <img src={vector1} alt='vector1' className='img-fluid'></img>
                                </div>
                            ) : (null)}
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='col-lg-12 mb-3 mt-5'>
                        <div className='row'>
                            <div className='col-lg-12' id='about'>
                                <div className='text-center mb-5'>
                                    <h3 className='theme-color'><b>GET TO KNOW US</b></h3>
                                    <h1><b>A LOOK AT OUR VALUES, BELIEFS, AND CULTURE.</b></h1>
                                </div>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>FORWARD THINKING</b></h5>
                                <p className='text-muted'>
                                    We pride ourselves on pushing the boundaries of digital design and development. 
                                    We combine relevant trends and best practices to build platforms with longevity.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>ENDLESS DRIVE</b></h5>
                                <p className='text-muted'>
                                    Each member is dedicated to perfecting their craft and up-leveling their work.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>PURE PASSION</b></h5>
                                <p className='text-muted'>
                                    Every member of our team is genuinely passionate about doing great work for brands we believe in—from global tech giants, to ambitious startups.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>DETAIL ORIENTED</b></h5>
                                <p className='text-muted'>
                                    We sweat the small stuff, because we believe that the details make the design. A time-tested and true platform values quality over quantity.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>GREAT CHARACTER</b></h5>
                                <p className='text-muted'>
                                    We believe in people over profit; hiring the right individuals and investing in personal growth is essential. More than skill, drive, or experience, great work is rooted in character.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>SELF STARTING</b></h5>
                                <p className='text-muted'>
                                    Having an entrepreneurial mindset ensures that every member of our team proudly takes ownership of each project, from concept to execution.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>WORK HARD, PLAY HARD</b></h5>
                                <p className='text-muted'>
                                    Occasionally, we like to celebrate our accomplishments. Sometimes the late nights, early mornings, and week-long design sprints call for strong drinks with good company.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h5><b>STAY HUMBLE</b></h5>
                                <p className='text-muted'>
                                    We stand up for what we believe in, but never let ego get in the way. The key to growth is to embrace feedback and from team members and clients.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor: '#FAFAFA'}}>
                    <div className='container'>
                        <div className='col-lg-12' style={{fontFamily: 'Karla'}}>
                            <div className='row'>
                                <div className='col-lg-6 mt-5 mb-5'>
                                    <h3 className='mb-3'><b>We look forward to hearing from you.</b></h3>
                                    <div className='mb-5'>
                                        <div>You can always contact us directly at <a href='mailto:gethumblepage@gmail.com' className='theme-color'>gethumblepage@gmail.com</a></div>
                                        <div>or call us at <a href='tel:1231234567' className='theme-color'>(123) 123-4567</a></div>
                                    </div>
                                    <form action='https://formspree.io/gethumblepage@gmail.com' method='POST'>
                                        <h5><b>Project information</b></h5>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <label htmlFor='companyname'><small>COMPANY NAME</small></label>
                                                <input type='text' id='companyname' name='companyname' className='form-control mb-3'></input>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label htmlFor='websiteurl'><small>WEBSITE URL</small></label>
                                                <input type='text' id='websiteurl' name='websiteurl' className='form-control mb-3'></input>
                                            </div>
                                        </div>
                                        <label htmlFor='message'><small>INFORMATION</small></label>
                                        <textarea name='message' rows='10' placeholder='Brief, scope, timeline, budget, etc.' id='message' className='form-control mb-3' required></textarea>
                                        <h5><b>Contact information</b></h5>
                                        <div className='row'>
                                            <div className='col-lg-6'>
                                                <label htmlFor='email'><small>EMAIL</small></label>
                                                <input type='email' id='_replyto' name='_replyto' className='form-control mb-3' required></input>
                                            </div>
                                            <div className='col-lg-6'>
                                                <label htmlFor='phonenumber'><small>PHONE NUMBER</small></label>
                                                <input type='text' id='phonenumber' name='phonenumber' className='form-control mb-3' required></input>
                                            </div>
                                        </div>
                                        <input type="hidden" name="_subject" value="Humblepage Proposal" />
                                        <input type="hidden" name="_next" value="https://humblepage.com" />
                                        <input type='submit' className='btn btn-humblepage-alternative' value='Submit'></input>
                                    </form>
                                </div>
                                {this.state.isDesktop ? (
                                    <div className='col-lg-6 text-center mt-5'>
                                        <img src={vector2} className='img-fluid' alt='vector2' height='400' width='400'></img>
                                    </div>
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