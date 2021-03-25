import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import podcastReducer from './podcasts';
import playerReducer from './player';
import episodeReducer from './episodes';

const appReducer = combineReducers({
    form: form,
    podcasts: podcastReducer,
    player: playerReducer,
    episodes: episodeReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;