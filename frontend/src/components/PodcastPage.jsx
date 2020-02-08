import React from 'react';

import Header from './Header';
import Podcast from '../containers/Podcast';
import Sidebar from '../containers/Sidebar';


class PodcastPage extends React.Component {

    state = {
        isDesktop: false
    }
    updatePredicate = this.updatePredicate.bind(this);

    componentDidMount() {
        this.updatePredicate();
        window.addEventListener('resize', this.updatePredicate);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updatePredicate);
    };

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 992 });
    };

    render() {
        return (
            <Sidebar>
                <Header path={this.props.match.path}/>
                <Podcast isDesktop={this.state.isDesktop} podcastId={this.props.match.params.id} />
            </Sidebar>
        )
    }
}

export default PodcastPage;
