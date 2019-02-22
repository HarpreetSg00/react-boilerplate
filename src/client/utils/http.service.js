import CONFIG from './config';
import axios from 'axios';

const HTTP = axios.create({
    baseURL: CONFIG.API.url
});

HTTP.interceptors.request.use(function (config) {
    config.url += '?_format=json';
    return config;
});

export default HTTP;