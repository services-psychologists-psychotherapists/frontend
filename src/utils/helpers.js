import { MONTH_NAME } from '../constants/constants';

export const getMonthName = (date) => {
  const month = MONTH_NAME[date.getMonth() + 1];
  if (month.slice(-1) === 'т') {
    return `${month}а`;
  }
  return `${month.slice(0, month.length - 1)}я`;
};

export const getTime = (date) => {
  const hours = `0${date.getHours()}`.slice(-2);
  return `${hours}:00 - ${hours}:50`;
};

export const getAge = (date) => {
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const month = today.getMonth() - date.getMonth();
  if (month < 0 || (month === 0 && today.getDate() < date.getDate())) {
    age -= 1;
  }
  return age;
};
