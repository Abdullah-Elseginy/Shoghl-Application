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
  SavedJobs: Array<any>;
  lodingUnsave: boolean;
  lodingApply: boolean;
  appliedJobs: Array<any>;
  PostCategoryes: Array<any>;
  companyPostedJobs: Array<any>;
  aplliedUsers: Array<any>;
  userCvs: Array<any>;
  userDetailsData: Array<any>;
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
  lodingApply: false,
  appliedJobs: [],
  PostCategoryes: [],
  companyPostedJobs: [],
  aplliedUsers: [],
  userCvs: [],
  userDetailsData: [],
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
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.postNewJob,
        data: data,
        isFormData: true,
      });
      console.log('PostNewJob', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage = error.response?.data?.message || error.message;
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
        pathParams: data
          ? `?contract_type=${JSON.stringify(
              data.contract_type,
            )}&city=${JSON.stringify(
              data.city || [],
            )}&career_level=${JSON.stringify(
              data.career_level || [],
            )}&category=${data.category || []}&title=${data.title || ''}`
          : '',
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
    } catch (error: any) {
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
// ==========================Aplly Job ======================
export const applyJob = createAsyncThunk(
  'auth/applyJob',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.applyJob,
        data: data,
      });
      console.log('applyJob----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('applyJob Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==========================Get All Applied Job ======================
export const getAllApplied = createAsyncThunk(
  'auth/getAllApplied',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getAllApplied,
        data: data,
      });
      console.log('getAllApplied----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getAllApplied Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== UnAplly Job ======================
export const unApplyJob = createAsyncThunk(
  'auth/unApplyJob',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.unApplyJob,
        data: data,
      });
      console.log('unApplyJob----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('unApplyJob Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== Viewed Jobs  ======================
export const ViewedJobs = createAsyncThunk(
  'auth/ViewedJobs',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.ViewedJobs,
        data: data,
      });
      console.log('ViewedJobs----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('ViewedJobs Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ========================== compantPostedJobs Jobs  ======================
export const getCompanyPostedJobs = createAsyncThunk(
  'auth/getCompanyPostedJobs',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.companyPostedJobs,
      });
      console.log('getCompanyPostedJobs----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getCompanyPostedJobs Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== Delete Jobs  ======================
export const deleteJob = createAsyncThunk(
  'auth/deleteJob',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'DELETE',
        path: APIS.deleteJob,
        params: data,
      });
      console.log('deleteJob----', res?.data);
      return res.data.message;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('deleteJob Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== Edit Jobs  ======================
export const editBob = createAsyncThunk(
  'auth/editBob',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'POST',
        path: APIS.editBob,
        data: data,
      });
      console.log('editBob----', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('editBob Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== getAllAppliedUsers Jobs  ======================
export const getAllAppliedUsers = createAsyncThunk(
  'auth/getAllAppliedUsers',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getAllAppliedUsers,
      });
      console.log('getAllAppliedUsers----', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getAllAppliedUsers Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Searched CVs Jobs  ======================
export const getSearchedCVs = createAsyncThunk(
  'auth/getSearchedCVs',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getSearchedCVs,
        params: data,
      });
      console.log('getSearchedCVs----', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getSearchedCVs Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Cvs Details and Show User Profile  ======================
export const getCvsDetailsShowUserProfile = createAsyncThunk(
  'auth/getCvsDetailsShowUserProfile',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getCvsDetailsShowUserProfile,
        params: data,
      });
      console.log('getCvsDetailsShowUserProfile----', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getCvsDetailsShowUserProfile Error', errorMessage);
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
        state.loadinJobs = false;
        state.error = null;
      })
      .addCase(getCategoryWithSearch.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.allCategories = action.payload.data.data;
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
      .addCase(unSaveJob.fulfilled, state => {
        state.lodingUnsave = false;
        state.error = null;
      })
      .addCase(unSaveJob.rejected, (state, action) => {
        state.lodingUnsave = false;
        state.error = action.payload;
      })
      // ======================apply jobs=======================
      .addCase(applyJob.pending, state => {
        state.lodingApply = true;
        state.error = null;
      })
      .addCase(applyJob.fulfilled, state => {
        state.lodingApply = false;
        state.error = null;
      })
      .addCase(applyJob.rejected, (state, action) => {
        state.lodingApply = false;
        state.error = action.payload;
      })
      // ======================apply jobs=======================
      .addCase(unApplyJob.pending, state => {
        state.lodingApply = true;
        state.error = null;
      })
      .addCase(unApplyJob.fulfilled, state => {
        state.lodingApply = false;
        state.error = null;
      })
      .addCase(unApplyJob.rejected, (state, action) => {
        state.lodingApply = false;
        state.error = action.payload;
      })
      // ======================Get All Applied jobs=======================
      .addCase(getAllApplied.pending, state => {
        state.lodingApply = true;
        state.error = null;
      })
      .addCase(getAllApplied.fulfilled, (state, action) => {
        state.lodingApply = false;
        state.appliedJobs = action.payload?.data?.data;
        state.error = null;
      })
      .addCase(getAllApplied.rejected, (state, action) => {
        state.lodingApply = false;
        state.error = action.payload;
      })
      // ======================Viewwd jobs=======================
      .addCase(ViewedJobs.pending, state => {
        state.lodingApply = false;
        state.error = null;
      })
      .addCase(ViewedJobs.fulfilled, state => {
        state.lodingApply = false;
        state.error = null;
      })
      .addCase(ViewedJobs.rejected, (state, action) => {
        state.lodingApply = false;
        state.error = action.payload;
      })
      // ======================company Posted  jobs=======================
      .addCase(getCompanyPostedJobs.pending, state => {
        state.lodingApply = false;
        state.error = null;
      })
      .addCase(getCompanyPostedJobs.fulfilled, (state, action) => {
        state.lodingApply = false;
        state.companyPostedJobs = action.payload.data.data;
        state.error = null;
      })
      .addCase(getCompanyPostedJobs.rejected, (state, action) => {
        state.lodingApply = false;
        state.error = action.payload;
      })
      // ======================Delete My Posted jobs=======================
      .addCase(deleteJob.pending, state => {
        state.lodingApply = true;
        state.error = null;
      })
      .addCase(deleteJob.fulfilled, state => {
        state.lodingApply = false;
        state.error = null;
      })
      .addCase(deleteJob.rejected, (state, action) => {
        state.lodingApply = false;
        state.error = action.payload;
      })
      // ======================edit jBob=======================
      .addCase(editBob.pending, state => {
        state.lodingApply = true;
        state.error = null;
      })
      .addCase(editBob.fulfilled, state => {
        state.lodingApply = false;
        state.error = null;
      })
      .addCase(editBob.rejected, (state, action) => {
        state.lodingApply = false;
        state.error = action.payload;
      })
      // ======================get all applied users=======================
      .addCase(getAllAppliedUsers.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(getAllAppliedUsers.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.aplliedUsers = action.payload.data.data;
        state.error = null;
      })
      .addCase(getAllAppliedUsers.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // ======================get all Cvs users=======================
      .addCase(getSearchedCVs.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(getSearchedCVs.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.userCvs = action.payload.data.data;
        state.error = null;
      })
      .addCase(getSearchedCVs.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      })
      // ======================get all Cvs users=======================
      .addCase(getCvsDetailsShowUserProfile.pending, state => {
        state.loadinJobs = true;
        state.error = null;
      })
      .addCase(getCvsDetailsShowUserProfile.fulfilled, (state, action) => {
        state.loadinJobs = false;
        state.userDetailsData = action.payload.data;
        state.error = null;
      })
      .addCase(getCvsDetailsShowUserProfile.rejected, (state, action) => {
        state.loadinJobs = false;
        state.error = action.payload;
      });
  },
});

export const {} = JobsSlice.actions;
export default JobsSlice.reducer;
