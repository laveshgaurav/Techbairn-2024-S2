import { T_SignInBody } from '../@types/Types';
import axiosInstance from './axios';

export const getInventory = async () => {
  const response = await axiosInstance.get('/inventory');
  return response;
};

export const postLogin = async (body: T_SignInBody) => {
  const response = await axiosInstance.post('/user/sign-in', body);
  return response;
};
