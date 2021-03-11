import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://podplayer.johnclaro.com/' : 'http://podplayer.localhost:8000/'
})