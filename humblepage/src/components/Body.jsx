import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';


class Body extends React.Component {

    render() {
        return (
            <div>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
                <Route exact path={process.env.PUBLIC_URL + '/contact'} component={Contact} />
            </div>
        )
    }
}

export default Body;