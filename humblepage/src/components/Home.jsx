import React from 'react';
import { Link } from 'react-router-dom';

import WorkWithUs from './WorkWithUs';

const vector1 = require('../imgs/vector1.png');


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
            <div>
                <div className='container mb-5'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='text-right mt-5'>
                                    <h1 className='h1-title'>We provide creative website and design solutions.</h1>
                                    <Link to='/services' className='btn btn-humblepage-primary'>See our services</Link>
                                </div>
                            </div>
                            <div className='col-lg-6 mt-5'>
                                <img src={vector1} alt='vector1' className='img-fluid'></img>
                            </div>
                        </div>
                    </div>
                </div>
                <WorkWithUs />
            </div>
        )
    }
}

export default Home;