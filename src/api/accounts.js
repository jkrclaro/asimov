import axios from 'axios';

export default axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? 'https://www.johnclaro.com/accounts' : 'http://localhost:8000/accounts'
})