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
                        <div className='row mt-5'>
                            <div className='col-lg-12 mb-3'>
                                <h2 className='h2-title text-center theme-color'>GET TO KNOW US</h2>
                                <p>
                                    Most businesses feel that to compete online they need to be doing a dozen different things. 
                                    They don’t. We set up easy to manage systems that run like clockwork. 
                                    No monthly service fees, no hidden costs, no nonsense – just consistent sales and results. 
                                    This allows you to focus on your own strengths and let us worry about running your online assets.
                                </p>
                                <p>
                                    Chances are success is closer than you think. 
                                    We love to work with people who want real change and 
                                    who are willing to let us get it for them. 
                                    If you want to do things differently then we can’t wait to help.
                                </p>
                            </div>
                        </div>

                </div>
                <div className='section-work-alternative mb-5'>
                    <div className='container text-center'>
                        <h2 className='h2-title' style={{paddingTop: 40, paddingBottom: 40}}>We are an independent company based in Dublin, Ireland.</h2>    
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 mb-5'>
                            <h4 className='h4-title'>FORWARD THINKING</h4>
                            <p>
                                We pride ourselves on pushing the boundaries of digital design and development. 
                                We combine relevant trends and best practices to build platforms with longevity.
                            </p>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h4 className='h4-title'>DETAIL ORIENTED</h4>
                            <p>
                                We sweat the small stuff, because we believe that the details make the design. A time-tested and true platform values quality over quantity.
                            </p>
                        </div>
                        <div className='col-lg-6 mb-5'>
                            <h4 className='h4-title'>SELF STARTING</h4>
                            <p>
                                Having an entrepreneurial mindset ensures that every member of our team proudly takes ownership of each project, from concept to execution.
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