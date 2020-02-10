import React from 'react';
import { connect } from 'react-redux';

import {
    getPodcast,
    subscribePodcast,
    unsubscribePodcast,
    getPodcastSubscription
} from '../actions/podcasts';
import Episodes from './Episodes';


class Podcast extends React.Component {

    componentDidMount() {
        const { podcastId } = this.props;
        this.props.getPodcast(podcastId);
        this.props.getPodcastSubscription(podcastId);
    }

    subscribe = (name) => {
        this.props.subscribePodcast(name);
    }

    unsubscribe = (name) => {
        this.props.unsubscribePodcast(name);
    }

    render() {
        const { podcasts, auth, isDesktop } = this.props;
        return (
            <div className='mt-3'>
                { podcasts.isFetchingPodcast ? (
                    <div className='text-center mt-5'><i className='fas fa-sync-alt fa-spin'></i></div>
                ) : !podcasts.selected ? (
                    <div className='col-lg-12'>
                        Sorry, this podcast could not be loaded.
                    </div>
                ) : (
                    <div className='row mt-3'>
                        <div className='col-lg-3'>
                            <img src={podcasts.selected.img} alt={`img-${podcasts.selected.itunes_id}`} className={`${isDesktop ? 'img-fluid' : 'podcast-img'} border mb-3`}></img>
                        </div>
                        <div className='col-lg-9 mb-3'>
                            <div className='row'>
                                <div className='col-lg-8'>
                                    <div style={{ fontSize: '20px' }}><b>{podcasts.selected.name}</b></div>
                                    <div className='mb-2'><span className='text-muted'>{podcasts.selected.author}</span></div>
                                    <div className='mb-2'><i className='fas fa-link text-muted mr-3'></i><a href={podcasts.selected.website}>{podcasts.selected.website}</a></div>
                                    <div className='mb-2'><small>{podcasts.selected.summary}</small></div>
                                </div>
                                { auth.isAuthenticated ? (
                                    <div className='col-lg-4 mb-3'>
                                        {podcasts.is_subscribed ? (
                                            <span onClick={() => this.unsubscribe(podcasts.selected.name)} className={`btn btn-Light ${isDesktop ? 'btn-block': null}`}><i className='fas fa-times'></i> Unsubscribe</span>
                                        ) : (
                                            <span onClick={() => this.subscribe(podcasts.selected.name)} className={`btn btn-Theme ${isDesktop ? 'btn-block': null}`}><i className='fas fa-plus'></i> Subscribe</span>
                                        )}

                                    </div>
                                ) : null}
                            </div>
                        </div>
                        <Episodes podcastId={this.props.podcastId} />
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        podcasts: state.podcasts,
        auth: state.auth
    };
}

export default connect(
    mapStateToProps,
    { getPodcast, subscribePodcast, unsubscribePodcast, getPodcastSubscription }
)(Podcast);
