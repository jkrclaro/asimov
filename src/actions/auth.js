import { stopSubmit } from 'redux-form';

import accounts from '../api/accounts';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL,
} from './types';

const config = {headers: {'Content-Type': 'application/json'}};


export const tokenConfig = getState => {
    const token = getState().auth.token;
    if (token) {
        config.headers['Authorization'] = `JWT ${token}`;
        config.headers['Access-Control-Allow-Origin'] = '*';
    }
    return config;
};


export const loadUser = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    try {
        const response = await accounts.get('/user', tokenConfig(getState));
        dispatch({
            type: USER_LOADED,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};


export const login = ({ username, password }) => async dispatch => {
    const body = JSON.stringify({ username, password });
    try {
        const response = await accounts.post('/login', body, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
        dispatch(stopSubmit('loginForm', {'non_field_errors': [error.response.data.detail]}));
    }
};


export const register = ({ username, email, password, password2 }) => async dispatch => {
    const body = JSON.stringify({ username, email, password, password2 });
    try {
        const response = await accounts.post('/register', body, config);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: REGISTER_FAIL
        });
        dispatch(stopSubmit('registerForm', error.response.data));
    }
}


export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
};
