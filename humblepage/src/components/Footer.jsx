import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Footer extends React.Component {

    render() {
        return (
            <div style={{backgroundColor: '#141414'}}>
                <ul className="nav justify-content-center mt-3 mb-3">
                    <li className="nav-item text-center">
                        <span className='nav-link disabled'>
                            <small style={{color: '#fff'}}><FontAwesomeIcon icon='copyright'/> 2019 HUMBLEPAGE</small>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;