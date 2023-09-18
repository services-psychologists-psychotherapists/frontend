import moment from 'moment';
import { MONTH_NAME } from '../constants/constants';

const today = moment();

export const getMonthName = (date) => {
  const month = MONTH_NAME[date.month()];
  if (month.slice(-1) === 'т') {
    return `${month}а`;
  }
  return `${month.slice(0, month.length - 1)}я`;
};

export const getTime = (time) => `0${time}`.slice(-2);

export const getSessionTime = (date) => {
  const startTime = `${getTime(date.hour())}:${getTime(date.minute())}`;
  const end = date.clone();
  end.add(50, 'm');
  const endTime = `${getTime(end.hour())}:${getTime(end.minute())}`;
  // const hours = `0${date.hour()}`.slice(-2);
  return `${startTime} - ${endTime}`;
};

export const getAge = (date) => {
  const years = today.diff(date, 'years');
  let age = '';
  const lastSymb = years % 10;

  // prettier-ignore
  if (lastSymb === 0 || (years > 10 && years < 20) || (lastSymb > 4 && lastSymb < 10)) {
    age = 'лет';
  } else if (lastSymb === 1) {
    age = 'год';
  } else {
    age = 'года';
  }

  return `${years} ${age}`;
};

export const getNextAppointment = (sessions) => {
  let nextAppointment = {};

  if (sessions.length > 0) {
    // eslint-disable-next-line
    nextAppointment = sessions[0];
    for (let i = 0; i < sessions.length; i += 1) {
      // prettier-ignore
      if (sessions[i].time.isBefore(nextAppointment.time)) {
        nextAppointment = sessions[i];
      }
    }
  }

  return nextAppointment;
};
