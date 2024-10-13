import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appdataSlice from './slices/appdataSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  appdata: appdataSlice,
});

export default rootReducer;
