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
        this.setState({ isDesktop: window.innerWidth > 768 });
    };

    openNav() {
        document.getElementById("overlay-nav").style.width = "100%";
    }

    closeNav() {
        document.getElementById("overlay-nav").style.width = "0%";
    }

    render() {
        const theme = this.props.theme;
        return (
            <div className={`${theme}-bg`}>
                <div id="overlay-nav" className="overlay">
                    <span className="closebtn" onClick={this.closeNav}>&times;</span>
                    <div className="overlay-content">
                        <div className='container'>
                            <Link to='/' className='overlay-link' onClick={this.closeNav}>Home</Link>
                            <Link to='/contact' className='overlay-link' onClick={this.closeNav}>Contact</Link>
                            <br/>
                            <br/>
                            <br/>
                            <a href="tel:0894518912" className='overlay-link' rel='nofollow'>(089) 451 8912</a>
                        </div>
                    </div>
                </div>

                <div className='container' style={{paddingTop: 50, paddingBottom: 20}}>
                    <ul className="nav">
                        <li className='nav-item'>
                            <Link to='/' className='nav-link'>
                                <span className={`brand-title ${theme}-title`}>Healthy Stamp</span>
                            </Link>
                        </li>
                        <li className='nav-item ml-auto'><span className={`nav-link ${theme}-title`} onClick={this.openNav}><i className='fas fa-bars' style={styles.menuBar}></i></span></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Header;