import axios from 'axios';

const BASE_URL = 'https://connections-api.herokuapp.com';
export const api = axios.create({ baseURL: BASE_URL });

export const setAuthToken = token => {
  api.defaults.headers.Authorization = token;
};

export const deleteAuthToken = () => {
  delete api.defaults.headers.Authorization;
};
