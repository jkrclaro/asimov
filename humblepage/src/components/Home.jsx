import React from 'react';

const isometric1 = require('../imgs/isometric1.png');


class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isFormOpen: false
        }
        this.viaForm = this.viaForm.bind(this);
    }

    viaForm() {
        this.setState({isFormOpen: !this.state.isFormOpen});
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
                                    Humblepage is a web design company based in Dublin, Ireland
                                    that builds landing pages for ambitious
                                    entreprenuers, creative freelancers 
                                    or wedding couples.
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
                                        <input type='email' name='_replyto' placeholder='Your email' className='form-control mb-3'></input>
                                        <textarea name='message' placeholder='Your message' className='form-control mb-3'></textarea>
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
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-6 mb-3'>
                            <h4><b>No more monthly hosting</b></h4>
                            <h5>
                                Save money in the long-run, why keep paying <i>atleast</i> €10 per 
                                month for hosting when we can do this for you
                                free of charge and available 24/7?
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <h4><b>HTTPS enabled</b></h4>
                            <h5>
                                HTTPS protects the integrity of your website.
                                HTTPS helps prevent intruders from tampering
                                with the communications between your website
                                and your users' browsers. Statistically, 51.8% 
                                of the 1,000,000 most visited websites
                                worldwide still use HTTP!
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <h4><b>Single page application</b></h4>
                            <h5>
                                Humblepage uses the latest frontend technology that powers
                                some of the biggest tech companies such as Facebook, Netflix and
                                Airbnb (just to name a few) to deliver a frictionless and
                                enriched user experience.
                            </h5>
                        </div>
                        <div className='col-lg-6 mb-3'>
                            <h4><b>Mobile responsive</b></h4>
                            <h5>
                                2/3 of the world's population are connected by 
                                mobile devices therefore your website should be compatible
                                through desktop <i>and</i> mobile these days.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;