import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { checkResponse } from '../helpers';

export const createSession = async (id, token) => {
  const response = await axios.post(`${API_URL}/sessions/`, { slot: id }, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};
