import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import NotFound from './components/NotFound';


class App extends Component {

    render() {
        return(
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                    <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                    <Route path={process.env.PUBLIC_URL + '/testimonials'} component={Testimonial} />
                    <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </HashRouter>
        )
    }
}

export default App;
