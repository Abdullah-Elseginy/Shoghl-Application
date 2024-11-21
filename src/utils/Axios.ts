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
  getCareerLevel: string;
  resendOTP: string;
  SignUpTwocandidate: string;
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
  editCandidateProfileHeader: string;
  getSalaryPer: string;
  getJobTypes: string;
  getWorkSpaceSettings: string;
  getGender: string;
  getYearsEx: string;
  getEducationalLvel: string;
  getFeildOfStudy: string;
  getUniveristies: string;
  getGrades: string;
  getLanguage: string;
  getLanguageLevel: string;
  getSkills: string;
  getPostType: string;
  getPostJobTypes: string;
  getContractTypes: string;
  getJobsCareerLevels: string;
  getJobsSalaryPer: string;
  sendEmailNotifyPer: string;
  getIndustrys: string;
  getSpecialties: string;
  getCompanyRange: string;
  companyForgetPasswordStepOnePhoneNumber: string;
  companyForgetPasswordStepTwoOTP: string;
  companyForgetPasswordThreeNewPassword: string;
  getJobCategories: string;
};

export const APIS: APIsTypes = {
  // =================== Helpers =================== //
  allCountries: '/API/Helpers/Locations/Countries?per_call=15',
  allCities: '/API/Helpers/Locations/',
  GetSalaryCurrency: '/API/Helpers/Locations/Currencies',
  getSalaryPer: '/API/Helpers/Companies/Minimum-Net-Salary-Per',
  getJobTypes: '/API/Helpers/Companies/Job-Types',
  getWorkSpaceSettings: '/API/Helpers/Companies/Workspace-Setting',
  getGender: '/API/Helpers/Companies/Genders',
  getYearsEx: '/API/Helpers/Companies/Experience-Years',
  getEducationalLvel: '/API/Helpers/Companies/Educational-Levels',
  getFeildOfStudy: '/API/Helpers/Companies/Fields-Of-Study',
  getUniveristies: '/API/Helpers/Companies/Universities',
  getGrades: '/API/Helpers/Companies/Grades',
  getLanguage: '/API/Helpers/Companies/Languages',
  getLanguageLevel: '/API/Helpers/Companies/Languages-Levels',
  getSkills: '/API/Helpers/Companies/Skills',
  getPostType: '/API/Helpers/Jobs/Post-Types',
  getPostJobTypes: '/API/Helpers/Jobs/Job-Types',
  getContractTypes: '/API/Helpers/Jobs/Contract-Types',
  getJobsCareerLevels: '/API/Helpers/Jobs/Career-Levels',
  getJobsSalaryPer: '/API/Helpers/Jobs/Salary-Pers',
  sendEmailNotifyPer: '/API/Helpers/Jobs/Send-Emails-Notification-Pers',
  getIndustrys: '/API/Helpers/Companies/Industrys',
  getSpecialties: '/API/Helpers/Companies/Specialties',
  getCompanyRange: '/API/Helpers/Companies/Employee-Range?all_names=yes',
  getJobCategories: '/API/Helpers/Jobs/Categories',
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
  companyForgetPasswordStepOnePhoneNumber:
    '/API/COM/Auth/Forgot-Password/Phone',
  companyForgetPasswordStepTwoOTP: '/API/COM/Auth/Forgot-Password/Otp',
  companyForgetPasswordThreeNewPassword:
    '/API/COM/Auth/Forgot-Password/New-Password',
  // ===================candidate Profile =================== //
  getMyProfile: '/API/LOW/My/Profile',
  editAbout_charactaristic: '/API/LOW/My/About',
  myProfileOverview: '/API/LOW/My/Profile-Overview',
  editCandidateProfileHeader: '/API/LOW/My/Profile-Header',
  // ===================company Profile =================== //
  getCompanyProfile: '/API/COM/My/Profile',
  editCompanyProfile: '/API/COM/My/Edit-Profile',
  // ===================choices=================//
  getCareerLevel: '/API/Helpers/Companies/Career-Levels',
  // =================jobs slice=====================//
  // ----------------Post jobs-------------------
  postNewJob: '/API/COM/Jobs/Add',
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
