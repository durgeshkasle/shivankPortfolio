import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import rootReducer from './rootReducers';
import createdMiddleware from './middlewares';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => createdMiddleware(getDefaultMiddleware),
});

export default store;
