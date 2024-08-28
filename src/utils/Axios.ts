import axios, { Method } from 'axios';
import Toast from 'react-native-toast-message';
import { store } from 'redux/store';

const BASE_URL = '';

export type APIsTypes = {
  //   login: string;
};

export const APIS: APIsTypes = {
  // =================== auth =================== //
    // login: 'auth/login',
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
    Toast.show({
      type: 'error',
      text1: err,
    });
    return Promise.reject(error);
  },
);

const Axios = async ({
  method,
  path,
  data,
  params,
  header,
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
    url: APIS[path] + pathParams,
    data: data,
    params: params,
    headers: {
      'Content-Type': isFormDate ? 'multipart/form-data' : 'application/json',
      ...authHeder,
      ...header,
    }
  });
  return response;
};

export default Axios;
