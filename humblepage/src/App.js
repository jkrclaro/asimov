import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Body from './components/Body';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faCode, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(faHeart, faCode, fab, faChevronLeft);


class App extends Component {

    componentDidMount() {
        document.title = 'Humblepage | Let Your Website Do The Talking';
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
