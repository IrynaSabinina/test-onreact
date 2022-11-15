import { createSlice } from '@reduxjs/toolkit';
import { contactsInitialState } from './contacts/initialState';
import { combineReducers } from '@reduxjs/toolkit';
import { authReducer } from './login/loginSlice';
import {
  getContactsThunk,
  addContactThunk,
  deleteContactThunk,
} from './thunks/contatsThunks/thunks';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: {
    [getContactsThunk.fulfilled]: (state, action) => {
      state.items = action.payload;
    },

    [addContactThunk.fulfilled]: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    [deleteContactThunk.fulfilled]: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { filter } = contactsSlice.actions;

export const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducer,
});
