import axios from 'axios';

const api = axios.create({
  baseURL: 'https://itunes.apple.com/',
  timeout: 10000,
});

// Example auth token interceptor
api.interceptors.request.use(
  async config => {
    const token = 'Bearer_token';
    config.headers.Authorization = token;
    return config;
  },
  error => Promise.reject(error),
);

export default api;
