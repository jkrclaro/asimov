import axios from 'axios';

const API_URL = 'http://localhost:5000';
const USERS_REFRESH_URL = `${API_URL}/users/refresh`;
const currentUser = require('../libs/currentUser');

axios.interceptors.response.use((config) => {
    return config;
}, function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        const headers = { refreshToken }
        return axios.post(USERS_REFRESH_URL, {}, { headers })
        .then(refreshed => {
            const { accessToken } = refreshed.data;
            localStorage.setItem('accessToken', accessToken);
            const authToken = `Bearer ${accessToken}`;
            axios.defaults.headers.common['Authorization'] = authToken;
            originalRequest.headers['Authorization'] = authToken;
            return axios(originalRequest);
        })
    }
    return Promise.reject(error);
})

export function getAuthorizationHeader() {
    return {'Authorization': `Bearer ${currentUser.getAccessToken()}`}
}
