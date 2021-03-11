import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://fireside.johnclaro.com/' : 'http://fireside.localhost:8000/'
})