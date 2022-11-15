import { api } from './api';

export const fetchContacts = () => {
  const data = api.get('/contacts');
  return data;
};

export const addContactFech = contact => {
  const data = api.post('/contacts', contact);
  return data;
};

export const deleteContactFech = id => {
  const data = api.delete(`/contacts/${id}`);
  return data;
};
