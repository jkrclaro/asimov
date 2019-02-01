import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const logo = require('../imgs/logo.png');

class Footer extends React.Component {

    render() {
        return (
            <div>
                <ul className="nav justify-content-center mt-5 mb-3">
                    <li className="nav-item text-center">
                        <span className='nav-link disabled text-muted'>
                            <small>COPYRIGHT <FontAwesomeIcon icon='copyright'/> 2019 HUMBLEPAGE</small>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;