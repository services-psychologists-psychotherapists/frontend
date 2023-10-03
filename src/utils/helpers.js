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

export const getSessionTime = (startDate, endDate) => {
  // prettier-ignore
  const startTime = `${getTime(startDate.hour())}:${getTime(startDate.minute())}`;
  const endTime = `${getTime(endDate.hour())}:${getTime(endDate.minute())}`;
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

export const getNumArray = (num, length) => {
  const numArray = [];
  for (let i = 0; i <= length; i += num) {
    numArray.push(`0${i}`.slice(-2));
  }
  return numArray;
};
