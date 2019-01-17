import React from 'react';

const laptop = require('../imgs/laptop.png');


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
                                small business owners or creative entreprereneurs.
                            </h4>
                            <br/>
                            <a href='mailto:clearwdd@gmail.com' className='btn btn-clearwdd-primary'>Get started</a>
                        </div>
                        <div className='col-lg-6 text-center'>
                            <img src={laptop} className='img-fluid' alt='laptop'></img>
                            <small>Vector illustration credit: <a rel="nofollow" href="https://www.vecteezy.com">www.Vecteezy.com</a></small>
                        </div>
                    </div>
                </div>
                <div className='col-lg-12'>
                    <div className='row'>
                        <div className='col-lg-4 mb-3'>
                            <h4><b>No monthly hosting</b></h4>
                            <h5>
                                Save money in the long-run! Why pay <i>atleast</i> €7.99 per 
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
                                Go ahead try resizing this window!
                            </h5>
                        </div>
                        <div className='col-lg-4 mb-3'>
                            <h4><b>Single page application</b></h4>
                            <h5>
                                Clearwdd uses the latest frontend technologiy that powers
                                some of the famous companies such as Facebook, Netflix and
                                Airbnb (just to name a few) to deliver frictionless and
                                enriched digital experiences for the user.
                            </h5>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;