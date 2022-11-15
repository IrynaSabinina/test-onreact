import { createSlice } from '@reduxjs/toolkit';
import { loginInitialState } from './loginInitialState';
import {
  loginThunk,
  logoutThunk,
  currentUserThunk,
  createNewUserThunk,
} from './loginThunks';
import { STATUS } from 'constanse/status';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

export const authSlice = createSlice({
  name: 'login',
  initialState: loginInitialState,
  extraReducers: {
    [createNewUserThunk.pending]: state => {
      state.status = STATUS.Loading;
    },
    [createNewUserThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.Success;
      state.token = payload.token;
      state.user = payload.user;
    },
    [createNewUserThunk.rejected]: state => {
      state.status = STATUS.Error;
    },
    [loginThunk.pending]: state => {
      state.status = STATUS.Loading;
    },
    [loginThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.Success;
      state.token = payload.token;
      state.user = payload.user;
    },
    [loginThunk.rejected]: state => {
      state.status = STATUS.Error;
    },
    [logoutThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.Idle;
      state.token = payload.token;
      state.user = payload.user;
    },
    [currentUserThunk.fulfilled]: (state, { payload }) => {
      state.status = STATUS.Success;
      state.user = payload;
    },
    [currentUserThunk.rejected]: state => {
      state.status = STATUS.Error;
    },
  },
});

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
