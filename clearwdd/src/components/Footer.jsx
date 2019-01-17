import React from 'react';


class Footer extends React.Component {

    render() {
        return (
            <div>
                <ul className="nav justify-content-center mt-3">
                    <li className="nav-item">
                        <a className='nav-link disabled' href='/'><b>Made with love in Dublin, Ireland</b></a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Footer;