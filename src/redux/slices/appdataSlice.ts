import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios, {APIS} from '../../utils/Axios';
// ========================== Helpers ========================
type InitailStateTypes = {
  //   login: string;
  token: any;
  user: any;
  error: any;
  loadingappdata: boolean;
  choicesStep3: any;
  CompanyDataProfile: Array<any>;
  loadingSaveEdit: boolean;
  industerial: Array<any>;
  Specialties: Array<any>;
};
const initialState: InitailStateTypes = {
  token: null,
  loadingappdata: false,
  user: null,
  error: null,
  choicesStep3: [],
  CompanyDataProfile: [],
  loadingSaveEdit: false,
  industerial: [],
  Specialties: [],
};

// ========================== Profile OverView ========================
export const EditmyProfileOverview = createAsyncThunk(
  'auth/EditmyProfileOverview',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.myProfileOverview,
        data: data,
      });
      console.log('editAbout_charactaristic', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('EditmyProfileOverview Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== edit candidate profile header OverView ========================
export const editCandidateProfileHeader = createAsyncThunk(
  'auth/editCandidateProfileHeader',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.editCandidateProfileHeader,
        data: data,
      });
      console.log('editCandidateProfileHeader', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('editCandidateProfileHeader Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ========================== Get Company Profile Data ========================
export const getCompanyProfile = createAsyncThunk(
  'auth/getCompanyProfile',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getCompanyProfile,
      });
      console.log('getCompanyProfile', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getCompanyProfile Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== Edit Company Profile Data ========================
export const editCompanyProfile = createAsyncThunk(
  'auth/editCompanyProfile',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.editCompanyProfile,
        data: data,
        isFormData: true,
      });
      console.log('editCompanyProfile', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('editCompanyProfile Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ==============================================================

const appdataSlice = createSlice({
  name: 'appdataSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder

      // =====================Post Profile overview =======================
      .addCase(EditmyProfileOverview.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(EditmyProfileOverview.fulfilled, state => {
        state.loadingappdata = false;
        state.error = null;
      })
      .addCase(EditmyProfileOverview.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      })

      // =====================Get company Profile =======================
      .addCase(getCompanyProfile.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(getCompanyProfile.fulfilled, (state, action) => {
        state.loadingappdata = false;
        state.CompanyDataProfile = action.payload.data;
        state.error = null;
      })
      .addCase(getCompanyProfile.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      })
      // =====================Get company Profile =======================
      .addCase(editCompanyProfile.pending, state => {
        state.loadingSaveEdit = true;
        state.error = null;
      })
      .addCase(editCompanyProfile.fulfilled, state => {
        state.loadingSaveEdit = false;
        state.error = null;
      })
      .addCase(editCompanyProfile.rejected, (state, action) => {
        state.loadingSaveEdit = false;
        state.error = action.payload;
      })

      // =====================edit candidate profile header =======================
      .addCase(editCandidateProfileHeader.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(editCandidateProfileHeader.fulfilled, state => {
        state.loadingappdata = false;
        state.error = null;
      })
      .addCase(editCandidateProfileHeader.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      });
  },
});

export const {} = appdataSlice.actions;
export default appdataSlice.reducer;
