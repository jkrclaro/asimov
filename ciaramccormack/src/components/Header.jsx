import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    menuBar: {fontSize: '1.5em', cursor: 'pointer'},
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
                            <Link to='/newsletter' className='overlay-link' onClick={this.closeNav}>Newsletter</Link>
                            <Link to='/contact' className='overlay-link' onClick={this.closeNav}>Contact</Link>
                        </div>
                    </div>
                </div>

                <div className='container' style={{paddingTop: 20, paddingBottom: 20}}>
                    {this.state.isDesktop ? (
                        <ul className="nav">
                            <li className="mr-auto"><Link to='/' className='navbar-brand brand-title'>Ciara McCormack</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/newsletter'>Newsletter</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/contact'>Contact</Link></li>
                        </ul>
                    ) : (
                        <ul className="nav">
                            <Link to='/' className='navbar-brand brand-title'>Pilar Lokko</Link>
                            <li className='nav-item ml-auto'><span className='nav-link theme-text' onClick={this.openNav}><i className='fas fa-bars' style={styles.menuBar}></i></span></li>
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}

export default Header;