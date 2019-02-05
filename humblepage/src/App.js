import React, { Component } from 'react';
import { Helmet } from "react-helmet";
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright, faBars, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faCopyright, faBars, faPhone, faEnvelope);


class App extends Component {

    render() {
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <div className='application'>
                    <Helmet>
                        <meta name="description" content="Web Design Ireland by HumblePage. Creating beautiful web design in Ireland for clients &amp; generating new increased business."/>
                        <meta property="og:locale" content="en_US" />
                        <meta property="og:type" content="website" />
                        <meta property="og:title" content="Web Design Ireland | Humblepage Creates Professional Websites In Ireland" />
                        <meta property="og:description" content="Web Design Ireland by Humblepage. Creating beautiful web design in Ireland for clients &amp; generating new increased business." />
                        <meta property="og:url" content="https://humblepage.com/" />
                        <meta property="og:site_name" content="Humblepage" />
                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:description" content="Web Design Ireland by Humblepage. Creating beautiful web design in Ireland for clients &amp; generating new increased business." />
                        <meta name="twitter:title" content="Web Design Ireland | Humblepage Creates Professional Websites In Ireland" />
                        <meta name="google-site-verification" content="vaBw9vO0eMQWG97lt5NsyxbUHUCJVcuKCSHN8_4bqfg" />
                        <meta charSet='utf-8'></meta>
                        <link rel="canonical" href="https://humblepage.com/" />
                        <title>Humblepage - Web Design Dublin, Ireland | Irish Website Design Company</title>
                    </Helmet>
                    <div className='App Site'>
                        <div className='Site-content'>
                            <Header />
                            <Body />
                        </div>
                        <Footer />
                    </div>
                </div>
            </HashRouter>
        )
    }
}

export default App;
