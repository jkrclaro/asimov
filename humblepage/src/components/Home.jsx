import React from 'react';
import { Link } from 'react-router-dom';

const logo = require('../imgs/logo.png');
const vector1 = require('../imgs/vector1.png');


const styles = {
    cursor: {cursor: 'pointer'},
    menuBar: {fontSize: 30, color: '#fff'},
    professionalFont: {fontFamily: 'Georgia'},
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
                <div style={{backgroundColor: '#141414', color: '#fff'}}>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 mt-5'>
                                <div className='mb-5' style={styles.professionalFont}>
                                    <h2>Tailored design for growing brands.</h2>
                                    <h2>We transform business objectives into compelling digital experiences.</h2>
                                </div>
                                <Link to='/work' className='btn btn-humblepage-primary mr-2 mb-5'>See our work</Link>
                            </div>
                            {this.state.isDesktop ? (
                                <div className='col-lg-6 mt-5'>
                                    <img src={vector1} alt='vector1' className='img-fluid mb-5'></img>
                                </div>
                            ) : (null)}
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 text-center'>
                        <h3 className='theme-color mt-5' id='about'><b>BASED IN DUBLIN, IRELAND</b></h3>
                        <div className='mb-5'>
                            <div><h3><b>We are an independent web design company.</b></h3></div>
                            <div><h3><b>We collaborate with brands</b></h3></div>
                            <div><h3><b> to accelerate their growth.</b></h3></div>
                        </div>
                        <Link to='/about' className='btn btn-humblepage-alternative mb-5'>Get to know us</Link>
                    </div>
                    <div className='col-lg-3'></div>
                </div>
                <div style={{backgroundColor: '#FAFAFA'}}>
                    <div className='container'>
                        <div className='col-lg-12 text-right' style={{paddingTop: 40}}>
                            <h3 className='theme-color' id='about'><b>WORK WITH US</b></h3>
                            <div className='mb-5'>
                                <h2><b>Tell us a little bit</b></h2>
                                <h2><b>about your project.</b></h2>
                            </div>
                            <Link to='/contact' className='btn btn-humblepage-alternative mb-5'>Let's talk</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;