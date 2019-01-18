import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCode } from '@fortawesome/free-solid-svg-icons';

library.add(faHeart, faCode);


class App extends Component {

    componentDidMount() {
        document.title = 'Clearwdd - Web design and development based in Dublin, Ireland';
    }

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
