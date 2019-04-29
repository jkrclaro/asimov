import React from 'react';


class Footer extends React.Component {

    render() {
        return (
            <div>
                <hr/>
                <ul className="nav justify-content-center mt-3 mb-3">
                    <li className="nav-item"><a className="nav-link" href="mailto:webprecon@gmail.com?subject=Request%20a%20podcast:%20">Request a podcast</a></li>
                    <li className="nav-item"><a className="nav-link" href="mailto:webprecon@gmail.com?subject=">Contact</a></li>
                    <li className="nav-item"><a className="nav-link" href="/privacy">Privacy</a></li>
                    <li className="nav-item"><a className="nav-link" href="/pricing">Pricing</a></li>
                </ul>
            </div>
        );
    };
};

export default Footer;
