import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { checkResponse } from '../helpers';

export const createSession = async (id, token) => {
  const response = await axios.post(`${API_URL}/sessions/`, { slot: id }, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};

export const deleteSession = (id, token) => {
  const response = axios.delete(`${API_URL}/sessions/${id}/`, {
    headers: { Authorization: `JWT ${token}` },
  });

  if ((response.status >= 200 && response.status < 300) || response.status === undefined) {
    return response.data;
  }

  return Promise.reject(new Error(`Ошибка: ${response.status}`));
};
