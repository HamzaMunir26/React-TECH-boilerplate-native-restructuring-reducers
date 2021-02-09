import apisauce from 'apisauce';

const BASE_URL = 'https://jsonplaceholder.typicode.com/';
export const config = {
  API_URL: 'https://jsonplaceholder.typicode.com/', // not used
  timeout: 1000 * 60,
};

export const api = apisauce.create({
  BASE_URL,
  timeout: config.timeout,
});

export const setHeaderWithToken = (token) => {
  if (token) {
    api.setHeader('Authorization', 'Bearer ' + token);
  }
};