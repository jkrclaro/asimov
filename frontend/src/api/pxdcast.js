import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://zuse.jkrclaro.com/pxdcast' : 'http://zuse.localhost:8000/pxdcast'
})