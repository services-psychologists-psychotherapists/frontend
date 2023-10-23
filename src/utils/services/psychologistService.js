import axios from 'axios';
import { API_URL } from '../../constants/constants';

const checkResponse = async (res) => {
  // TODO: подумать про варианты
  if (res.status >= 200 && res.status < 300) {
    return res.data;
  }

  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

export const getCurrentPsychologist = async (id) => {
  const response = await axios.get(`${API_URL}/psychologists/${id}`);

  return checkResponse(response);
};
