import { contactsInitialState } from './contacts/initialState';
import { loginInitialState } from './login/loginInitialState';

export const initialState = {
  contacts: contactsInitialState,
  auth: loginInitialState,
};
