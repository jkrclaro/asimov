import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logo = require('../imgs/logo.png');

const styles = {
    border: {backgroundColor: '#7289DA', color: '#111', borderRadius: '10%'},
    font: {fontFamily: 'Times New Roman', fontWeight: 700},
    brand: {color: '#111', fontSize: 42, fontWeight: 700, textDecoration: 'none'}
}

class Header extends React.Component {

    render() {
        return (
            <ul className="nav justify-content-center mb-3">
                <li className="nav-item">
                    <a className='nav-link' style={styles.brand} href="/">
                        <img src={logo} className='img-fluid' height='50' width='50'/> humblepage
                    </a>
                </li>
            </ul>
        )
    }
}

export default Header;