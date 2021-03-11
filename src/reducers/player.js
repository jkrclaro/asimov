import {
    PLAY_EPISODE,
    SHOW_PLAYER,
    PLAY_PLAYER,
    PAUSE_PLAYER
} from '../actions/types';

const INITIAL_STATE = {
    isOpen: false,
    isPlaying: false,
    podcast: {},
    episode: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PLAY_EPISODE:
            return {
                ...state,
                isPlaying: true,
                podcast: action.podcast,
                episode: action.episode
            };
        case SHOW_PLAYER:
            return {
                ...state,
                isOpen: true
            };
        case PLAY_PLAYER:
            return {
                ...state,
                isPlaying: true
            };
        case PAUSE_PLAYER:
            return {
                ...state,
                isPlaying: false
            };
        default:
            return state;
    };
};
