import React from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import Contact from './Contact';


class Body extends React.Component {

    render() {
        return (
            <div>
                <Route exact path='/' component={Home} />
                <Route exact path='/contact' component={Contact} />
            </div>
        )
    }
}

export default Body;