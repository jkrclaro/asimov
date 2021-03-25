import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import { loadUser } from './actions/auth';
import PodcastsPage from './components/PodcastsPage';
import SearchRedirector from './components/SearchRedirector';
import PodcastPage from './components/PodcastPage';
import NotFoundPage from './components/NotFoundPage';
import PublicRoute from './helpers/PublicRoute';
import Player from './containers/Player';


class App extends React.Component {

    componentDidMount() {
        if (localStorage.getItem('token')) {
            store.dispatch(loadUser());
        }
    }

    render() {
        return(
            <Provider store={store}>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <PublicRoute exact path={process.env.PUBLIC_URL + '/'} component={PodcastsPage} />
                        <Route exact path={process.env.PUBLIC_URL + '/search/:id'} component={SearchRedirector} />
                        <Route exact path={process.env.PUBLIC_URL + '/podcasts/:id'} component={PodcastPage} />
                        <Route component={NotFoundPage} />
                    </Switch>
                    <Player />
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App;
