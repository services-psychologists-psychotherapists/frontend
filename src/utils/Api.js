import axios from 'axios';
// TODO: перенести в const
const API_URL = 'https://sharewithme.acceleratorpracticum.ru/api/v1';
const getJwtFromLocalStorage = () => `JWT ${localStorage.getItem('jwt')}`;

const checkResponse = async (res) => {
  // TODO: подумать про варианты
  if (res.status >= 200 && res.status < 300) {
    return res.data;
  }

  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export const authUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/jwt/create/`, data);

  return checkResponse(response);
};

export const createUser = async (data) => {
  const response = await axios.post(`${API_URL}/auth/clients/`, data);

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
      Authorization: getJwtFromLocalStorage()
    }
  });

  return checkResponse(response);
};
