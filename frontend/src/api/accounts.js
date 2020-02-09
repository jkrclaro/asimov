import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://eniac.jkrclaro.com/accounts' : 'http://eniac.localhost:8000/accounts'
})