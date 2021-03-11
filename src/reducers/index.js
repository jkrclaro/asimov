import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import podcasts from './podcasts';
import player from './player';
import episodes from './episodes';
import auth from './auth';
import { LOGOUT_SUCCESS } from '../actions/types';

const appReducer = combineReducers({
    form,
    podcasts,
    player,
    episodes,
    auth
})

const rootReducer = (state, action) => {
    if (action.type === LOGOUT_SUCCESS) {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;