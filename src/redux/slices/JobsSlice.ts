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
        state.jobDetails = action.payload;
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
      });
  },
});

export const {} = JobsSlice.actions;
export default JobsSlice.reducer;
