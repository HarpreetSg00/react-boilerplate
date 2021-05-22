import axios from 'axios';
import CONFIG from './config';

const REQUEST = config => {
  const HTTP = axios.create({
    baseURL: CONFIG.API.url,
  });

  // for request
  HTTP.interceptors.request.use(request => {
    request.url = request.baseURL + config.url;
    request.data = config.data;
    request.method = config.method;
    return request;
  });

  // for response
  HTTP.interceptors.response.use(
    response => {
      if (response.status === 200 || response.status === 201) {
        return response;
      }
    },
    error => {
      if (
        error.response.status === 400 ||
        error.response.status === 404 ||
        error.response.status === 500
      ) {
        return error.response;
      }
      if (error.response.status === 401) {
        return error.response;
      }
    },
  );
  return HTTP();
};

export default REQUEST;
