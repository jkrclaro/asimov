import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Body from './components/Body';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright, faBars, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faCopyright, faBars, faPhone, faEnvelope);


class App extends Component {

    componentDidMount() {
        document.title = 'Humblepage - Web Design Dublin, Ireland | Irish Website Design Company';
    }

    render() {
        return(
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <div className='App Site'>
                    <div className='Site-content'>
                        <Body />
                    </div>
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default App;
