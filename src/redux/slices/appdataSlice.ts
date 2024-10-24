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
};
const initialState: InitailStateTypes = {
  token: null,
  loadingappdata: false,
  user: null,
  error: null,
  allCountries: [],
  allCities: [],
  choicesStep3: [],
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
// ========================== Post Job======================

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
        state => {
          state.loadingappdata = false;
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
      });
  },
});

export const {} = appdataSlice.actions;
export default appdataSlice.reducer;
