import { useState, useCallback, useEffect } from 'react';
import {
  EMAIL_REGEX, EMAIL_ERROR_VALIDATION, PHONE_REGEX,
  PASSWORD_ERROR_VALIDATION, PASSWORD_REGEX,
  PHONE_ERROR_VALIDATION, DATE_REGEX,
  DATE_ERROR_VALIDATION, INSTITUTES_GRADUATION_YEAR_REGEX,
  INSTITUTES_GRADUATION_YEAR_TEST_REGEX, COURSES_GRADUATION_YEAR_REGEX,
  INSTITUTES_GRADUATION_YEAR_ERROR, COURSES_GRADUATION_YEAR_ERROR,
  COURSES_GRADUATION_YEAR_TEST_REGEX, COURSES_TITLE_ERROR,
  COURSES_SPECIALITY_ERROR, PRICE_ERROR, EXPERIENCE_ERROR,
  PRICE_REGEX, EXPERIENCE_REGEX,
} from '../constants/constants';

// TODO: переделать
export const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [inputValidStatus, setInputValidStatus] = useState({});
  const [selectedDropdownItems, setSelectedDropdownItems] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [dataForRequest, setDataForRequest] = useState({});
  const [customIputValue, setCustomIputValue] = useState('');
  const [customInputFieldset, setCustomInputFieldset] = useState('');
  const [fileForRequest, setFileForRequest] = useState({});
  const [isChanged, setIsChanged] = useState(false);

  const getYears = (arr) => {
    if (arr.length > 0) {
      const numArr = arr.reduce((acc, str) => acc.concat(str.match(/\d+/g)), []);

      if (numArr && numArr[0]) {
        const nums = numArr.map((i) => +i);
        const mimax = [Math.min(...nums), Math.max(...nums)];

        return [nums, mimax];
      }
    }

    return false;
  };

  const getValue = (arr, key) => {
    if (arr[0].length === 1) {
      return { [`${key}_min`]: arr[0][0] };
    }

    return {
      [`${key}_min`]: arr[1][0],
      [`${key}_max`]: arr[1][1]
    };
  };

  const getNums = (key) => {
    if (selectedDropdownItems[key]
    && (!Array.isArray(selectedDropdownItems[key]))) {
      return getYears([selectedDropdownItems[key]]);
    }
    if (selectedDropdownItems[key]
      && Array.isArray(selectedDropdownItems[key])) {
      return getYears(selectedDropdownItems[key]);
    }

    return null;
  };

  useEffect(() => {
    const age = getNums('age');

    if (age) {
      delete dataForRequest.age_min;
      delete dataForRequest.age_max;

      setDataForRequest({
        ...dataForRequest,
        ...getValue(age, 'age'),
      });
    }
  }, [selectedDropdownItems.age]);

  useEffect(() => {
    const experience = getNums('experience');

    if (experience) {
      delete dataForRequest.experience_min;
      delete dataForRequest.experience_max;

      setDataForRequest({
        ...dataForRequest,
        ...getValue(experience, 'experience'),
      });
    }
  }, [selectedDropdownItems.experience]);

  useEffect(() => {
    const getGender = (value) => {
      if (value) {
        if (value === 'Мужской') {
          return 'male';
        }
        if (value === 'Женский') {
          return 'female';
        }
        if (value === 'Не важно') {
          return null;
        }
      }

      return null;
    };

    const { gender } = selectedDropdownItems;

    if (gender) {
      const currentGender = getGender(selectedDropdownItems.gender);

      if (currentGender !== null) {
        document.getElementsByName('gender')[0].value = currentGender;

        setDataForRequest({
          ...dataForRequest,
          gender: currentGender,
        });
      } else {
        const newData = { ...dataForRequest };

        delete newData.gender;
        setDataForRequest(newData);
      }
    }
  }, [selectedDropdownItems.gender]);

  useEffect(() => {
    const { themes } = selectedDropdownItems;

    if (themes) {
      if (themes.length) {
        setDataForRequest({
          ...dataForRequest,
          themes,
        });
      } else {
        const newData = { ...dataForRequest };

        delete newData.themes;

        setDataForRequest(newData);
      }
    }
  }, [selectedDropdownItems.themes]);

  useEffect(() => {
    const customValue = values.custom;

    if (!customValue) {
      if ('approaches' in selectedDropdownItems) {
        const filteredApproaches = [...selectedDropdownItems.approaches].filter(
          (i) => i !== ''
        );

        setSelectedDropdownItems({
          ...selectedDropdownItems,
          approaches: filteredApproaches,
        });
      }
    }
  }, [values.custom]);

  useEffect(() => {
    const { approaches } = selectedDropdownItems;

    if (approaches) {
      if (approaches.length) {
        setDataForRequest({
          ...dataForRequest,
          approaches,
        });
      } else {
        const newData = { ...dataForRequest };

        delete newData.approaches;

        setDataForRequest(newData);
      }
    }
  }, [selectedDropdownItems.approaches]);

  const resetCustomValue = () => {
    if (values.custom) {
      setSelectedDropdownItems({
        ...selectedDropdownItems,
        [customInputFieldset]: selectedDropdownItems[customInputFieldset].filter(
          (i) => i !== values.custom
        )
      });
    }
  };

  const setCustomValue = () => {
    if (values.custom && !selectedDropdownItems[customInputFieldset].includes(values.custom)) {
      setSelectedDropdownItems({
        ...selectedDropdownItems,
        [customInputFieldset]: [...selectedDropdownItems[customInputFieldset], values.custom],
      });
    }
  };

  // TODO: полностью перебрать
  const handleChange = (e, isDropdownElem, customInputElement) => {
    const input = e.target;
    const { name, value, type } = input;
    setIsChanged(true);

    // ------------------------------Заполнение данных---------------------------------

    if (type !== 'file') {
      let newValue = value;

      if (name === 'phone_number' && !PHONE_REGEX.test(value)) {
        newValue = values[name];
      } else if (/^institutes_graduation_year_\d+$/.test(name)
      && !INSTITUTES_GRADUATION_YEAR_REGEX.test(value)) {
        newValue = values[name];
      } else if (/^courses_graduation_year_\d+$/.test(name)
      && !COURSES_GRADUATION_YEAR_REGEX.test(value)) {
        newValue = values[name];
      } else if (name === 'price' && !PRICE_REGEX.test(value)) {
        newValue = values[name];
      } else if (name === 'experience' && !EXPERIENCE_REGEX.test(value)) {
        newValue = values[name];
      }

      setValues({ ...values, [name]: newValue });
    }

    //  ------------------------------Валидация---------------------------------

    const VALIDATION_RULES = {
      email: { regex: EMAIL_REGEX, error: EMAIL_ERROR_VALIDATION },
      password: { regex: PASSWORD_REGEX, error: PASSWORD_ERROR_VALIDATION },
      password_2: { regex: PASSWORD_REGEX, error: PASSWORD_ERROR_VALIDATION },
      old_password: { regex: PASSWORD_REGEX, error: PASSWORD_ERROR_VALIDATION },
      name: { regex: /.+/, error: input.validationMessage },
      first_name: { regex: /.+/, error: input.validationMessage },
      last_name: { regex: /.+/, error: input.validationMessage },
      phone_number: { regex: PHONE_REGEX, error: PHONE_ERROR_VALIDATION },
      birthday: { regex: DATE_REGEX, error: DATE_ERROR_VALIDATION },
      gender: { regex: /.+/, error: input.validationMessage },
      institutes_graduation_year: {
        regex: INSTITUTES_GRADUATION_YEAR_TEST_REGEX,
        error: INSTITUTES_GRADUATION_YEAR_ERROR,
      },
      courses_graduation_year: {
        regex: COURSES_GRADUATION_YEAR_TEST_REGEX,
        error: COURSES_GRADUATION_YEAR_ERROR,
      },
    };

    const setValidationError = (inputName, error) => {
      setErrors({ ...errors, [inputName]: error });
      setInputValidStatus({ ...inputValidStatus, [inputName]: false });
      setIsValidForm(false);
    };

    let validationRule = VALIDATION_RULES[name];

    switch (true) {
      case /^institutes_graduation_year_\d+$/.test(name):
        validationRule = VALIDATION_RULES.institutes_graduation_year;
        break;
      case /^courses_graduation_year_\d+$/.test(name):
        if (value.length === 0) {
          setValidationError(name, COURSES_GRADUATION_YEAR_ERROR);
          return;
        }
        validationRule = VALIDATION_RULES.courses_graduation_year;
        break;
      case name === 'phone_number' && value.length === 0:
        setValidationError(name, PHONE_ERROR_VALIDATION);
        return;
      case /^courses_title_\d+$/.test(name) && value.length === 0:
        setValidationError(name, COURSES_TITLE_ERROR);
        return;
      case /^courses_speciality_\d+$/.test(name) && value.length === 0:
        setValidationError(name, COURSES_SPECIALITY_ERROR);
        return;
      case name === 'price' && value.length === 0:
        setValidationError(name, PRICE_ERROR);
        return;
      case name === 'experience' && value.length === 0:
        setValidationError(name, EXPERIENCE_ERROR);
        return;
      default:
        break;
    }

    if (validationRule) {
      const { regex, error } = validationRule;
      const isValidEl = regex.test(value);

      if (!isValidEl) {
        setIsValidForm(false);
      }

      setErrors({ ...errors, [name]: isValidEl ? '' : error });
      setInputValidStatus({ ...inputValidStatus, [name]: isValidEl });
    } else {
      setErrors({ ...errors, [name]: input.validationMessage });
      setInputValidStatus({ ...inputValidStatus, [name]: input.checkValidity() });
    }

    // ------------------------------------------------------------------------------

    const fieldsetName = input.closest('fieldset').id;

    if (name === 'custom') {
      setCustomInputFieldset(fieldsetName);
    }

    if (type === 'file') {
      const file = e.target.files;

      if (file.length > 0) {
        const currentFile = e.target.files[0];

        if (currentFile) {
          setFileForRequest(currentFile);
        } else {
          setFileForRequest({});
        }
      }
    }

    const getValuesForDropdown = () => {
      if (customInputElement && (customInputElement !== value)) {
        if (type === 'radio') {
          setSelectedDropdownItems({ ...selectedDropdownItems, [fieldsetName]: value });
        } else if (name === 'custom') {
          if (selectedDropdownItems[fieldsetName]) {
            if (customIputValue !== value) {
              setSelectedDropdownItems({
                ...selectedDropdownItems,
                [fieldsetName]: [...selectedDropdownItems[fieldsetName], value].filter(
                  (i) => i !== customIputValue
                ),
              });
            }
            setCustomIputValue(value);
          } else {
            setSelectedDropdownItems({ ...selectedDropdownItems, [fieldsetName]: [value] });
            setCustomIputValue(value);
          }
        } else if (selectedDropdownItems[fieldsetName]) {
          if (!selectedDropdownItems[fieldsetName].includes(value)) {
            setSelectedDropdownItems({
              ...selectedDropdownItems,
              [fieldsetName]: [...selectedDropdownItems[fieldsetName], value],
            });
          } else {
            setSelectedDropdownItems({
              ...selectedDropdownItems,
              [fieldsetName]: selectedDropdownItems[fieldsetName].filter((i) => i !== value),
            });
          }
        } else {
          setSelectedDropdownItems({ ...selectedDropdownItems, [fieldsetName]: [value] });
        }
      }

      if (!customInputElement) {
        if (type === 'radio') {
          setSelectedDropdownItems({ ...selectedDropdownItems, [fieldsetName]: value });
        } else if (selectedDropdownItems[fieldsetName]) {
          if (!selectedDropdownItems[fieldsetName].includes(value)) {
            setSelectedDropdownItems({
              ...selectedDropdownItems,
              [fieldsetName]: [...selectedDropdownItems[fieldsetName], value],
            });
          } else {
            setSelectedDropdownItems({
              ...selectedDropdownItems,
              [fieldsetName]: selectedDropdownItems[fieldsetName].filter((i) => i !== value),
            });
          }
        } else {
          setSelectedDropdownItems({ ...selectedDropdownItems, [fieldsetName]: [value] });
        }
      }
    };

    if (isDropdownElem) {
      getValuesForDropdown();
    }

    setTimeout(() => {
      setIsValidForm(e.target.closest('form').checkValidity());
    }, 1);
  };

  const resetForm = useCallback(
    (
      newValues = {},
      newErrors = {},
      newIsValid = false,
      newIsValidForm = false,
      newInputValidStatus = {},
      newSelectedDropdownItems = {},
      newDataForRequest = {},
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidForm(newIsValidForm);
      setInputValidStatus(newInputValidStatus);
      setSelectedDropdownItems(newSelectedDropdownItems);
      setDataForRequest(newDataForRequest);
    },
    [setValues, setErrors, setIsValid]
  );

  const getInvalidInput = (inputValue) => {
    if (inputValue === false) {
      return false;
    }
    return true;
  };

  return {
    values,
    errors,
    isValid,
    handleChange,
    setValues,
    setIsValid,
    setErrors,
    resetForm,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
    selectedDropdownItems,
    setSelectedDropdownItems,
    resetCustomValue,
    setCustomValue,
    dataForRequest,
    setDataForRequest,
    getYears,
    fileForRequest,
    setFileForRequest,
    isChanged,
    setIsChanged,
  };
};
