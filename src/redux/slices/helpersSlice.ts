import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import Axios, {APIS} from '../../utils/Axios';
// ========================== Helpers ========================
type InitailStateTypes = {
  token: any;
  user: any;
  error: any;
  helpersLoading: boolean;
  allCountries: Array<any>;
  allCities: Array<any>;
  choicesStep3: any;
  careerLevel: Array<any>;
  Currency: any;
  allCountries2: Array<any>;
  industerial: Array<any>;
  Specialties: Array<any>;
  salaryPer: Array<any>;
  jobTypes: Array<any>;
  workSpace: Array<any>;
  genderList: Array<any>;
  yearsExperience: Array<any>;
  EducationalLevel: Array<any>;
  feildStudy: Array<any>;
  universities: Array<any>;
  Grades: Array<any>;
  languages: Array<any>;
  languagesLevel: Array<any>;
  skills: Array<any>;
  postType: Array<any>;
  jobPostTypes: Array<any>;
  contractTypes: Array<any>;
  postJobCareerLevel: Array<any>;
  jobsSalaryPer: Array<any>;
  notifyPer: Array<any>;
  industrys: Array<any>;
  specialties: Array<any>;
  CompanyRangedata: Array<any>;
  jobCategories: Array<any>;
};
const initialState: InitailStateTypes = {
  token: null,
  helpersLoading: false,
  user: null,
  error: null,
  allCountries: [],
  allCities: [],
  choicesStep3: [],
  careerLevel: [],
  Currency: [],
  allCountries2: [],
  industerial: [],
  Specialties: [],
  salaryPer: [],
  jobTypes: [],
  workSpace: [],
  genderList: [],
  yearsExperience: [],
  EducationalLevel: [],
  feildStudy: [],
  universities: [],
  Grades: [],
  languages: [],
  languagesLevel: [],
  skills: [],
  postType: [],
  jobPostTypes: [],
  contractTypes: [],
  postJobCareerLevel: [],
  jobsSalaryPer: [],
  notifyPer: [],
  industrys: [],
  specialties: [],
  CompanyRangedata: [],
  jobCategories: [],
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
    } catch (error: any) {
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
        path: `${APIS.allCities}${country_code}/Cities`,
      });
      const res = response.data.data;
      console.log('getAllCities =>>>>>>', res);
      return res;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getAllCities Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== salary currency ========================
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
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('GetSalaryCurrency Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ========================== get_careeerLevel ========================
export const getCareeerLevel = createAsyncThunk(
  'auth/getCareeerLevel',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getCareerLevel,
      });
      console.log('getCareeerLevel', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getCareeerLevel Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ========================== get_careeerLevel ========================
export const getSalaryPer = createAsyncThunk(
  'auth/getSalaryPer',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getSalaryPer,
      });
      console.log('getSalaryPer', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getSalaryPer Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get job types ========================
export const getJobTypes = createAsyncThunk(
  'auth/getJobTypes',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getJobTypes,
      });
      console.log('getJobTypes', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getJobTypes Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get work Space Setting ========================
export const getWorkSpaceSettings = createAsyncThunk(
  'auth/getWorkSpaceSettings',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getWorkSpaceSettings,
      });
      console.log('getWorkSpaceSettings', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getWorkSpaceSettings Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Gender ========================
export const getGender = createAsyncThunk(
  'auth/getGender',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getGender,
      });
      console.log('getGender', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getGender Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Yeaer Experience ========================
export const getYearsEx = createAsyncThunk(
  'auth/getYearsEx',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getYearsEx,
      });
      console.log('getYearsEx', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getYearsEx Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Yeaer Experience ========================
export const getFeildOfStudy = createAsyncThunk(
  'auth/getFeildOfStudy',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getFeildOfStudy,
      });
      console.log('getFeildOfStudy', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getFeildOfStudy Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Educational Level ========================
export const getEducationalLvel = createAsyncThunk(
  'auth/getEducationalLvel',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getEducationalLvel,
      });
      console.log('getEducationalLvel', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getEducationalLvel Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Universities ========================
export const getUniveristies = createAsyncThunk(
  'auth/getUniveristies',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getUniveristies,
      });
      console.log('getUniveristies', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getUniveristies Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Grades ========================
export const getGrades = createAsyncThunk(
  'auth/getGrades',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getGrades,
      });
      console.log('getGrades', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getGrades Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Language ========================
export const getLanguage = createAsyncThunk(
  'auth/getLanguage',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getLanguage,
      });
      console.log('getLanguage', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getLanguage Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Langauge Level ========================
export const getLanguageLevel = createAsyncThunk(
  'auth/getLanguageLevel',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getLanguageLevel,
      });
      console.log('getLanguageLevel', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getLanguageLevel Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);

