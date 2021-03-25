import React from 'react';

import Header from './Header';
import Podcasts from '../containers/Podcasts';
import Sidebar from '../containers/Sidebar';


class PodcastsPage extends React.Component {

    render() {
        return (
            <Sidebar>
                <Header paramsId={null} title='Podcasts' />
                <h1>{process.env.NODE_ENV}</h1>
                <Podcasts />
            </Sidebar>
        )
    }
}

export default PodcastsPage;
