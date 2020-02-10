import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://winer.jkrclaro.com/pxdcast' : 'http://winer.localhost:8000/pxdcast'
})