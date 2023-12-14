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

export const getDurationOfYears = (num) => moment.duration(num, 'years').humanize();

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
    const formattedDate = convertUtcToLocal(slot.datetime_from, 'DD.MM.YYYY HH:mm');
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

export const getPasswordErr = (firstPass, secondPass) => firstPass !== secondPass;

// возможно убрать или переделать
export const showPopupWithValue = (setValue, value) => {
  setValue({
    data: {
      title: value,
    },
  });
};

export const checkPasswords = (password1, password2, setPopupValue, data, request) => {
  if (getPasswordErr(password1, password2)) {
    showPopupWithValue(setPopupValue, 'Пароли не совпадают');
  } else {
    request(data);
  }
};

export const getJwtFromLocalStorage = () => {
  const jwt = localStorage.getItem('jwt');

  if (jwt) {
    return `JWT ${jwt}`;
  }

  return null;
};

// ---------------------------ДЛЯ КОМПОНЕНТОВ ШАГОВ РЕГИСТРАЦИИ---------------------------

export const checkFile = (curFile, curStep, forStep, uploadDoc, setPopup, deletePrev) => {
  if (curFile.name && curStep === forStep) {
    const fileExtension = curFile.name.split('.').pop();

    if (fileExtension === 'pdf' || fileExtension === 'jpg') {
      uploadDoc(curFile);
    } else {
      setPopup({
        data: {
          title: 'Можно отправить только pdf и jpg файлы',
        },
      });

      deletePrev();
    }
  }
};

export const resetValue = (deleteElement, key, listId, setData) => {
  setData((prevData) => {
    const items = prevData[key] || [];
    const itemExists = items.some(
      (item, index) => index === listId && Object.prototype.hasOwnProperty.call(item, deleteElement)
    );

    if (itemExists) {
      return {
        ...prevData,
        [key]: items.map((item, index) => {
          if (index === listId) {
            const newItem = { ...item };

            delete newItem[deleteElement];

            return newItem;
          }
          return item;
        }),
      };
    }
    return prevData;
  });
};

export const handleDataUpdate = (key, value, setNewData, groupName, idForList) => {
  setNewData((prevData) => {
    const elems = prevData[groupName] || [];
    const elemsExists = elems.some((_, index) => index === idForList);

    if (elemsExists) {
      return {
        ...prevData,
        [groupName]: elems.map((items, index) => (index === idForList
          ? { ...items, [key]: value }
          : items))
      };
    }

    return {
      ...prevData,
      [groupName]: [
        ...elems,
        { [key]: value }
      ]
    };
  });
};

export const removeProperty = (prop, setNewData, obj) => {
  if (obj[prop]) {
    setNewData((prevData) => {
      const { [prop]: _, ...newData } = prevData;

      return newData;
    });
  }
};

export const updateData = (field, value, setNewData) => {
  setNewData((prevData) => ({
    ...prevData,
    [field]: value,
  }));
};

export const addEducationBlock = (
  title,
  speciality,
  years,
  docId,
  setBlock,
  setDocId,
  setPopup,
  disabled,
) => {
  if ((title && speciality && years && docId) || disabled) {
    setBlock((prevBlocks) => [...prevBlocks, prevBlocks.length]);
    setDocId('');
  } else {
    setPopup({
      data: {
        title: 'Заполните все поля и прикрепите документ',
      },
    });
  }
};

export const getDisabledField = (blockId, userData, forStep, curStep, blockType) => {
  if (userData.institutes) {
    if (blockId < userData[blockType].length) {
      return true;
    }
  }

  if (forStep !== curStep) {
    return true;
  }

  return false;
};

// ------------------------------------------------------------------------------
