import React from 'react';
import { Link } from 'react-router-dom';


const styles = {
    cursor: {cursor: 'pointer'},
    menuBar: {fontSize: 30, color: '#fff'},
    brand: {fontSize: 30, color: '#fff'},
    headerFont: {fontFamily: 'Titillium Web'},
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
                    <span className="closebtn" style={styles.cursor} onClick={this.closeNav}>&times;</span>
                    <div className="overlay-content">
                        <div className='container'>
                            <a href='https://www.airbnb.ie/experiences/385040' onClick={this.closeNav}>BOOK</a>
                            <Link to='/tour' onClick={this.closeNav}>TOUR</Link>
                            <Link to='/contaact' onClick={this.closeNav}>CONTACT</Link>
                        </div>
                    </div>
                </div>

                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#141414', opacity: 0.9}}>
                    <div className='container mt-3 mb-3'>
                        <Link to='/' className='brand-link'><span className='brand'>H&amp;P</span></Link>
                        {this.state.isDesktop ? (
                            <ul className="nav justify-content-end">
                                <li className='nav-item'><Link to='/tour' className='nav-link white-color'>TOUR</Link></li>
                                <li className='nav-item'><Link to='/contact' className='nav-link white-color'>CONTACT</Link></li>
                            </ul>
                        ) : (
                            <ul className="nav justify-content-end">
                                <li className='nav-item'><span className='nav-link' style={{...styles.menuBar, ...styles.cursor}} onClick={this.openNav}>&#9776;</span></li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;