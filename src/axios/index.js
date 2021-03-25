import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.johnclaro.com' : 'http://localhost:8000'
})

instance.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('SUCCESS!!')
    return config;
}, function (error) {
    console.log('ERROR!!')
    // Do something with request error
    return Promise.reject(error);
});

export default instance;