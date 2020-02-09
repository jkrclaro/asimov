import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://eniac.jkrclaro.com/pxdcast' : 'http://eniac.localhost:8000/pxdcast'
})