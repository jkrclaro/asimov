import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logo = require('../imgs/logo.png');
const styles = {
    menuBar: {fontSize: '1.75em', color: '#26262A', cursor: 'pointer'},
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
            <div>
                <div id="overlay-nav" className="overlay">
                    <span className="closebtn" onClick={this.closeNav}>&times;</span>
                    <div className="overlay-content">
                        <div className='container'>
                            <Link to='/' className='overlay-link' onClick={this.closeNav}>Home</Link>
                            <Link to='/about' className='overlay-link' onClick={this.closeNav}>About</Link>
                            <Link to='/services' className='overlay-link' onClick={this.closeNav}>Services</Link>
                            <Link to='/contact' className='overlay-link' onClick={this.closeNav}>Contact</Link>
                            <br/>
                            <br/>
                            <br/>
                            <a href="tel:0894518912">(089) 451 8912</a>
                        </div>
                    </div>
                </div>

                <div className='container mt-3'>
                    {this.state.isDesktop ? (
                        <ul className="nav">
                            <li className='nav-item'><Link to='/' className='nav-link'><img src={logo} className='logo mb-2 mr-2'></img> <span className='brand-title mr-3'>humblepage</span></Link></li>
                            <li className='nav-item nav-item-style'><Link to='/about' className='nav-link'>About</Link></li>
                            <li className='nav-item nav-item-style'><Link to='/services' className='nav-link'>Services</Link></li>
                            <li className='nav-item nav-item-style ml-auto'><Link to='/contact' className='nav-link'><span className='btn btn-humblepage-alternative'>Let's Talk</span></Link></li>
                        </ul>
                    ) : (
                        <ul className="nav">
                            <li className='nav-item'><Link to='/' className='nav-link'><img src={logo} className='logo mb-2 mr-2'></img> <span className='brand-title'> humblepage</span></Link></li>
                            <li className='nav-item ml-auto'><span className='nav-link' style={styles.menuBar} onClick={this.openNav}><FontAwesomeIcon icon='bars'/></span></li>
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}

export default Header;