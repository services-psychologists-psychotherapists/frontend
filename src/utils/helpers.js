import { MONTH_NAME } from '../constants/constants';

export const getMonthName = (date) => {
  const month = MONTH_NAME[date.getMonth()];
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

export const getNextAppointment = (sessions) => {
  let nextAppointment = {};
  const today = new Date();

  if (sessions.length > 0) {
    for (let i = 0; i <= sessions.length - 1; i += 1) {
      if (sessions[i].date > today) {
        nextAppointment = sessions[i];
        // prettier-ignore
        if (sessions[i].date < today && sessions[i].date < nextAppointment.date) {
          nextAppointment = sessions[i];
        }
      }
    }
  }
  return nextAppointment;
};
