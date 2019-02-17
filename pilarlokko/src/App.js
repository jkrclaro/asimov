import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import LandingPage from './components/LandingPage';
import Tour from './components/Tour';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

library.add(faStar);


class App extends Component {

    render() {
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
                    <Route path={process.env.PUBLIC_URL + '/tour'} component={Tour} />
                    <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
