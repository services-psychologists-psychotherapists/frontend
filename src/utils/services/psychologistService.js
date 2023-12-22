import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { checkResponse } from '../helpers';

export const getCurrentPsychologist = async (id) => {
  const response = await axios.get(`${API_URL}/psychologists/${id}`);

  return checkResponse(response);
};
