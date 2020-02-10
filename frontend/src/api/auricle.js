import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://auricle.jkrclaro.com/' : 'http://auricle.localhost:8000/'
})