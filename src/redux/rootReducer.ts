import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import appdataSlice from './slices/appdataSlice';
import JobSlice from './slices/JobsSlice';
import helpersSlice from './slices/helpersSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  appdata: appdataSlice,
  jobs: JobSlice,
  helpers: helpersSlice,
});

export default rootReducer;
