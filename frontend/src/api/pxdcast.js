import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://jarvis.jkrclaro.com/pxdcast' : 'http://jarvis.localhost:8000/pxdcast'
})