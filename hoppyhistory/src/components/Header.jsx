import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    cursor: {cursor: 'pointer', fontSize: '2em'},
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
                            <Link to='/' onClick={this.closeNav}>Home</Link>                        
                            <Link to='/tours/dublin' onClick={this.closeNav}>Dublin Tour</Link>            
                            <Link to='/tours/berlin' onClick={this.closeNav}>Berlin Tour</Link>
                        </div>
                    </div>
                </div>
                
                <nav className="navbar navbar-expand-lg navbar-dark mb-5">
                    <div className='container'>
                        <Link to='/' className={`brand-title ${this.props.tour}`}>Hoppy History</Link>
                        {this.state.isDesktop ? (
                            <ul className="nav ml-auto">
                                <li className="nav-item"><Link to='/' className={`nav-link theme-link ${this.props.tour}`}>Home</Link></li>
                                <li className="nav-item"><Link to='/tours/dublin' className={`nav-link theme-link ${this.props.tour}`}>Dublin Tour</Link></li>
                                <li className="nav-item"><Link to='/tours/berlin' className={`nav-link theme-link ${this.props.tour}`}>Berlin Tour</Link></li>
                            </ul>
                        ) : (
                            <ul className="nav ml-auto">
                                <li className="nav-item"><span className='nav-link'>
                                    <i className={`fas fa-bars brand-title ${this.props.tour}`} onClick={this.openNav} style={styles.cursor}></i>
                                </span></li>
                            </ul>
                        )}
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;