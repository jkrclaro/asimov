import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logo = require('../imgs/logo.png');
const styles = {
    heart: {color: 'red'}
}

class Footer extends React.Component {

    render() {
        return (
            <div>
                <ul className="nav justify-content-center mt-5 mb-3">
                    <li className="nav-item text-center">
                        <a className='nav-link disabled' href='/'>
                            <img src={logo} className='img-fluid mr-3' height='50' width='50'></img>
                            <b>Made with <FontAwesomeIcon icon='heart' style={styles.heart}/> in Dublin, Ireland</b>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;