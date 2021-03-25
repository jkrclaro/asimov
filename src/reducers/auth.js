import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from '../actions/types';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
    token: localStorage.getItem('token')
};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case USER_LOADED:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.access);
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                token: action.payload.access,
                refresh: action.payload.refresh
            };
        case AUTH_ERROR:
        case LOGIN_FAIL:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                token: null
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token');
            return {
                ...state,
                isLogout: true,
                isLoading: false,
                isAuthenticated: false,
                user: null,
                token: null
            }
        default:
            return state;

    }
}