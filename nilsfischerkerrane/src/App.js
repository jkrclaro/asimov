import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';


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
