import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import podcastReducer from './podcasts';
import playerReducer from './player';
import episodeReducer from './episodes';
import authReducer from './auth';
import { LOGOUT_SUCCESS } from '../actions/types';

const appReducer = combineReducers({
    form: form,
    podcast: podcastReducer,
    player: playerReducer,
    episode: episodeReducer,
    auth: authReducer
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;