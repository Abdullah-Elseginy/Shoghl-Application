import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appdataSlice from './slices/appdataSlice';
import JobSlice from './slices/JobsSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  appdata: appdataSlice,
  jobs: JobSlice,
});

export default rootReducer;
