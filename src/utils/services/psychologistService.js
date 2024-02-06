import axios from 'axios';
import { API_URL } from '../../constants/constants';
import { checkResponse } from '../helpers';

export const getCurrentPsychologist = async (id) => {
  const response = await axios.get(`${API_URL}/psychologists/${id}`);

  return checkResponse(response);
};

export const createSession = async (data, token) => {
  const response = await axios.post(`${API_URL}/auth/psychologists/slots/`, data, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};

export const getSlots = async (date, token) => {
  const response = await axios.get(`${API_URL}/auth/psychologists/slots/?since=${date}`, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};

export const deleteSlot = async (id, token) => {
  const response = await axios.delete(`${API_URL}/auth/psychologists/slots/${id}/`, {
    headers: { Authorization: `JWT ${token}` },
  });

  return checkResponse(response);
};
