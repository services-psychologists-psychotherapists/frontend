import axios from 'axios';
import { API_URL } from '../constants/constants';

const checkResponse = async (res) => {
  // TODO: подумать про варианты
  if (res.status >= 200 && res.status < 300) {
    return res.data;
  }

  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export const createUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/clients/`, data);

  return checkResponse(response);
};

export const authUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/jwt/create/`, data);

  return checkResponse(response);
};

export const getUserInfo = async (token) => {
  const response = await axios.get(`${API_URL}/auth/clients/me`, {
    headers: { Authorization: `JWT ${token}` },
  });
  return checkResponse(response);
};

export const getRole = async (token) => {
  const response = await axios.get(`${API_URL}/auth/users/me/`, {
    headers: { Authorization: `JWT ${token}` },
  });
  return checkResponse(response);
};
