import { MONTH_NAME } from '../constants/constants';

export const getMonthName = (date) => {
  const month = MONTH_NAME[date.month()];
  if (month.slice(-1) === 'т') {
    return `${month}а`;
  }
  return `${date.date()} ${month.slice(0, month.length - 1)}я`;
};

export const getTime = (time) => `0${time}`.slice(-2);

export const getSessionTime = (startDate, endDate) => {
  const startTime = `${getTime(startDate.hour())}:${getTime(startDate.minute())}`;
  if (endDate) {
    const endTime = `${getTime(endDate.hour())}:${getTime(endDate.minute())}`;
    return `${startTime} - ${endTime}`;
  }
  return startTime;
};

export const getAge = (date) => {
  let age = '';
  const lastSymb = date % 10;

  if (lastSymb === 0 || (date > 10 && date < 20) || (lastSymb > 4 && lastSymb < 10)) {
    age = 'лет';
  } else if (lastSymb === 1) {
    age = 'год';
  } else {
    age = 'года';
  }

  return `${date} ${age}`;
};

export const getNumArray = (num, length) => {
  const numArray = [];
  for (let i = 0; i <= length; i += num) {
    numArray.push(`0${i}`.slice(-2));
  }
  return numArray;
};
