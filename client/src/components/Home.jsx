import React from 'react';

import LandingPage from './LandingPage';
import Dashboard from './Dashboard';

const currentUser = require('../libs/currentUser');


class Home extends React.Component {

    render() {
        return (
            <div>
                {currentUser.isLoggedIn() ? (<Dashboard />) : (<LandingPage />)}
            </div>
        )
    }
};

export default Home;
