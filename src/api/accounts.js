import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://fireside.jkrclaro.com/accounts' : 'http://fireside.localhost:8000/accounts'
})