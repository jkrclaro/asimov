import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    aboutFont: {fontFamily: 'Titillium Web'}
}

class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div style={styles.aboutFont}>
                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-12 mb-5'>
                            <h3 className='theme-color' id='about'><b>BASED IN DUBLIN, IRELAND</b></h3>
                            <h3><b>We are an independent web design company.</b></h3>
                            <h3><b>We collaborate with brands to accelerate their growth.</b></h3>
                        </div>
                        <div className='col-lg-12 mb-5'>
                            <h3 className='theme-color' id='about'><b>GET TO KNOW US</b></h3>
                            <h3><b>A LOOK AT OUR VALUES, BELIEFS, AND CULTURE.</b></h3>
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
                <div style={{backgroundColor: '#FAFAFA', ...styles.homeFont}}>
                    <div className='container text-center'>
                        <h3 className='theme-color' style={{paddingTop: 40}}><b>WORK WITH US</b></h3>
                        <h3><b>Tell us a little bit about your project.</b></h3>
                        <Link to='/contact' className='btn btn-humblepage-primary-inverse mb-5'>Let's talk</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;