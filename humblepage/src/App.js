import React, { Component } from 'react';
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
                <div className='App Site'>
                    <div className='Site-content'>
                        <Header />
                        <Body />
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}

export default App;
