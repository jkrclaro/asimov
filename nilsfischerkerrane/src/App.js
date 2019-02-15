import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar, faBars, faMapMarkedAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import LandingPage from './components/LandingPage';
import TourDublin from './components/TourDublin';
import TourBerlin from './components/TourBerlin';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

library.add(faStar, faBars, faMapMarkedAlt, faCommentAlt);


class App extends Component {

    render() {
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
                    <Route path={process.env.PUBLIC_URL + '/tours/dublin'} component={TourDublin} />
                    <Route path={process.env.PUBLIC_URL + '/tours/berlin'} component={TourBerlin} />
                    <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
