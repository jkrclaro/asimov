import React from 'react';
import { Link } from 'react-router-dom';

const vector1 = require('../imgs/vector1.png');
const hp = require('../imgs/hp.png');


const styles = {
    cursor: {cursor: 'pointer'},
    menuBar: {fontSize: 30, color: '#E2424A'},
    spanStyle: {fontSize: 40, color: '#fff', cursor: 'pointer'}
}

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
                                    <h1 className='h1-title'>WE CREATE WEBSITES FOR THE TRAVEL INDUSTRY</h1>
                                    <Link to='/services' className='btn btn-humblepage-primary'>See our services</Link>
                                </div>
                            </div>
                            <div className='col-lg-6 mt-5'>
                                <img src={vector1} alt='vector1' className='img-fluid'></img>
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

export default Home;