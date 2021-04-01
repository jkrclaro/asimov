import React from 'react';
import { connect } from 'react-redux';

import Moment from 'react-moment';

import {
    fetchEpisodes,
    showPlayer,
    playEpisode,
    pausePlayer,
} from '../actions/podcasts';


class Episodes extends React.Component {

    componentDidMount() {
        this.props.fetchEpisodes(this.props.podcastId);
    }

    handlePlayEpisode = (podcast, episode) => {
        this.props.showPlayer();
        this.props.playEpisode(podcast, episode);
    }

    render() {
        const { podcasts, player, pausePlayer, episodes } = this.props;
        return (
            <div className='col-lg-12'>
                { episodes.isFetching ? (
                    <div className='text-center mt-5'><i className='fas fa-sync-alt fa-spin'></i></div>
                ) : !episodes.data.length ? (
                    <span>Sorry, the episodes of this podcast could not be loaded.</span>
                ) : (
                    <div className='row'>
                        <div className='col-lg-5 mb-3'>
                            {/* <div className='input-group'>
                                <input type='text' className='form-control' placeholder='Search episode...'></input>
                                <div className="input-group-append">
                                    <span className="btn btn-Theme"><i className='fas fa-search'></i></span>
                                </div>
                            </div> */}
                        </div>
                        <div className='col-lg-7 text-right my-auto'>
                            <small className='text-muted'>{episodes.data.length} EPISODES</small>
                        </div>
                        {episodes.data.map((episode, index) =>
                            <div className='col-lg-12' key={index}>
                                {index <= episodes.data.length ? <hr/> : null}
                                <div className='row'>
                                    <div className='col-10 my-auto'>
                                        <div className='row'>
                                            <div className='col-lg-8 col-12'><span className='episode-link'>{episode.name}</span></div>
                                            <div className='col-lg-2 text-lg-center col-6'><span className='text-muted'><Moment format='ll'>{episode.published_at}</Moment></span></div>
                                            <div className='col-lg-2 text-lg-center col-6'><span className='text-muted'>{episode.duration}</span></div>
                                        </div>
                                    </div>
                                    <div className='col-2 text-center my-auto'>
                                        {player.episode.name === episode.name && player.podcast.name === podcasts.selected.name && player.isPlaying ? (
                                            <button className='btn btn-Theme' onClick={() => pausePlayer() }>
                                                <i className='fas fa-pause'></i>
                                            </button>
                                        ) : (
                                            <button className='btn btn-Theme-Outline' onClick={() => this.handlePlayEpisode(podcasts.selected, episode)}>
                                                <i className='fas fa-play'></i>
                                            </button>
                                        )}
                                    </div>
                                </div>
                                {index === episodes.data.length - 1 ? <hr/> : null}
                            </div>
                        )}
                    </div>
                )}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        podcasts: state.podcasts,
        player: state.player,
        episodes: state.episodes
    };
}


export default connect(
    mapStateToProps,
    { pausePlayer, playEpisode, showPlayer, fetchEpisodes }
)(Episodes);
