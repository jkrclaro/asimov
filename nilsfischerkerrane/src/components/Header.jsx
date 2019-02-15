import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const classNames = require('classnames');
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
        const brandClass = classNames({'brand-title': true, 'default': this.props.tour === 'default', 'dublin': this.props.tour === 'ireland', 'berlin': this.props.tour === 'berlin'})
        const navLinkClass = classNames({'nav-link': true, 'theme-link': true, 'default': this.props.tour === 'default', 'dublin': this.props.tour === 'ireland', 'berlin': this.props.tour === 'berlin'})
        return (
            <div>
                <div id="overlay-nav" className="overlay">
                    <a className="closebtn" style={styles.cursor} onClick={this.closeNav}>&times;</a>
                    <div className="overlay-content">
                        <div className='container'>                        
                            <Link to='/' onClick={this.closeNav}>Home</Link>                        
                            <Link to='/tours/dublin' onClick={this.closeNav}>Dublin Tour</Link>            
                            <Link to='/tours/berlin' onClick={this.closeNav}>Berlin Tour</Link>
                        </div>
                    </div>
                </div>
                
                <nav className="navbar navbar-expand-lg navbar-dark mb-5">
                    <div className='container'>
                        <Link to='/' className={brandClass}>Hoppy History</Link>
                        {this.state.isDesktop ? (
                            <ul className="nav ml-auto">
                                <li className="nav-item"><Link to='/' className={navLinkClass}>Home</Link></li>
                                <li className="nav-item"><Link to='/tours/dublin' className={navLinkClass}>Dublin Tour</Link></li>
                                <li className="nav-item"><Link to='/tours/berlin' className={navLinkClass}>Berlin Tour</Link></li>
                            </ul>
                        ) : (
                            <ul className="nav ml-auto">
                                <li className="nav-item"><span className='nav-link'><FontAwesomeIcon className={brandClass} onClick={this.openNav} style={{fontSize: '2em', cursor: 'pointer'}} icon='bars'></FontAwesomeIcon></span></li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;