import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCopyright, faTh } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab, faCopyright, faTh);


class App extends Component {

    render() {
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                    <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                    <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
