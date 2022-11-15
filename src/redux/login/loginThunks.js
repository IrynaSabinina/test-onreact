import {
  loginUserFunc,
  logoutUserFunc,
  getCurrenttUserFunc,
  createUserFunc,
} from 'API/users-api';
import { setAuthToken, deleteAuthToken } from 'API/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { tokenAuthSeletor } from 'redux/selectors';

export const loginThunk = createAsyncThunk('auth/login', async payload => {
  const data = await loginUserFunc(payload);
  setAuthToken(data.token);
  return data;
});

export const logoutThunk = createAsyncThunk('auth/logout', async payload => {
  const data = await logoutUserFunc(payload);
  deleteAuthToken(data.token);
  return data;
});

export const currentUserThunk = createAsyncThunk(
  'auth/currentUser',
  (_, { getState, rejectWithValue }) => {
    const token = tokenAuthSeletor(getState());

    if (token) {
      try {
        console.log(token);
        setAuthToken(token);
        return getCurrenttUserFunc();
      } catch (error) {
        rejectWithValue(error);
      }
    }
    rejectWithValue();
  }
);

export const createNewUserThunk = createAsyncThunk(
  'auth/createUser',
  async payload => {
    const data = await createUserFunc(payload);
    setAuthToken(data.token);
    return data;
  }
);
