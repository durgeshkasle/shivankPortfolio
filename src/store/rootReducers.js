import { combineReducers } from '@reduxjs/toolkit';

// Reducers and ReducerPaths
import { userReducer } from './slices/userSlice';
import { authApiReducer, authApiReducerPath } from './ApiCalls/authApis';
import { dashboardApiReducer, dashboardApiReducerPath } from './ApiCalls/dashboardApis';

const rootReducer = combineReducers({
  user: userReducer,
  [authApiReducerPath]: authApiReducer,
  [dashboardApiReducerPath]: dashboardApiReducer,
});

export default rootReducer;
