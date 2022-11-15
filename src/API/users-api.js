import { api } from './api';

// const BASE_URL = 'https://connections-api.herokuapp.com';
// const connections = axios.create({ baseURL: BASE_URL });

export const createUserFunc = async body => {
  const { data } = await api.post('/users/signup', body);
  return data;
};

export const loginUserFunc = async body => {
  const { data } = await api.post('/users/login', body);

  return data;
};

export const logoutUserFunc = async body => {
  const { data } = await api.post('/users/logout', body);

  return data;
};
export const getCurrenttUserFunc = async () => {
  const { data } = await api.get('/users/current');
  console.log(data);
  return data;
};
