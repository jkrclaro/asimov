import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://www.johnclaro.com'
})

instance.interceptors.request.use(
    async config => {
        const access = localStorage.getItem('access')
        config.headers = { 
            'Authorization': `Bearer ${access}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        return config;
    },
    error => {
      Promise.reject(error)
    }
);

instance.interceptors.response.use((response) => {
    return response
  }, async function (error) {
    const request = error.config;
    if (error.response.status === 401 && !request._retry) {
        request._retry = true;
        const body = {
            username: 'podplayer',
            password: 'p0dpl4y3r!p455'
        }
        const response = await instance.post('/accounts/login', body);
        const { access, refresh } = response.data;
        instance.defaults.headers.common['Authorization'] = `Bearer ${access}`;
        localStorage.setItem('access', access)
        localStorage.setItem('refresh', refresh)
        return instance(request);
    }
    return Promise.reject(error);
  }
);

export default instance;