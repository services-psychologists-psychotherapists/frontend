import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { getJwtFromLocalStorage, checkResponse } from '../helpers';

export const createUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/clients/`, data);

  return checkResponse(response);
};

export const authUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/jwt/create/`, data);

  return checkResponse(response);
};

export const getUserInfo = async (token, role) => {
  const response = await axios.get(`${API_URL}/auth/${role}s/me`, {
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

export const changePsychoData = async (data, token) => {
  const dataForRequest = { ...data };

  if (dataForRequest.themes) {
    dataForRequest.themes = dataForRequest.themes.map((theme) => ({ title: theme }));
  }

  if (dataForRequest.approaches) {
    dataForRequest.approaches = dataForRequest.approaches.map((approach) => ({ title: approach }));
  }

  if (dataForRequest.courses) {
    if (Object.keys(dataForRequest.courses).length === 0) {
      delete dataForRequest.courses;
    }
  }

  if (dataForRequest.institutes) {
    if (Object.keys(dataForRequest.institutes).length === 0) {
      delete dataForRequest.institutes;
    }
  }

  if (Object.keys(dataForRequest).length === 0) throw new Error('Нет данных для изменения');

  const response = await axios.patch(`${API_URL}/auth/psychologists/me/`, dataForRequest, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};

export const changeClientData = async (data, token) => {
  const response = await axios.patch(`${API_URL}/auth/clients/me/`, data, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};

export const refreshToken = async (token) => {
  const response = await axios.post(`${API_URL}/auth/jwt/refresh/`, {
    refresh: token,
  });

  return checkResponse(response);
};

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
      Authorization: getJwtFromLocalStorage(),
    }
  });

  return checkResponse(response);
};

export const createPassword = async (data) => {
  const response = await axios.post(`${API_URL}/auth/users/reset_password_confirm/`, data);

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

  if (dataForRequest.themes) {
    dataForRequest.themes = dataForRequest.themes.map((theme) => ({ title: theme }));
  }

  if (dataForRequest.approaches) {
    dataForRequest.approaches = dataForRequest.approaches.map((approach) => ({ title: approach }));
  }

  if (dataForRequest.courses && Object.keys(dataForRequest.courses[0]).length === 0) {
    delete dataForRequest.courses;
  }

  const response = await axios.post(`${API_URL}/auth/psychologists/`, dataForRequest);

  return checkResponse(response);
};

export const resetPasswordWithEmail = async (email) => {
  const response = await axios.post(`${API_URL}/auth/users/reset_password/`, { email });

  return checkResponse(response);
};

export const deleteSession = async (id, token) => {
  const response = await axios.delete(`${API_URL}/sessions/${id}/`, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};
