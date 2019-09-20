import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import NotFound from './NotFound';


class Body extends React.Component {

    render() {
        return (
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route component={NotFound} />
            </Switch>
        )
    }
}

export default Body;