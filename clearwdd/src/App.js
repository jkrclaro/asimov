import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

class App extends Component {

    render() {
        return(
            <HashRouter>
                <div className='App Site'>
                    <div className='Site-content'>
                        <div className='App-header'>
                            <Header />
                        </div>
                        <div className='text-style'>
                            <Body />
                        </div>
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}

export default App;
