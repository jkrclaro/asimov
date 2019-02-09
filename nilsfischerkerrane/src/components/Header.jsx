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
                <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#111'}}>
                    <div className='container'>
                        <Link to='/' className='brand-link'><span className='brand'>NIL'S H&amp;P</span></Link>
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