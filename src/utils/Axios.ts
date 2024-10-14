import axios, {Method} from 'axios';
import {store} from '../redux/store';

const BASE_URL = 'https://shoghl.code-faster.giize.com';

export type APIsTypes = {
  //   login: string;
  allCountries: string;
  allCities: string;
  signUpOne: string;
  signUpTwo: string;
  loginOne: string;
  loginTwo: string;
  signUpOneCorporate: string;
  signUpTwoCorporate: string;
  getMyProfile: string;
  myProfileOverview: string;
  signUpThreeCorporate: string;
  logoutCandidate: string;
  editAbout_charactaristic: string;
};

export const APIS: APIsTypes = {
  // =================== Helpers =================== //
  allCountries: 'Helpers/Countries/All',
  allCities: '/API/Helpers/Cities/',
  // =================== auth Candidate =================== //
  signUpOne: '/API/LOW/Auth/Registration/One',
  signUpTwo: '/API/LOW/Auth/Registration/Two',
  loginOne: '/API/LOW/Auth/Login/One',
  loginTwo: '/API/LOW/Auth/Login/Two',
  // ================= Logout Candidate==================//
  logoutCandidate: '/API/LOW/Auth/Logout',
  // =================== auth Company =================== //
  signUpOneCorporate: '/API/COM/Auth/Registration/Form',
  signUpTwoCorporate: '/API/COM/Auth/Registration/Career-Interests',
  signUpThreeCorporate: '/API/COM/Auth/Registration/General-Info',

  // =================== Profile =================== //
  getMyProfile: '/API/LOW/My/Profile',
  editAbout_charactaristic: '/API/LOW/My/About',
  myProfileOverview: '/API/LOW/My/Profile-Overview',
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
  isFormDate = false,
}: {
  method: Method;
  path: string;
  data?: any;
  params?: any;
  pathParams?: string;
  header?: any;
  isFormDate?: boolean;
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
      'Content-Type': isFormDate ? 'multipart/form-data' : 'application/json',
      ...authHeder,
      ...header,
    },
  });
  return response;
};

export default Axios;
