import React from 'react';
import { Link } from 'react-router-dom';

import WorkWithUs from './WorkWithUs';


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
            <div style={{backgroundColor: '#111'}}>
                <div className='container mb-5'>
                    <div className='col-lg-12'>
                        <div className='row'>
                            <div className='col-lg-8'>
                                <div className='mt-5'>
                                    <h1 className='h1-title mb-3'>Professional website design for growing brands. <span className='text-muted'>We focus on driving results.</span></h1>
                                    <Link to='/about' className='btn btn-humblepage-primary'>Get to know us</Link>
                                </div>
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