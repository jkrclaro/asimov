import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import Login from './Login';
import Pricing from './Pricing';
import Signup from './Signup';
import Dashboard from './Dashboard';
import Settings from './Settings';
import Privacy from './Privacy';
import Podcast from './Podcast';
import Author from './Author';
import Search from './Search';
import Billing from './Billing';
import Invite from './Invite';


class Body extends React.Component {

    render() {
        return (
          <Switch>
              <Route path='/' component={Home} exact />
              <Route path='/dashboard' component={Dashboard} />
              <Route path='/invite' component={Invite} />
              <Route path='/settings' component={Settings} />
              <Route path='/search' component={Search} />
              <Route path='/billing' component={Billing} />
              <Route path='/about' component={About} />
              <Route path='/contact' component={Contact} />
              <Route path='/pricing' component={Pricing} />
              <Route path='/login' component={Login} />
              <Route path='/signup' component={Signup} />
              <Route path='/privacy' component={Privacy} />
              <Route path='/authors/:author/podcasts/:podcast' component={Podcast} />
              <Route path='/authors/:author' component={Author} />
              <Route component={ErrorPage} />
          </Switch>
        );
    };
};

export default Body;
