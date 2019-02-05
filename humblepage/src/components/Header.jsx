import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logo = require('../imgs/logo.png');
const styles = {
    cursor: {cursor: 'pointer'},
    menuBar: {fontSize: 30, color: '#fff'},
    professionalFont: {fontFamily: 'Georgia'},
    spanStyle: {fontSize: 40, color: '#fff', cursor: 'pointer'}
}

class Header extends React.Component {

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

    openNav() {
        document.getElementById("overlay-nav").style.width = "100%";
    }

    closeNav() {
        document.getElementById("overlay-nav").style.width = "0%";
    }

    render() {
        return (
            <div style={{backgroundColor: '#141414'}}>
                <div id="overlay-nav" className="overlay">
                    <span className="closebtn" style={styles.cursor} onClick={this.closeNav}>&times;</span>
                    <div className="overlay-content">
                        <div className='container'>
                            <Link to='/work' onClick={this.closeNav}><b>WORK</b></Link>
                            <Link to='/about' onClick={this.closeNav}><b>ABOUT</b></Link>
                            <Link to='/contact' onClick={this.closeNav}><b>CONTACT</b></Link>
                            <br/>
                            <br/>
                            <br/>
                            <a href="tel:1231234567">(123) 123-4567</a>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className='container mt-3'>
                        <a href='/' style={styles.brand}><img src={logo} alt='logo' height='40' width='40'></img></a>
                        {this.state.isDesktop ? (
                            <ul className="nav justify-content-end">
                            <li className='nav-item'><Link to='/work' className='nav-link white-color mt-3'><b>WORK</b></Link></li>
                                <li className='nav-item'><Link to='/about' className='nav-link white-color mt-3'><b>ABOUT</b></Link></li>
                                <li className='nav-item'><Link to='/contact' className='nav-link white-color mt-1'><span className='btn btn-humblepage-primary'>CONTACT US</span></Link></li>
                            </ul>
                        ) : (
                            <ul className="nav justify-content-end">
                                <li className='nav-item'><span className='nav-link' style={{...styles.menuBar, ...styles.cursor}} onClick={this.openNav}><FontAwesomeIcon icon='bars'/></span></li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;