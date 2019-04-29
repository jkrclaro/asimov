import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserCircle, faPlay, faRedo, faUndo, faPause, faBook, faSearch, faBars, faQuestion, faCaretDown, faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';

const currentUser = require('./libs/currentUser');

library.add(faUserCircle, faPlay, faRedo, faUndo, faPause, faBook, faSearch, fab, faBars, faQuestion, faCaretDown, faAngleLeft, faPlus);


class App extends React.Component {

    componentDidMount() {
        document.title = 'Webprecon - Podcast player';
    };

    render() {
        return (
            <BrowserRouter>
                {currentUser.isLoggedIn() ? (
                    <div className='App Site'>
                        <div className='Site-content'>
                            <div className='App-header'>
                                <Header />
                            </div>
                            <div className='main text-style'>
                                <Body />
                            </div>
                        </div>
                        <Footer />
                    </div>
                ): (
                    <div className='App Site'>
                        <div className='Site-content'>
                            <div className='App-header'>
                                <Header />
                            </div>
                            <div className='main text-style'>
                                <Body />
                            </div>
                        </div>
                        <Footer />
                    </div>
                )}
            </BrowserRouter>
        );
    };
};

export default App;
