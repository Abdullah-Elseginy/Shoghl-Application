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
        path: `${APIS.allCities}/${country_code}/Details`,
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

// ===================== Auth ========================
// ===================== SignUp One Action ========================
export const signUpOne = createAsyncThunk(
  'auth/signUpOne',
  async (data, {rejectWithValue}) => {
    console.log(data);
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpOne,
        data: data,
      });
      console.log('signUpOne', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('signUpOne Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== SignUp Two Action ========================
export const signUpTwo = createAsyncThunk(
  'auth/signUpTwo',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpTwo,
        data: data,
      });
      console.log('signUpTwo', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('signUpTwo Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Login One Action ========================
export const loginOne = createAsyncThunk(
  'auth/loginOne',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.loginOne,
        data: data,
      });
      console.log('loginOne', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('loginOne Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Login Two Action ========================
// export const loginTwo = createAsyncThunk(
//   "auth/loginTwo",
//   async (data, { rejectWithValue }) => {
//     try {
//       const res = await Axios({
//         method: "POST",
//         path: APIS.loginTwo,
//         data: data,
//         isFormData: true,
//       });
//       console.log("loginTwo", res?.data);
//       return res.data;
//     } catch (error) {
//       const errorMessage = error.response?.data?.errors?.message || error.message
//       console.log('loginTwo Error' ,errorMessage);
//       return rejectWithValue(errorMessage);
//    }
//   }
// );
// ==============================================================
const initialState = {
  token: null,
  loading: false,
  user: null,
  error: null,
  userStatus: null,
  openModalStatus: null,
  allCountries: null,
  allCities: null,
  corpRegisterSteps: null,
  registerationType: '',
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    changeIsSkipping: state => {
      state.isSkipping = true;
    },
    changeRegisterationType: (state, action) => {
      state.registerationType = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      // ===================== Get All Countries =======================

      .addCase(getAllCountries.pending, state => {
        state.loading = true;
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
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.loading = false;
        state.allCities = action.payload;
        // console.log(action.payload);
        state.error = null;
      })
      .addCase(getAllCities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpOne =======================
      .addCase(signUpOne.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpOne.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signUpOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpTwo =======================

      .addCase(signUpTwo.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(signUpTwo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(signUpTwo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== Login One ========================

      .addCase(loginOne.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(loginOne.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.error = null;
      })
      .addCase(loginOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // ===================== Login Two ========================

    // .addCase(loginTwo.pending, (state, action) => {
    //   state.loading = true;
    // })
    // .addCase(loginTwo.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.user = action.payload;
    //   state.token = action.payload.token;
    //   state.error = null;

    // })
    // .addCase(loginTwo.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // });
  },
});

export const {changeIsSkipping} = authSlice.actions;
export default authSlice.reducer;
