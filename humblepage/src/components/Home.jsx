import React from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import WorkWithUs from './WorkWithUs';

const hoppyhistory = require('../imgs/hoppyhistory.jpg');


class Home extends React.Component {
    
    state = {
        isDesktop: false
    }
    updatePredicate = this.updatePredicate.bind(this);

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
        window.scrollTo(0 ,0);
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

    render() {
        return (
            <div className='Site'>
                <div className='Site-content'>
                    <Header theme='invert' />
                    <div className='invert-bg'>
                        <div className='container mb-5'>
                            <div className='col-lg-12' style={{paddingTop: 50}}>
                                <h1 className='h1-title mb-3'>Enhance your online presence with a website. <span className='title-sub'>We obsess about the outcome.</span></h1>
                                <Link to='/about' className='btn btn-humblepage-primary'>Get to know us</Link>
                            </div>
                        </div>
                        <a href='https://hoppyhistory.com' rel='nofollow'><img src={hoppyhistory} alt='hoppyhistory' width='100%' height='400'></img></a>
                        <WorkWithUs />
                    </div>
                </div>
                <Footer theme='invert'/>
            </div>
        )
    }
}

export default Home;