import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios, {APIS} from '../../utils/Axios';
// ========================== Helpers ========================
type InitailStateTypes = {
  //   login: string;
  token: any;
  user: any;
  error: any;
  loadingappdata: boolean;
  allCountries: any;
  allCities: any;
  choicesStep3: any;
  choicesStep1: Array<any>;
  Currency: any;
  CompanyDataProfile: Array<any>;
  allCountries2: Array<any>;
  loadingSaveEdit: boolean;
  companyEmployeesRangedata: Array<any>;
  industerial: Array<any>;
  Specialties: Array<any>;
};
const initialState: InitailStateTypes = {
  token: null,
  loadingappdata: false,
  user: null,
  error: null,
  allCountries: [],
  allCities: [],
  choicesStep3: [],
  choicesStep1: [],
  Currency: '',
  CompanyDataProfile: [],
  allCountries2: [],
  loadingSaveEdit: false,
  companyEmployeesRangedata: [],
  industerial: [],
  Specialties: [],
};
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
// ========================== Choices ========================
export const get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer =
  createAsyncThunk(
    'auth/get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer',
    async (_, {rejectWithValue}) => {
      try {
        const res = await Axios({
          method: 'GET',
          path: APIS.get_careeer_level_job_types_workspace_setting_minnuim_net_salary_per,
        });
        console.log(
          'get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer',
          res?.data,
        );
        return res.data;
      } catch (error) {
        const errorMessage =
          error.response?.data?.errors?.message || error.message;
        console.log(
          'get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer Error',
          errorMessage,
        );
        return rejectWithValue(errorMessage);
      }
    },
  );
// ========================== Choices Step 3 ========================
export const GetChoicesStep3 = createAsyncThunk(
  'auth/GetChoicesStep3',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.GetChoicesstep3,
      });
      console.log('GetChoicesStep3', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('GetChoicesStep3 Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== Choices Step 3 ========================
export const GetSalaryCurrency = createAsyncThunk(
  'auth/GetSalaryCurrency',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.GetSalaryCurrency,
      });
      console.log('GetSalaryCurrency', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('GetSalaryCurrency Error', errorMessage);
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
// ========================== company_employees_range ========================
export const companyEmployeesRange = createAsyncThunk(
  'auth/companyEmployeesRange',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.companyEmployeesRange,
      });
      console.log('companyEmployeesRange', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('companyEmployeesRange Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Industerial Search ========================
export const getIndusterialSearch = createAsyncThunk(
  'auth/getIndusterialSearch',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getIndusterialSearch,
        params: data,
      });
      console.log('getIndusterialSearch', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getIndusterialSearch Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Industerial Search ========================
export const getSpecialtiesSearch = createAsyncThunk(
  'auth/getSpecialtiesSearch',
  async (data, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getSpecialtiesSearch,
        params: data,
      });
      console.log('getSpecialtiesSearch', res?.data);
      return res.data;
    } catch (error) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getSpecialtiesSearch Error', errorMessage);
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
      // ===================== Get All Countries =======================
      .addCase(getAllCountries.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.loadingappdata = false;
        const filterdCountries = action.payload?.filter(
          (item: any) => item.id === 187,
        );
        state.allCountries = filterdCountries;
        state.allCountries2 = action.payload;
        state.error = null;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      })
      // ===================== Get All Cities =======================

      .addCase(getAllCities.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.loadingappdata = false;
        state.allCities = action.payload;
        state.error = null;
      })
      .addCase(getAllCities.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      })
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
      // =====================Get Choices Step 1 =======================
      .addCase(
        get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer.pending,
        state => {
          state.loadingappdata = true;
          state.error = null;
        },
      )
      .addCase(
        get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer.fulfilled,
        (state, action) => {
          state.loadingappdata = false;
          state.choicesStep1 = action.payload.data;
          state.error = null;
        },
      )
      .addCase(
        get_careeerLevel_jobTypes_workspaceSetting_MinnuimNetSalaryPer.rejected,
        (state, action) => {
          state.loadingappdata = false;
          state.error = action.payload;
        },
      )
      // =====================Get Choices Step 1 =======================
      .addCase(GetChoicesStep3.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(GetChoicesStep3.fulfilled, (state, action) => {
        state.loadingappdata = false;
        state.choicesStep3 = action.payload.data;
        state.error = null;
      })
      .addCase(GetChoicesStep3.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      })
      // =====================Get Salary Currency =======================
      .addCase(GetSalaryCurrency.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(GetSalaryCurrency.fulfilled, (state, action) => {
        state.loadingappdata = false;
        state.Currency = action.payload.data;
        state.error = null;
      })
      .addCase(GetSalaryCurrency.rejected, (state, action) => {
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
      // =====================company_employees_range =======================
      .addCase(companyEmployeesRange.pending, state => {
        state.loadingappdata = true;
        state.error = null;
      })
      .addCase(companyEmployeesRange.fulfilled, (state, action) => {
        state.loadingappdata = false;
        state.companyEmployeesRangedata =
          action.payload.data;
        state.error = null;
      })
      .addCase(companyEmployeesRange.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      })
      // =====================get Industerial Search =======================
      .addCase(getIndusterialSearch.pending, state => {
        state.loadingappdata = false;
        state.error = null;
      })
      .addCase(getIndusterialSearch.fulfilled, (state, action) => {
        state.loadingappdata = false;
        state.industerial = action.payload.data;
        state.error = null;
      })
      .addCase(getIndusterialSearch.rejected, (state, action) => {
        state.loadingappdata = false;
        state.error = action.payload;
      })
      // =====================get Specialties Search =======================
      .addCase(getSpecialtiesSearch.pending, state => {
        state.loadingappdata = false;
        state.error = null;
      })
      .addCase(getSpecialtiesSearch.fulfilled, (state, action) => {
        state.loadingappdata = false;
        state.Specialties = action.payload.data;
        state.error = null;
      })
      .addCase(getSpecialtiesSearch.rejected, (state, action) => {
        state.loadingappdata = false;
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
