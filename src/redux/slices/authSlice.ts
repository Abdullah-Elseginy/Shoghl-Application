import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {},
//   extraReducers: builder => {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
