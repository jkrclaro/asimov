import React from 'react';
import { Link } from 'react-router-dom';


const styles = {
    cursor: {cursor: 'pointer'},
    brand: {fontSize: 30, color: '#111'},
    headerFont: {fontFamily: 'Titillium Web'},
    spanStyle: {fontSize: 40, color: '#111', cursor: 'pointer'}
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
                    <a className="closebtn" style={styles.cursor} onClick={this.closeNav}>&times;</a>
                    <div className="overlay-content">
                        <div className='container'>                        
                            <Link to='/' onClick={this.closeNav}>Home</Link>                        
                            <Link to='/tour' onClick={this.closeNav}>Tour</Link>                        
                            <a href='https://www.airbnb.ie/experiences/385040'>Book</a>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light mb-5">
                    <div className='container'>
                        <Link to='/' className='brand-link'><span className='brand'><span style={{color: '#009A49'}}>HISTORY&amp;PINTS</span></span></Link>
                        {this.state.isDesktop ? (
                            <ul className="nav justify-content-end">
                                <li className='nav-item'><Link to='/tour' className='nav-link'>TOUR</Link></li>
                                <li className='nav-item'><Link to='/contact' className='nav-link'>CONTACT</Link></li>
                            </ul>
                        ) : (
                            <ul className="nav justify-content-end">
                                <li className='nav-item'><span className='nav-link menu-bar' style={styles.cursor} onClick={this.openNav}>&#9776;</span></li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;