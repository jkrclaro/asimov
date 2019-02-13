import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

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
                        <Switch>
                            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                            <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                            <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                            <Route component={NotFound} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </HashRouter>
        )
    }
}

export default App;
