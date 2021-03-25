import { stopSubmit } from 'redux-form';

import axios from '../axios';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from './types';


export const loadUser = () => async (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    try {
        const response = await axios.get('/accounts/user');
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
        const response = await axios.post('/accounts/login', body);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

export const logout = () => async dispatch => {
    dispatch({
        type: LOGOUT_SUCCESS
    });
};
