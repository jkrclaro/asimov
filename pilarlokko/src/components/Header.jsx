import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    menuBar: {fontSize: '2.25em', cursor: 'pointer'},
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
                            <Link to='/danceitoff' className='overlay-link' onClick={this.closeNav}>DANCEITOFF</Link>
                            <Link to='/kidsdancecamp' className='overlay-link' onClick={this.closeNav}>Kids Dance Camp</Link>
                            <Link to='/personaltraining' className='overlay-link' onClick={this.closeNav}>Personal Training</Link>
                            <Link to='/grouptraining' className='overlay-link' onClick={this.closeNav}>Group Training</Link>
                            <Link to='/contact' className='overlay-link' onClick={this.closeNav}>Contact</Link>
                        </div>
                    </div>
                </div>

                <div className='container' style={{paddingTop: 20, paddingBottom: 20}}>
                    {this.state.isDesktop ? (
                        <ul className="nav">
                            <li className="nav-item"><Link to='/' className='navbar-brand brand-title theme-text'>Pilar Lokko</Link></li>
                            <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
                            <li className="nav-item">
                                <div className='dropdown'>
                                    <span className='nav-link'>Dances <i className="fas fa-angle-down ml-2"></i></span>
                                    <div className='dropdown-content'>
                                        <Link to='/danceitoff'>DANCEITOFF</Link>
                                        <Link to='/kidsdancecamp'>Kids Dance Camp</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className='dropdown'>
                                    <span className='nav-link'>Trainings <i className="fas fa-angle-down ml-2"></i></span>
                                    <div className='dropdown-content'>
                                        <Link to='/personaltraining'>Personal</Link>
                                        <Link to='/grouptraining'>Group</Link>
                                    </div>
                                </div>
                            </li>
                            <li className='ml-auto'><Link className='nav-link' to='/contact'><span className='btn btn-pilarlokko-primary'>Contact me</span></Link></li>
                        </ul>
                    ) : (
                        <ul className="nav">
                            <Link to='/' className='navbar-brand brand-title theme-text'>Pilar Lokko</Link>
                            <li className='nav-item ml-auto'><span className='nav-link theme-text' onClick={this.openNav}><i className='fas fa-bars' style={styles.menuBar}></i></span></li>
                        </ul>
                    )}
                </div>
            </div>
        )
    }
}

export default Header;