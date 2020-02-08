import {
    GET_PODCASTS_REQUEST,
    GET_PODCASTS_SUCCESS,
    GET_PODCAST_REQUEST,
    GET_PODCAST_SUCCESS,
    GET_PODCAST_FAILURE,
    GET_PODCAST_SUBSCRIPTION_REQUEST,
    GET_PODCAST_SUBSCRIPTION_SUCCESS,
    UNSUBSCRIBE_PODCAST_SUCCESS,
    SUBSCRIBE_PODCAST_SUCCESS,
} from '../actions/types';

const initialState = {
    data: [],
    selected: {},
    isFetching: false,
    isFetchingPodcast: true,
    isFetchingPodcastSubscription: true,
    subscriptions: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PODCAST_REQUEST:
            return {
                ...state,
                isFetchingPodcast: true
            };
        case GET_PODCASTS_REQUEST:
            return { 
                ...state, 
                isFetching: true
            };
        case GET_PODCAST_SUCCESS:
            return {
                ...state,
                selected: action.payload,
                isFetchingPodcast: false
            }
        case GET_PODCAST_FAILURE:
            return {
                ...state,
                selected: null,
                isFetchingPodcast: false
            }
        case GET_PODCASTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }
        case GET_PODCAST_SUBSCRIPTION_REQUEST:
            return {
                ...state,
                isFetchingPodcastSubscription: true
            }
        case SUBSCRIBE_PODCAST_SUCCESS:
        case UNSUBSCRIBE_PODCAST_SUCCESS:
        case GET_PODCAST_SUBSCRIPTION_SUCCESS:
            return {
                ...state,
                isFetchingPodcastSubscription: false,
                is_subscribed: action.payload.is_subscribed
            }
        default:
            return state;
    };
};
