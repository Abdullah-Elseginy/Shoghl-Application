import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios, {APIS} from '../../utils/Axios';
// ========================== Helpers ========================
// ===================== Get All Countries ========================
export const getAllCountries = createAsyncThunk(
  'auth/getAllCountries',
  async (_, {rejectWithValue}) => {
    try {
      const response = await Axios({
        method: 'GET',
        path: APIS.allCountries,
      });
      const res = response.data.data;
      console.log('getAllCountries ', res);
      return res;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getAllCountries Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Get All Cities ========================
export const getAllCities = createAsyncThunk(
  'auth/getAllCities',
  async (country_code, {rejectWithValue}) => {
    try {
      const response = await Axios({
        method: 'GET',
        path: `${APIS.allCities}${country_code}/All`,
      });
      const res = response.data.data;
      console.log('getAllCities =>>>>>>', res);
      return res;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getAllCities Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==============================================================
type InitailStateTypes = {
  //   login: string;
  token: any;
  user: any;
  error: any;
  loading: boolean;
  allCountries: any;
  allCities: any;
};
const initialState: InitailStateTypes = {
  token: null,
  loading: false,
  user: null,
  error: null,
  allCountries: '',
  allCities: [],
};

const appdataSlice = createSlice({
  name: 'appdataSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // ===================== Get All Countries =======================
      .addCase(getAllCountries.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.loading = false;
        state.allCountries = action.payload;
        // console.log(action.payload);
        state.error = null;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== Get All Cities =======================

      .addCase(getAllCities.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.loading = false;
        state.allCities = action.payload;
        state.error = null;
      })
      .addCase(getAllCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {} = appdataSlice.actions;
export default appdataSlice.reducer;
