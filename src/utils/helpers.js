import moment from 'moment';
import timezone from 'moment-timezone';
import 'moment/locale/ru';
import { FILE_UPLOAD_ERROR } from '../constants/constants';

moment.locale('ru');
export const today = moment();
export const formattedToday = today.format('DD.MM.YYYY');

const currentTimezone = timezone.tz.guess();

export const convertLocalToUtc = (localDateTime, format) => {
  const localMoment = timezone.tz(localDateTime, format, currentTimezone);
  const utcDateTime = localMoment.utc().format(format);

  return utcDateTime;
};

export const convertUtcToLocal = (utcDateTime, format) => {
  const utcMoment = timezone.utc(utcDateTime, format);
  const localDateTime = utcMoment.tz(currentTimezone).format(format);

  return localDateTime;
};

export const getMonthName = (date) => {
  const localTime = convertUtcToLocal(date.format('DD.MM.YYYY HH:mm'), 'DD.MM.YYYY HH:mm');

  return moment(localTime, 'DD.MM.YYYY HH:mm').format('D MMMM');
};

export const getSessionTime = (startDate, endDate) => {
  const startTime = convertUtcToLocal(startDate.format('DD.MM.YYYY HH:mm'), 'DD.MM.YYYY HH:mm');

  if (endDate) {
    const endTime = convertUtcToLocal(endDate.format('DD.MM.YYYY HH:mm'), 'DD.MM.YYYY HH:mm');

    return `${moment(startTime, 'DD.MM.YYYY HH:mm').format('HH:mm')} - ${
      moment(endTime, 'DD.MM.YYYY HH:mm').format('HH:mm')
    }`;
  }

  return startTime;
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

export const getFormattedLocalTimeArr = (arr) => {
  const formattedDates = {};

  arr.forEach((slot) => {
    const formattedDate = convertUtcToLocal(slot.datetime_from, 'DD.MM.YYYY HH:mm');
    const date = formattedDate.split(' ')[0];
    const time = formattedDate.split(' ')[1];

    if (!formattedDates[date]) {
      formattedDates[date] = {
        date,
        cells: [],
      };
    }

    formattedDates[date].cells.push({
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

export const showPopupWithValue = (setValue, title, text) => {
  setValue({
    data: {
      title,
      text,
    },
  });
};

export const showFileError = (setValue) => showPopupWithValue(setValue, FILE_UPLOAD_ERROR);

export const checkPasswords = (password1, password2, setPopupValue, data, request) => {
  if (password1 !== password2) {
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

export const checkFileSize = (file) => {
  const fileSizeInMB = file.size / (1024 * 1024);
  const maxFileSizeInMB = 3;

  if (fileSizeInMB <= maxFileSizeInMB) {
    return true;
  }

  return false;
};

export const checkFile = (
  curFile,
  curStep,
  forStep,
  uploadDoc,
  setPopup,
  deletePrev,
  resetFile,
) => {
  if (curFile.name && curStep === forStep) {
    const fileExtension = curFile.name.split('.').pop();

    if ((fileExtension === 'pdf' || fileExtension === 'jpg') && checkFileSize(curFile)) {
      uploadDoc(curFile, setPopup);
    } else {
      setPopup({
        data: {
          title: FILE_UPLOAD_ERROR,
        },
      });

      resetFile({});
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

export const checkResponse = async (res) => {
  if (res.status >= 200 && res.status < 300) {
    return res.data;
  }

  return Promise.reject(new Error(`Ошибка: ${res.status}`));
};
