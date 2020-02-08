import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://asimov.jkrclaro.com/accounts' : 'http://asimov.localhost:8000/accounts'
})