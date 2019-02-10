import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='col-lg-12'>
                        <div className='row mt-5'>
                            <div className='col-lg-12 mb-3'>
                                <h2 className='h2-title theme-color'>GET TO KNOW US</h2>
                            </div>
                            <div className='col-lg-12 mb-5'>
                                <div className='row'>
                                    <div className='col-lg-4'>
                                        <h3>We are based in Dublin, Ireland.</h3>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h3>We are an independent web design company.</h3>
                                    </div>
                                    <div className='col-lg-4'>
                                        <h3>We collaborate with brands to accelerate their growth.</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>FORWARD THINKING</h4>
                                <p>
                                    We pride ourselves on pushing the boundaries of digital design and development. 
                                    We combine relevant trends and best practices to build platforms with longevity.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>ENDLESS DRIVE</h4>
                                <p>
                                    Each member is dedicated to perfecting their craft and up-leveling their work.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>PURE PASSION</h4>
                                <p>
                                    Every member of our team is genuinely passionate about doing great work for brands we believe in—from global tech giants, to ambitious startups.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>DETAIL ORIENTED</h4>
                                <p>
                                    We sweat the small stuff, because we believe that the details make the design. A time-tested and true platform values quality over quantity.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>GREAT CHARACTER</h4>
                                <p>
                                    We believe in people over profit; hiring the right individuals and investing in personal growth is essential. More than skill, drive, or experience, great work is rooted in character.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>SELF STARTING</h4>
                                <p>
                                    Having an entrepreneurial mindset ensures that every member of our team proudly takes ownership of each project, from concept to execution.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>WORK HARD, PLAY HARD</h4>
                                <p>
                                    Occasionally, we like to celebrate our accomplishments. Sometimes the late nights, early mornings, and week-long design sprints call for strong drinks with good company.
                                </p>
                            </div>
                            <div className='col-lg-6 mb-5'>
                                <h4 className='h4-title'>STAY HUMBLE</h4>
                                <p>
                                    We stand up for what we believe in, but never let ego get in the way. The key to growth is to embrace feedback and from team members and clients.
                                </p>
                            </div>
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

export default About;