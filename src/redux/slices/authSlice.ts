import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios, {APIS} from '../../utils/Axios';
// ========================== Helpers ========================
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
  loadingResendOTP: boolean;
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
  loadingResendOTP: false,
};
// ===================== Auth candidate ========================
// ===================== SignUp One Action ========================
export const signUpOne = createAsyncThunk(
  'auth/signUpOne',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpOneCandidat,
        data: data,
      });
      console.log('signUpOne', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('signUpOne Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== SignUp One Action ========================
export const signUpTwocandidate = createAsyncThunk(
  'auth/signUpTwocandidate',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.SignUpTwocandidate,
        data: data,
      });
      console.log('signUpTwocandidate', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('signUpTwocandidate Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== SignUp Two Action ========================
export const signUpTwoComplateProfile = createAsyncThunk(
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
// ===================== SignUp Two send OTP Action ========================
export const signUpTwoSendOTP = createAsyncThunk(
  'auth/signUpTwoSendOTP',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpTwoSendOTP,
        data: data,
      });
      console.log('signUpTwoSendOTP', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('signUpTwoSendOTP Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Resend OTP ========================
export const ResendOTP = createAsyncThunk(
  'auth/ResendOTP',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.resendOTP,
        data: data,
      });
      console.log('ResendOTP', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('ResendOTP Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== SignUp Three verify OTP Action ========================
export const signUpThreeVerifyOTP = createAsyncThunk(
  'auth/signUpThreeVerifyOTP',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpThreeVrifyOTP,
        data: data,
      });
      console.log('signUpThreeVerifyOTP', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('signUpThreeVerifyOTP Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Login One candidate Action ========================
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
// ===================== Auth Company  ========================

// ===================== Login Company ========================
export const loginComapny = createAsyncThunk(
  'auth/loginComapny',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.LoginCompany,
        data: data,
      });
      console.log('loginComapny', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('loginComapny Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ===================== Logout Company ========================
export const logoutCompany = createAsyncThunk(
  'auth/logoutCompany',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.logoutCompany,
      });
      console.log('logoutCompany', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('logoutCompany Error', errorMessage);
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
// ======================== SignUp Company step2 "Corporate"===========================
export const signUpFourCorporate = createAsyncThunk(
  'auth/signUpFourCorporate',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.signUpFourCorporate,
        data: data,
        isFormData: true,
      });
      console.log('signUpFourCorporate', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error?.response?.data?.message || error.message;
      console.log('signUpFourCorporate Error', errorMessage);
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
// ==============================================================

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
      // ===================== signUpOne candidate =======================
      .addCase(signUpOne.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpOne.fulfilled, (state, action) => {
        state.loading = false;
        state.userCode = action.payload.data.code;
        state.error = null;
      })
      .addCase(signUpOne.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpTwocandidate candidate =======================
      .addCase(signUpTwocandidate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpTwocandidate.fulfilled, (state, action) => {
        state.loading = false;
        state.userCode = action.payload.data.code;
        state.error = null;
      })
      .addCase(signUpTwocandidate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpTwoSendOTP candidate =======================
      .addCase(signUpTwoSendOTP.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpTwoSendOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.userCode = action.payload.data.code;
        state.error = null;
      })
      .addCase(signUpTwoSendOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpThreeVerifyOTP candidate =======================
      .addCase(signUpThreeVerifyOTP.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpThreeVerifyOTP.fulfilled, (state, action) => {
        state.loading = false;
        state.userCode = action.payload.data.code;
        state.token = action.payload.data.access_token;
        state.error = null;
      })
      .addCase(signUpThreeVerifyOTP.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== signUpTwo =======================

      .addCase(signUpTwoComplateProfile.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpTwoComplateProfile.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        // console.log(action.payload.data.access_token);
        // state.token = action.payload.data.access_token;
        state.error = null;
      })
      .addCase(signUpTwoComplateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // ===================== RESEND OTP ========================

      .addCase(ResendOTP.pending, state => {
        state.loadingResendOTP = true;
        state.error = null;
      })
      .addCase(ResendOTP.fulfilled, (state, action) => {
        state.loadingResendOTP = false;
        state.user = action.payload;
        state.token = action.payload.data.access_token;
        console.log(
          'userTOKEN from loginone=' + action.payload.data.access_token,
        );
        state.error = null;
      })
      .addCase(ResendOTP.rejected, (state, action) => {
        state.loadingResendOTP = false;
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
      // ===================== Logout Company ========================
      .addCase(logoutCompany.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutCompany.fulfilled, state => {
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
      .addCase(logoutCompany.rejected, (state, action) => {
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
        state.token = action.payload.data.access_token.access_token;
        console.log(
          'userTOKENsignUpOneCorporate===' +
            action.payload.data.access_token.access_token,
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
      // ===================== signUpFourCorporate ========================
      .addCase(signUpFourCorporate.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signUpFourCorporate.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signUpFourCorporate.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log('error signUpFourCorporate FromSlice', action.payload);
      })
      // ===================== Login Company ========================
      .addCase(loginComapny.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginComapny.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload.data.access_token.access_token;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginComapny.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
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
