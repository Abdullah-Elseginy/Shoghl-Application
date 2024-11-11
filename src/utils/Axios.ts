import axios, {Method} from 'axios';
import {store} from '../redux/store';

const BASE_URL = 'https://shoghl.code-faster.giize.com';

export type APIsTypes = {
  allCountries: string;
  allCities: string;
  signUpOneCandidat: string;
  signUpTwo: string;
  loginOne: string;
  loginTwo: string;
  signUpOneCorporate: string;
  signUpTwoCorporate: string;
  LoginCompany: string;
  getMyProfile: string;
  myProfileOverview: string;
  signUpThreeCorporate: string;
  signUpFourCorporate: string;
  logoutCandidate: string;
  editAbout_charactaristic: string;
  logoutCompany: string;
  signUpTwoSendOTP: string;
  signUpThreeVrifyOTP: string;
  get_careeer_level_job_types_workspace_setting_minnuim_net_salary_per: string;
  GetChoicesstep3: string;
  resendOTP: string;
  SignUpTwocandidate: string;
  PostJobHelpers: string;
  postNewJob: string;
  // ----jobs slice
  SearchJobs: string;
  getCategoryWithSearch: string;
  getJobsDetails: string;
  getAllHelperJobs: string;
  saveJob: string;
  getSavedJobs: string;
  unSaveJob: string;
  applyJob: string;
  unApplyJob: string;
  getAllApplied: string;
  ViewedJobs: string;
  GetSalaryCurrency: string;
  PostJobCategories: string;
  companyPostedJobs: string;
  deleteJob: string;
  editBob: string;
  getAllAppliedUsers: string;
  getSearchedCVs: string;
  getCvsDetailsShowUserProfile: string;
  getCompanyProfile: string;
  editCompanyProfile: string;
  companyEmployeesRange: string;
  getIndusterialSearch: string;
  getSpecialtiesSearch: string;
};

export const APIS: APIsTypes = {
  // =================== Helpers =================== //
  allCountries: '/API/Helpers/Countries/All',
  allCities: '/API/Helpers/Cities/',
  GetSalaryCurrency: '/API/Helpers/Currency/All',
  // =================== auth Candidate =================== //
  signUpOneCandidat: '/API/LOW/Auth/Registration/One',
  signUpTwoSendOTP: '/API/LOW/Auth/Registration/Two',
  signUpThreeVrifyOTP: '/API/LOW/Auth/Registration/Three',
  signUpTwo: '/API/LOW/Auth/Registration/Two',
  loginOne: '/API/LOW/Auth/Login/One',
  loginTwo: '/API/LOW/Auth/Login/Two',
  SignUpTwocandidate: '/API/LOW/Auth/Registration/Four',
  // ================= Logout Candidate==================//
  logoutCandidate: '/API/LOW/Auth/Logout',
  // =================== auth Company =================== //
  signUpOneCorporate: '/API/COM/Auth/Registration/Form',
  signUpTwoCorporate: '/API/COM/Auth/Registration/Career-Interests',
  signUpThreeCorporate: '/API/COM/Auth/Registration/General-Info',
  signUpFourCorporate: '/API/COM/Auth/Registration/Professional-Info',
  LoginCompany: '/API/COM/Auth/Login',
  logoutCompany: '/API/COM/Auth/Logout',
  resendOTP: '/API/LOW/Auth/Registration/Two-Resend-Otp',

  // ===================candidate Profile =================== //
  getMyProfile: '/API/LOW/My/Profile',
  editAbout_charactaristic: '/API/LOW/My/About',
  myProfileOverview: '/API/LOW/My/Profile-Overview',
  // ===================company Profile =================== //
  getCompanyProfile: '/API/COM/My/Profile',
  editCompanyProfile: '/API/COM/My/Edit-Profile',
  companyEmployeesRange: '/API/COM/My/Edit-Profile-Helper',
  getIndusterialSearch: '/API/COM/My/Industries-Search',
  getSpecialtiesSearch: '/API/COM/My/Specialties-Search',
  // ===================choices=================//
  get_careeer_level_job_types_workspace_setting_minnuim_net_salary_per:
    '/API/COM/Auth/Registration/Career-Interests-Helpers',
  GetChoicesstep3: '/API/COM/Auth/Registration/Professional-Info-Helpers',
  // =================jobs slice=====================//
  // ----------------Post jobs-------------------
  PostJobHelpers: '/API/COM/Jobs/Post-New-Helper',
  postNewJob: '/API/COM/Jobs/Post-New',
  PostJobCategories: '/API/COM/Jobs/Categorys?Name=TK',
  companyPostedJobs: '/API/COM/Jobs/My',
  // ----------------search jobs-------------------
  SearchJobs: '/API/LOW/Jobs/All',
  getCategoryWithSearch: '/API/LOW/Jobs/Categorys',
  getJobsDetails: '/API/LOW/Jobs/Details',
  getAllHelperJobs: '/API/LOW/Jobs/All-Helper',
  // -------------save apply job-----------
  saveJob: '/API/LOW/Jobs/Save',
  getSavedJobs: '/API/LOW/Jobs/All-Saved',
  unSaveJob: '/API/LOW/Jobs/Un-Save',
  applyJob: '/API/LOW/Jobs/Apply',
  unApplyJob: '/API/LOW/Jobs/Un-Apply',
  getAllApplied: '/API/LOW/Jobs/All-Applied',
  ViewedJobs: '/API/LOW/Jobs/View',
  //-------------edtit delete job --------------------
  deleteJob: '/API/COM/Jobs/Delete',
  editBob: '/API/COM/Jobs/Edit',
  //-------get applied users --------------------
  getAllAppliedUsers: '/API/COM/Jobs/All-Applied-Users',
  // get cvs users --------------------
  getSearchedCVs: '/API/COM/Users/L/All',
  getCvsDetailsShowUserProfile: '/API/COM/Users/L/Details',
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

axiosInstance.interceptors.response.use(
  (res: any) => {
    return res;
  },
  async (error: any) => {
    let errRes = error?.response?.data;
    let err = errRes?.message ? errRes?.message : 'Bad Request';
    console.log(err);
    return Promise.reject(error);
  },
);

const Axios = async ({
  method,
  path,
  data,
  params,
  header = {},
  pathParams = '',
  isFormData = false,
}: {
  method: Method;
  path: string;
  data?: any;
  params?: any;
  pathParams?: string;
  header?: any;
  isFormData?: boolean;
}) => {
  const accessToken = store.getState().auth?.token;

  const authHeder = accessToken
    ? {
        Authorization: `Bearer ${accessToken}`,
      }
    : {};

  const response = await axiosInstance({
    method: method,
    url: path + pathParams,
    data: data,
    params: params,
    headers: {
      'Content-Type': isFormData ? 'multipart/form-data' : 'application/json',
      ...authHeder,
      ...header,
    },
  });
  return response;
};

export default Axios;
