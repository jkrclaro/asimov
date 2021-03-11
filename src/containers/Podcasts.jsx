import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchPodcasts } from '../actions/podcasts';


class Podcasts extends React.Component {

    componentDidMount() {
        this.props.fetchPodcasts()
    }

    render() {
        const { podcasts } = this.props;
        return (
            <div className='mb-3'>
                { !podcasts.data.length ? (
                    <span>You are not currently subscribed to any podcasts.</span>
                ) : (
                    <div className='row'>
                        {podcasts.data.map((podcast, index) =>
                            <div key={index} className='col-lg-2 col-md-3 col-sm-3 col-4 mb-3'>
                                <Link to={`/podcasts/${podcast.itunes_id}`}>
                                    <img src={podcast.img} alt={`img-${podcast.itunes_id}`}  width='100%' className='border'></img>
                                </Link>
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
     };
}

export default connect(
    mapStateToProps,
    { fetchPodcasts }
)(Podcasts);