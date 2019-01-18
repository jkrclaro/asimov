import React from 'react';

const isometric1 = require('../imgs/isometric1.png');


class Home extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='col-lg-12 mb-5'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h1><b>Get a modern website</b></h1>
                            <h4>
                                Clearwdd builds brochure websites for ambitious
                                small business owners, creative freelancers 
                                or memorable weddings.
                            </h4>
                            <br/>
                            <a href='mailto:clearwdd@gmail.com' className='btn btn-clearwdd-primary mb-5'>Get in touch</a>
                        </div>
                        <div className='col-lg-6 text-center'>
                            <img src={isometric1} className='img-fluid' alt='isometric1'></img>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-4 mb-3'>
                            <h4><b>No more monthly hosting</b></h4>
                            <h5>
                                Save money in the long-run! Why keep paying <i>atleast</i> €7.99 per 
                                month for hosting when this can now be done 
                                for free and available 24/7?
                            </h5>
                        </div>
                        <div className='col-lg-4 mb-3'>
                            <h4><b>Mobile responsive</b></h4>
                            <h5>
                                2/3 of the world's population are connected by 
                                mobile devices therefore your website should be compatible
                                through desktop <i>and</i> mobile these days.
                            </h5>
                        </div>
                        <div className='col-lg-4 mb-3'>
                            <h4><b>Single page application</b></h4>
                            <h5>
                                Clearwdd uses the latest frontend technology that powers
                                some of the biggest tech companies such as Facebook, Netflix and
                                Airbnb (just to name a few) to deliver a frictionless and
                                enriched user experience.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;