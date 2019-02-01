import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Body from './components/Body';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faCopyright);


class App extends Component {

    componentDidMount() {
        document.title = 'Humblepage | Building Success For You';
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
