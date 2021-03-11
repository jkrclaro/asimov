import {
    FETCH_EPISODES_REQUEST,
    FETCH_EPISODES_SUCCESS,
    FETCH_EPISODES_FAILURE,
} from '../actions/types';

const initialState = {
    data: [],
    selected: {},
    isFetching: false
}

export default function episodeReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_EPISODES_REQUEST:
            return {
                ...state,
                isFetching: true
            }
        case FETCH_EPISODES_FAILURE:
        case FETCH_EPISODES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                isFetching: false
            }
        default:
            return state;
    };
};
