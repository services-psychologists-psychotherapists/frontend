import moment from 'moment';
import timezone from 'moment-timezone';
import { MONTH_NAME } from '../constants/constants';
import 'moment/locale/ru';

moment.locale('ru');
export const today = moment();
export const formattedToday = today.format('DD.MM.YYYY');

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

export const getDurationOfYears = (num) => moment.duration(num, 'years').humanize();

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

export const binarySearchDateIndex = (slots, date) => {
  let start = 0;
  let end = slots.length - 1;
  const formattedDate = moment(date, 'DD.MM.YYYY');

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const midDate = moment(slots[mid].date, 'DD.MM.YYYY');

    if (midDate.isSame(formattedDate)) {
      return mid;
    }

    if (midDate.isBefore(formattedDate)) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
};

const currentTimezone = timezone.tz.guess();

export const convertUtcToLocal = (utcDateTime, format) => {
  const utcMoment = timezone.utc(utcDateTime, format);
  const localDateTime = utcMoment.tz(currentTimezone).format(format);

  return localDateTime;
};

// TODO: нам нужно такое преобразование?
export const convertLocalToUtc = (localDateTime, format) => {
  const localMoment = timezone.tz(localDateTime, format, currentTimezone);
  const utcDateTime = localMoment.utc().format(format);

  return utcDateTime;
};

export const getFormattedLocalTimeArr = (arr) => {
  const formattedDates = {};

  arr.forEach((slot) => {
    const formattedDate = convertUtcToLocal(slot.time, 'DD.MM.YYYY HH:mm');
    const date = formattedDate.split(' ')[0];
    const time = formattedDate.split(' ')[1];

    if (!formattedDates[date]) {
      formattedDates[date] = {
        date,
        times: [],
      };
    }

    formattedDates[date].times.push({
      id: slot.id,
      time,
    });
  });

  const sortedDates = Object.values(formattedDates).sort((a, b) => {
    const dateA = moment(a.date, 'DD.MM.YYYY');
    const dateB = moment(b.date, 'DD.MM.YYYY');

    return dateA - dateB;
  });

  return sortedDates;
};

export const getPriceWithSpace = (price) => price.toLocaleString();
