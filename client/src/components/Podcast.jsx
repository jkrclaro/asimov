import React from 'react';
import AudioPlayer from './AudioPlayer';


class Podcast extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-4'>
                            <img className='img-fluid rounded border' alt='David Hall #VultureFunds Ep.130' width='100%' src='https://podcast-api-images.s3.amazonaws.com/podcast_logo_15_300x300.jpg'></img>
                            <AudioPlayer/>
                            <h3>JRE #1223 - Greg Fitzsimmons</h3>
                            <h3 style={{color: 'gray'}}>The Joe Rogan Experience</h3>
                            <p>
                                #1223. Greg Fitzsimmons is a writer and stand-up comedian. He also hosts a podcast with Alison Rosen called "Childish" that is available now on iTunes & Stitcher.
                            </p>
                        </div>
                        <div className='col-lg-8'>
                            <h3>Up next</h3>
                            <div className='row mt-3 mb-3'>
                                <div className='col-md-2 col-lg-2 mb-3'>
                                    <img src='https://static.libsyn.com/p/assets/c/4/9/2/c4926d0f885f0b0e/JRE1223.jpg' className='img-fluid rounded' width='100%'/>
                                </div>
                                <div className='col-md-10 col-lg-10 mb-3'>
                                    <a href='/authors/thejoeroganexperience/podcasts/hey' className='text-style'>
                                        <b><span style={{color: 'gray'}}>3:29:34</span> JRE #1223 - Greg Fitzsimmons</b>
                                        <p>JRE #1223. Greg Fitzsimmons is a writer and stand-up comedian. He also hosts a podcast with Alison Rosen called "Childish" that is available now on iTunes & Stitcher.</p>
                                    </a>
                                </div>
                            </div>
                            <hr style={{borderColor: '#aaa', backgroundColor: '#aaa', color: '#aaa'}}/>
                            <div className='row mt-3 mb-3'>
                                <div className='col-md-2 col-lg-2 mb-3'>
                                    <img src='https://static.libsyn.com/p/assets/c/4/9/2/c4926d0f885f0b0e/JRE1223.jpg' className='img-fluid rounded' width='100%'/>
                                </div>
                                <div className='col-md-10 col-lg-10 mb-3'>
                                    <a href='/authors/thejoeroganexperience/podcasts/hey' className='text-style'>
                                        <b>JRE #1223 - Greg Fitzsimmons</b>
                                        <p>#1223. Greg Fitzsimmons is a writer and stand-up comedian. He also hosts a podcast with Alison Rosen called "Childish" that is available now on iTunes & Stitcher.</p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Podcast;
