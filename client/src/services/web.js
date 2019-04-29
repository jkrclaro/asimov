import axios from 'axios';

const API_URL = 'http://localhost:5000';
const USERS_SIGNUP_URL = `${API_URL}/users/signup`;
const USERS_LOGIN_URL = `${API_URL}/users/login`;
const ROOMS_CREATE_URL = `${API_URL}/rooms/create`;
const VOICES_TOKEN_URL = `${API_URL}/voices/token';`
const IS_INVITER_VALID_URL = `${API_URL}/users/is_inviter_valid`;

const service = require('./index');

export function signup (payload) {
    return axios.post(USERS_SIGNUP_URL, payload);
}

export function login (data) {
    return axios.post(USERS_LOGIN_URL, data)
    .then(response => {
        const { user, accessToken, refreshToken } = response.data;
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        return Promise.resolve('Success')
    })
    .catch(error => Promise.reject(error))
}

export function createRoom (payload) {
    const headers = service.getAuthorizationHeader();
    return axios.post(ROOMS_CREATE_URL, payload, { headers })
}

export function getVoiceToken () {
    return axios.get(VOICES_TOKEN_URL, {})
}

export function isInviterValid(payload) {
    return axios.post(IS_INVITER_VALID_URL, payload)
}