// ========================== get Skills ========================
export const getSkills = createAsyncThunk(
  'auth/getSkills',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getSkills,
      });
      console.log('getSkills', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getSkills Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Post Type ========================
export const getPostType = createAsyncThunk(
  'auth/getPostType',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getPostType,
      });
      console.log('getPostType', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getPostType Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Post Job Types ========================
export const getPostJobTypes = createAsyncThunk(
  'auth/getPostJobTypes',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getPostJobTypes,
      });
      console.log('getPostJobTypes', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getPostJobTypes Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Contract-Types ========================
export const getContractTypes = createAsyncThunk(
  'auth/getContractTypes',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getContractTypes,
      });
      console.log('getContractTypes', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getContractTypes Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Jobs Career Levels========================
export const getJobsCareerLevels = createAsyncThunk(
  'auth/getJobsCareerLevels',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getJobsCareerLevels,
      });
      console.log('getJobsCareerLevels', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getJobsCareerLevels Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Jobs Career Levels========================
export const getJobsSalaryPer = createAsyncThunk(
  'auth/getJobsSalaryPer',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getJobsSalaryPer,
      });
      console.log('getJobsSalaryPer', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getJobsSalaryPer Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== Send-Emails-Notification-Pers========================
export const sendEmailNotifyPer = createAsyncThunk(
  'auth/sendEmailNotifyPer',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.sendEmailNotifyPer,
      });
      console.log('sendEmailNotifyPer', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('sendEmailNotifyPer Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Industyes========================
export const getIndustrys = createAsyncThunk(
  'auth/getIndustrys',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getIndustrys,
      });
      console.log('getIndustrys', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getIndustrys Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Specialties========================
export const getSpecialties = createAsyncThunk(
  'auth/getSpecialties',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getSpecialties,
      });
      console.log('getSpecialties', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getSpecialties Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Specialties========================
export const getCompanyRange = createAsyncThunk(
  'auth/getCompanyRange',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getCompanyRange,
      });
      console.log('getCompanyRange', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getCompanyRange Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ========================== get Job Categories========================
export const getJobCategories = createAsyncThunk(
  'auth/getJobCategories',
  async (_, {rejectWithValue}) => {
    try {
      const res = await Axios({
        method: 'GET',
        path: APIS.getJobCategories,
      });
      console.log('getJobCategories', res?.data);
      return res.data;
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.errors?.message || error.message;
      console.log('getJobCategories Error', errorMessage);
      return rejectWithValue(errorMessage);
    }
  },
);
// ==============================================================

const helpersSlice = createSlice({
  name: 'helpersSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // ===================== Get All Countries =======================
      .addCase(getAllCountries.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        state.helpersLoading = false;
        const filterdCountries = action.payload?.data?.filter(
          (item: any) => item.code === 1,
        );
        state.allCountries = filterdCountries;
        state.allCountries2 = action.payload?.data;
        state.error = null;
      })
      .addCase(getAllCountries.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // ===================== Get All Cities =======================
      .addCase(getAllCities.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getAllCities.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.allCities = action.payload.data;
        state.error = null;
      })
      .addCase(getAllCities.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================Get Salary Currency =======================
      .addCase(GetSalaryCurrency.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(GetSalaryCurrency.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.Currency = action.payload.data.data;
        state.error = null;
      })
      .addCase(GetSalaryCurrency.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Careeer Level =======================
      .addCase(getCareeerLevel.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getCareeerLevel.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.careerLevel = action.payload.data.data;
        state.error = null;
      })
      .addCase(getCareeerLevel.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Salary Per  =======================
      .addCase(getSalaryPer.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getSalaryPer.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.salaryPer = action.payload.data.data;
        state.error = null;
      })
      .addCase(getSalaryPer.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get job types  =======================
      .addCase(getJobTypes.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getJobTypes.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.jobTypes = action.payload.data.data;
        state.error = null;
      })
      .addCase(getJobTypes.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get job types  =======================
      .addCase(getWorkSpaceSettings.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getWorkSpaceSettings.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.workSpace = action.payload.data.data;
        state.error = null;
      })
      .addCase(getWorkSpaceSettings.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get job types  =======================
      .addCase(getGender.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getGender.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.genderList = action.payload.data.data;
        state.error = null;
      })
      .addCase(getGender.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get years Experience  =======================
      .addCase(getYearsEx.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getYearsEx.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.yearsExperience = action.payload.data.data;
        state.error = null;
      })
      .addCase(getYearsEx.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })

      // =====================get EDucational Level  =======================
      .addCase(getEducationalLvel.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getEducationalLvel.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.EducationalLevel = action.payload.data.data;
        state.error = null;
      })
      .addCase(getEducationalLvel.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Field Of Study  =======================
      .addCase(getFeildOfStudy.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getFeildOfStudy.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.feildStudy = action.payload.data.data;
        state.error = null;
      })
      .addCase(getFeildOfStudy.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Universities  =======================
      .addCase(getUniveristies.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getUniveristies.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.universities = action.payload.data.data;
        state.error = null;
      })
      .addCase(getUniveristies.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get grades  =======================
      .addCase(getGrades.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getGrades.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.Grades = action.payload.data.data;
        state.error = null;
      })
      .addCase(getGrades.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get language  =======================
      .addCase(getLanguage.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getLanguage.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.languages = action.payload.data.data;
        state.error = null;
      })
      .addCase(getLanguage.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get language Level  =======================
      .addCase(getLanguageLevel.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getLanguageLevel.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.languagesLevel = action.payload.data.data;
        state.error = null;
      })
      .addCase(getLanguageLevel.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get language Level  =======================
      .addCase(getSkills.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.skills = action.payload.data.data;
        state.error = null;
      })
      .addCase(getSkills.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Post Type  =======================
      .addCase(getPostType.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getPostType.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.postType = action.payload.data.data;
        state.error = null;
      })
      .addCase(getPostType.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Post job Types  =======================
      .addCase(getPostJobTypes.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getPostJobTypes.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.jobPostTypes = action.payload.data.data;
        state.error = null;
      })
      .addCase(getPostJobTypes.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get contract types  =======================
      .addCase(getContractTypes.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getContractTypes.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.contractTypes = action.payload.data.data;
        state.error = null;
      })
      .addCase(getContractTypes.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get jobs Career Levels  =======================
      .addCase(getJobsCareerLevels.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getJobsCareerLevels.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.postJobCareerLevel = action.payload.data.data;
        state.error = null;
      })
      .addCase(getJobsCareerLevels.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get jobs Career Levels  =======================
      .addCase(getJobsSalaryPer.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getJobsSalaryPer.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.jobsSalaryPer = action.payload.data.data;
        state.error = null;
      })
      .addCase(getJobsSalaryPer.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================send email notification per  =======================
      .addCase(sendEmailNotifyPer.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(sendEmailNotifyPer.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.notifyPer = action.payload.data.data;
        state.error = null;
      })
      .addCase(sendEmailNotifyPer.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Industrys  =======================
      .addCase(getIndustrys.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getIndustrys.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.industrys = action.payload.data.data;
        state.error = null;
      })
      .addCase(getIndustrys.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get specialties  =======================
      .addCase(getSpecialties.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getSpecialties.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.specialties = action.payload.data.data;
        state.error = null;
      })
      .addCase(getSpecialties.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get company Range  =======================
      .addCase(getCompanyRange.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getCompanyRange.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.CompanyRangedata = action.payload.data.data;
        state.error = null;
      })
      .addCase(getCompanyRange.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      })
      // =====================get Job Categories  =======================
      .addCase(getJobCategories.pending, state => {
        state.helpersLoading = true;
        state.error = null;
      })
      .addCase(getJobCategories.fulfilled, (state, action) => {
        state.helpersLoading = false;
        state.jobCategories = action.payload.data.data;
        state.error = null;
      })
      .addCase(getJobCategories.rejected, (state, action) => {
        state.helpersLoading = false;
        state.error = action.payload;
      });
  },
});

export const {} = helpersSlice.actions;
export default helpersSlice.reducer;
