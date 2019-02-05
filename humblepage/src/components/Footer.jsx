import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const styles = {
    professionalFont: {fontFamily: 'Georgia'}
}

class Footer extends React.Component {

    render() {
        return (
            <div style={{backgroundColor: '#141414'}}>
                <ul className="nav justify-content-center mt-3 mb-3">
                    <li className="nav-item text-center">
                        <span className='nav-link disabled'>
                            <small style={{color: '#fff'}}><span style={styles.professionalFont}>&copy; 2019 HUMBLEPAGE</span></small>
                        </span>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;