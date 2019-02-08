import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import LandingPage from './components/LandingPage';
import TestimonialList from './components/TestimonialList';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import PhotoList from './components/PhotoList';


class App extends Component {

    render() {
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={LandingPage} />
                    <Route path={process.env.PUBLIC_URL + '/photos'} component={PhotoList} />
                    <Route path={process.env.PUBLIC_URL + '/testimonials'} component={TestimonialList} />
                    <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
