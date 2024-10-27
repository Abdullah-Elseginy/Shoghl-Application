import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios, {APIS} from '../../utils/Axios';
type InitailStateTypes = {
  token: any;
  user: any;
  error: any;
  loadinJobs: boolean;
  PostjobHelpers: any;
  allJobs: any;
  jobDetails: any;
  helpersJobs: any;
  allCategories: any;
  saveloading: boolean;
  SavedJobs: any;
  lodingUnsave: boolean;
};
const initialState: InitailStateTypes = {
  token: null,
  loadinJobs: false,
  user: null,
  error: null,
  PostjobHelpers: '',
  allJobs: [],
  jobDetails: '',
  helpersJobs: '',
  allCategories: [],
  saveloading: false,
  SavedJobs: [],
  lodingUnsave: false,
};
// ========================== Post Job======================
// ==========================Post Job Helper======================
export const PostJobHelpers = createAsyncThunk(
  'auth/PostJobHelpers',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.PostJobHelpers,
      });
      console.log('PostJobHelpers', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('PostJobHelpers Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================Post New Job======================
export const PostNewJob = createAsyncThunk(
  'auth/PostNewJob',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.postNewJob,
        isFormData: true,
      });
      console.log('PostNewJob', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('PostNewJob Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ==========================Search Jobs======================
export const SearchJobs = createAsyncThunk(
  'auth/SearchJobs',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.SearchJobs,
        params: data && data,
      });
      console.log('Search---Jobs----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('SearchJobs Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================Search Jobs======================
export const getCategoryWithSearch = createAsyncThunk(
  'auth/getCategoryWithSearch',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getCategoryWithSearch,
        params: data,
      });
      console.log('getCategoryWithSearch----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getCategoryWithSearch Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================get Jobs Details ======================
export const getJobsDetails = createAsyncThunk(
  'auth/getJobsDetails',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getJobsDetails,
        params: data,
      });
      console.log('getJobsDetails----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getJobsDetails Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================get Jobs Details ======================
export const getAllHelperJobs = createAsyncThunk(
  'auth/getAllHelperJobs',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getAllHelperJobs,
      });
      console.log('getAllHelperJobs----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getAllHelperJobs Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================Save Job ======================
export const saveJob = createAsyncThunk(
  'auth/saveJob',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.saveJob,
        data: data,
      });
      console.log('saveJob----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('saveJob Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================get Saved Jobs ======================
export const getSavedJobs = createAsyncThunk(
  'auth/getSavedJobs',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getSavedJobs,
      });
      console.log('getSavedJobs----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getSavedJobs Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================get Saved Jobs ======================
export const unSaveJob = createAsyncThunk(
  'auth/unSaveJob',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.unSaveJob,
        data: data,
      });
      console.log('unSaveJob----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('unSaveJob Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==============================================================

const JobsSlice = createSlice({
  name: 'jobs',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // =====================Post job helpers=======================
      .addCase(PostJobHelpers.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(PostJobHelpers.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.PostjobHelpers = action.payload.data;
        state.error = null;
      })
      .addCase(PostJobHelpers.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // =====================Post New Job=======================
      .addCase(PostNewJob.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(PostNewJob.fulfilled, state => {
        state.loadinJobs = false;
        state.error = null;
      })
      .addCase(PostNewJob.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // =====================Search Job=======================
      .addCase(SearchJobs.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(SearchJobs.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.allJobs = action.payload?.data?.data;
        console.log('All Jobssss-------' + action.payload.data);
        state.error = null;
      })
      .addCase(SearchJobs.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // =====================getCategoryWithSearch=======================
      .addCase(getCategoryWithSearch.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(getCategoryWithSearch.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.allCategories = action.payload;
        state.error = null;
      })
      .addCase(getCategoryWithSearch.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // =====================get Jobs Details=======================
      .addCase(getJobsDetails.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(getJobsDetails.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.jobDetails = action.payload?.data;
        state.error = null;
      })
      .addCase(getJobsDetails.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // ===================== get All Helper Jobs=======================
      .addCase(getAllHelperJobs.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(getAllHelperJobs.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.helpersJobs = action.payload?.data;
        state.error = null;
      })
      .addCase(getAllHelperJobs.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // ===================== Save job=======================
      .addCase(saveJob.pending, state => {
        state.saveloading = true;
        state.error = null;
      })
      .addCase(saveJob.fulfilled, state => {
        state.saveloading = false;
        state.error = null;
      })
      .addCase(saveJob.rejected, (state, action) => {
        state.saveloading = false;
        state.error = action.payload;
      })
      // ===================== Get Saved jobs=======================
      .addCase(getSavedJobs.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(getSavedJobs.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.SavedJobs = action.payload?.data?.data;
        state.error = null;
      })
      .addCase(getSavedJobs.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // ======================unSave jobs=======================
      .addCase(unSaveJob.pending, state => {
        state.lodingUnsave = true;
        state.error = null;
      })
      .addCase(unSaveJob.fulfilled, (state, action) => {
        state.lodingUnsave = false;
        state.error = null;
      })
      .addCase(unSaveJob.rejected, (state, action) => {
        state.lodingUnsave = false;
        state.error = action.payload;
      });
  },
});

export const {} = JobsSlice.actions;
export default JobsSlice.reducer;
