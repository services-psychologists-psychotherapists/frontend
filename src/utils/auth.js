import axios from 'axios';
import { API_URL } from '../constants/constants';
import { getJwtFromLocalStorage } from './helpers';

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

// export const verifiJwt = async (token) => {
//   const response = await axios.post(`${API_URL}/auth/jwt/verify/`, {
//     token,
//   });

//   return checkResponse(response);
// };

export const refreshToken = async (token) => {
  const response = await axios.post(`${API_URL}/auth/jwt/refresh/`, {
    refresh: token,
  });

  return checkResponse(response);
};

// TODO: разделить
export const getPsychologists = async (params) => {
  let themesForFilter = '';
  let approachesForFilter = '';
  const paramsCopy = params;

  if (params.themes && params.themes.length > 0) {
    params.themes.forEach((theme) => {
      themesForFilter += `?themes=${encodeURIComponent(theme)}&`;
    });
  }

  if (params.approaches && params.approaches.length > 0) {
    params.approaches.forEach((approach) => {
      approachesForFilter += `?approaches=${encodeURIComponent(approach)}&`;
    });
  }

  delete paramsCopy.themes;
  delete paramsCopy.approaches;

  const response = await axios.get(`${API_URL}/psychologists/${themesForFilter}${approachesForFilter}`, {
    params: paramsCopy,
  });

  return checkResponse(response);
};

export const getPsychologist = async (id) => {
  const response = await axios.get(`${API_URL}/psychologists/${id}/`);

  return checkResponse(response);
};

export const setNewPasswords = async (data) => {
  const response = await axios.post(`${API_URL}/auth/users/set_password/`, data, {
    headers: {
      // TODO: получать токен в хелперс и передавать его везде или через контекст?
      Authorization: getJwtFromLocalStorage(),
    }
  });

  return checkResponse(response);
};

export const uploadFile = async (file) => {
  const formData = new FormData();
  formData.append('path', file);

  const response = await axios.post(`${API_URL}/file/upload/`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return checkResponse(response);
};

export const createPsychologist = async (data) => {
  const dataForRequest = { ...data };

  dataForRequest.themes = dataForRequest.themes.map((theme) => ({ title: theme }));
  dataForRequest.approaches = dataForRequest.approaches.map((approach) => ({ title: approach }));

  const response = await axios.post(`${API_URL}/auth/psychologists/`, dataForRequest);

  return checkResponse(response);
};