import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios, {APIS} from '../../utils/Axios';
// ========================== Helpers ========================

// ===================== Auth candidate ========================
// ===================== SignUp One Action ========================
export const signUpOne = createAsyncThunk(
  'auth/signUpOne',
  async (data, {rejectWithValue}) => {
    console.log('dada', data);
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpOne,
        data: data,
      });
      console.log('signUpOne', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('loginOne Error', errorMessage);
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
      const errorMessage = error?.response?.data?.message || error.message;
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
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('loginOne Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Login Two Action ========================
export const loginTwo = createAsyncThunk(
  'auth/loginTwo',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.loginTwo,
        data: data,
        isFormData: true,
      });
      console.log('loginTwo', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('loginTwo Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ======================== Logout candidate =========================
export const logout = createAsyncThunk(
  'auth/logout',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.logoutCandidate,
      });
      console.log('logout', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('logout Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ======================== Get My Profile ===========================
export const getMyProfile = createAsyncThunk(
  'auth/getMyProfile',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getMyProfile,
      });
      console.log('getMyProfile', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getMyProfile Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Auth Company "Corporate" ========================
// ======================== SignUp Company "Corporate"===========================
export const signUpOneCorporate = createAsyncThunk(
  'auth/signUpOneCorporate',
  async (data, {rejectWithValue}) => {
    // console.log('dada', data);
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpOneCorporate,
        data: data,
      });
      console.log('signUpOneCorporate', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('Error response data:', error.response?.data);
      console.log('signUpOneCorporate Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ======================== SignUp Company step1 "Corporate"===========================
export const signUpTwoCorporate = createAsyncThunk(
  'auth/signUpTwoCorporate',
  async (data, {rejectWithValue}) => {
    // console.log('dada', data);
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpTwoCorporate,
        data: data,
      });
      console.log('signUpTwoCorporate', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('Error response data:', error.response?.data.errors);
      console.log('signUpTwoCorporate Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ======================== SignUp Company step2 "Corporate"===========================
export const signUpThreeCorporate = createAsyncThunk(
  'auth/signUpThreeCorporate',
  async (data, {rejectWithValue}) => {
    // console.log('dada', data);
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpThreeCorporate,
        data: data,
      });
      console.log('signUpThreeCorporate', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('Error response data:', error.response?.data);
      console.log('signUpThreeCorporate Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Data ========================
// ======================== My About Me ===========================
export const editAbout_charactaristic = createAsyncThunk(
  'auth/editAbout_charactaristic',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.editAbout_charactaristic,
        data: data,
      });
      console.log('editAbout_charactaristic', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('editAbout_charactaristic Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ======================== My Profile Overview ===========================
export const myProfileOverview = createAsyncThunk(
  'auth/myProfileOverview',
  async (profileOverviewData, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.myProfileOverview,
        data: profileOverviewData,
      });
      console.log('myProfileOverview', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('myProfileOverview Error', errorMessage);
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
  userStatus: any;
  openModalStatus: any;
  allCountries: any;
  allCities: any;
  corpRegisterSteps: any;
  registerationType: string;
  loading: boolean;
  userProfileData: any;
  isSkipping: boolean;
  userCode: any;
  StepOneData: any;
  StepTwoData: any;
};
const initialState: InitailStateTypes = {
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
  userProfileData: '',
  isSkipping: false,
  userCode: null,
  StepOneData: '',
  StepTwoData: '',
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
    logoutSuccess: state => {
      state.token = null;
      state.loading = false;
      state.user = null;
      state.userProfileData = null;
      state.error = null;
      state.userStatus = null;
      state.openModalStatus = null;
      state.allCountries = null;
      state.allCities = null;
      state.corpRegisterSteps = null;
      state.userCode = null;
    },
  },
  extraReducers: builder => {
    builder
      // ===================== signUpOne =======================
      .addCase(signUpOne.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpOne.fulfilled, (state, action) => {
        state.loading = false;
        state.userCode = action.payload.data.code;
        console.log(action.payload.data.access_token);
        state.token = action.payload.data.access_token;
        state.error = null;
      })
      .addCase(signUpOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpTwo =======================

      .addCase(signUpTwo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpTwo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log(action.payload.data.access_token);
        state.token = action.payload.data.access_token;
        state.error = null;
      })
      .addCase(signUpTwo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== Login One ========================

      .addCase(loginOne.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginOne.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.data.access_token;
        console.log(
          'userTOKEN from loginone=' + action.payload.data.access_token,
        );
        state.error = null;
      })
      .addCase(loginOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== Logout ========================
      .addCase(logout.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logout.fulfilled, state => {
        state.loading = false;
        state.error = null;
        state.token = null;
        state.loading = false;
        state.user = null;
        state.userProfileData = null;
        state.userStatus = null;
        state.openModalStatus = null;
        state.allCountries = null;
        state.allCities = null;
        state.corpRegisterSteps = null;
        state.userCode = null;
      })
      .addCase(logout.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== Login Two ========================

      .addCase(loginTwo.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginTwo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.data.access_token.access_token;
        console.log(
          'userTOKEN from Login Twoooooo==' +
            action.payload.data.access_token.access_token,
        );
        state.error = null;
      })
      .addCase(loginTwo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpOneCorporate ========================
      .addCase(signUpOneCorporate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpOneCorporate.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.data.access_token;
        console.log(
          'userTOKENsignUpOneCorporate===' + action.payload.data.access_token,
        );
        state.error = null;
      })
      .addCase(signUpOneCorporate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('error sigonUpCorporate FromSlice', action.payload);
      })
      // ===================== signUpTwoCorporate ========================
      .addCase(signUpTwoCorporate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpTwoCorporate.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.StepOneData = action.payload.data;

        state.error = null;
      })
      .addCase(signUpTwoCorporate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('error sigonUpCorporate FromSlice', action.payload);
      })
      // ===================== signUpThreeCorporate ========================
      .addCase(signUpThreeCorporate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpThreeCorporate.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.StepTwoData = action.payload.data;
        state.error = null;
      })
      .addCase(signUpThreeCorporate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('error signUpThreeCorporate FromSlice', action.payload);
      })
      // ===================== get My Profile ========================
      .addCase(getMyProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getMyProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.userProfileData = action.payload;
        console.log('Progfilr DADADADADA===', action.payload);
        state.error = null;
      })
      .addCase(getMyProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== My About Me ========================
      .addCase(editAbout_charactaristic.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editAbout_charactaristic.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(editAbout_charactaristic.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== My Profile Overview ========================
      .addCase(myProfileOverview.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(myProfileOverview.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(myProfileOverview.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {changeIsSkipping, changeRegisterationType, logoutSuccess} =
  authSlice.actions;
export default authSlice.reducer;
