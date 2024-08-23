import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isSkipping: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    changeIsSkipping: (state) => {
      state.isSkipping = true;
    },
  },
//   extraReducers: builder => {},
});

export const {changeIsSkipping} = authSlice.actions;
export default authSlice.reducer;
