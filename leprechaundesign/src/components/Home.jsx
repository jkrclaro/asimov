import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import WorkWithUs from './WorkWithUs';

const hoppyhistory = require('../imgs/hoppyhistory.jpg');


class Home extends React.Component {
    
    state = {
        isDesktop: false
    }
    updatePredicate = this.updatePredicate.bind(this);

    componentDidMount() {
        document.title = 'Leprechaun Design - Enhance your online presence with a website | Ireland';
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
        window.scrollTo(0 ,0);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 768 });
    };

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div>
                <Header theme='invert' />
                <div className='invert-bg'>
                    <div className='container mb-5'>
                        <div className='col-lg-12' style={{paddingTop: 50}}>
                            {this.state.isDesktop ? (
                                <h1 className='h1-title mb-3'>Enhance your online presence with a website. <span className='title-sub'>We obsess about the outcome.</span></h1>
                            ) : (
                                <h1 className='h1-title h1-title-mobile mb-3'>Enhance your online presence with a website. <span className='title-sub'>We obsess about the outcome.</span></h1>
                            )}
                            <Link to='/about' className='btn btn-humblepage-primary'>Get to know us</Link>
                        </div>
                    </div>
                    <a href='https://hoppyhistory.com' rel='nofollow'><img src={hoppyhistory} alt='hoppyhistory' className='img-fluid'></img></a>
                    <WorkWithUs />
                </div>
            </div>
        )
    }
}

export default Home;