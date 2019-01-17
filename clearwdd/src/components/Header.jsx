import React from 'react';


const styles = {
    border: {backgroundColor: '#7289DA', color: '#111', borderRadius: '10%'},
    font: {fontFamily: 'Times New Roman', fontWeight: 700},
    brand: {color: '#111', fontSize: 50, fontWeight: 700, textDecoration: 'none'}
}

class Header extends React.Component {

    render() {
        return (
            <ul className="nav justify-content-center mb-3">
                <li className="nav-item">
                    <a className='nav-link' style={styles.brand} href="/">
                        clearwdd
                    </a>
                </li>
            </ul>
        )
    }
}

export default Header;