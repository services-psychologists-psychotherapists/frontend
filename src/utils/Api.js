import axios from 'axios';
// TODO: перенести в const
const API_URL = 'https://sharewithme.acceleratorpracticum.ru/api/v1';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
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
