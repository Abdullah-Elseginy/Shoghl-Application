import axios, {Method} from 'axios';
import {store} from '../redux/store';

const BASE_URL = 'https://shoghl.code-faster.giize.com/API/';

export type APIsTypes = {
  //   login: string;
  allCountries: string;
  allCities: string;
  signUpOne: string;
  signUpTwo: string;
  loginOne: string;
  loginTwo: string;
};

export const APIS: APIsTypes = {
  // =================== Helpers =================== //
  allCountries: 'Helpers/Countries/All',
  allCities: 'Helpers/Countries',
  // =================== auth =================== //
  signUpOne: 'LOW/Auth/Registration/One',
  signUpTwo: 'LOW/Auth/Registration/Two',
  loginOne: 'LOW/Auth/Login/One',
  loginTwo: 'LOW/Auth/Login/Two',
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
  path: keyof APIsTypes;
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
