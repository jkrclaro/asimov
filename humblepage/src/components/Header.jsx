import React from 'react';

const logo = require('../imgs/logo.png');

const styles = {
    border: {backgroundColor: '#7289DA', color: '#111', borderRadius: '10%'},
    font: {fontFamily: 'Times New Roman', fontWeight: 700},
    brand: {color: '#111', fontSize: 40, fontWeight: 700, textDecoration: 'none'}
}

class Header extends React.Component {

    render() {
        return (
            <ul className="nav justify-content-center mb-5">
                <li className="nav-item">
                    <a className='nav-link' style={styles.brand} href="/">
                        <img src={logo} alt='logo' className='img-fluid' height='60' width='60'/> humblepage
                    </a>
                </li>
            </ul>
        )
    }
}

export default Header;