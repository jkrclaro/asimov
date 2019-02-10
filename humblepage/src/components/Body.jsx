import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import ServiceList from './ServiceList';
import Contact from './Contact';
import NotFound from './NotFound';


class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
                <Route path={process.env.PUBLIC_URL + '/services'} component={ServiceList} />
                <Route path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Body;