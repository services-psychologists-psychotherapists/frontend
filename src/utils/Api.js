import axios from 'axios';

const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};

// TODO: подумать про передачу пути
export const authUser = async (data) => {
  const response = await axios.post('https://185.93.108.168/api/v1/auth/jwt/create/', data);

  return checkResponse(response);
};

export const createUser = async (data) => {
  const response = await axios.post('https://185.93.108.168/api/v1/auth/clients/', data);

  return checkResponse(response);
};
