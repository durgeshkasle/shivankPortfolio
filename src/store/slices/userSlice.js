import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  isAuthenticated: false,
  username: null,
  emailId: null,
  accessToken: null,
  refreshToken: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { isAuthenticated, accessToken, refreshToken, username, emailId } = action.payload;
      state.isAuthenticated = isAuthenticated;
      state.username = username;
      state.emailId = emailId;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.username = null;
      state.emailId = null;
      state.accessToken = null;
      state.refreshToken = null;
    },
  },
});

// Actions
export const { setCredentials, logout } = userSlice.actions;

// Persist config (whitelist)
const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['isAuthenticated', 'username', 'refreshToken', 'emailId'],
};

// Persisted reducer
export const userReducer = persistReducer(userPersistConfig, userSlice.reducer);
