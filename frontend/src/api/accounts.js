import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://lovelace.jkrclaro.com/accounts' : 'http://lovelace.localhost:8000/accounts'
})