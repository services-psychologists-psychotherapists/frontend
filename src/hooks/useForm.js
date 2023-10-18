import { useState, useCallback, useEffect } from 'react';

export const useForm = (isDropdown, customInputElement) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [inputValidStatus, setInputValidStatus] = useState({});
  const [selectedDropdownItems, setSelectedDropdownItems] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [isDropdownElem, setDropdownElem] = useState(false);
  const [dataForRequest, setDataForRequest] = useState({});
  const [customIputValue, setCustomIputValue] = useState('');
  const [customInputFieldset, setCustomInputFieldset] = useState('');

  const getYears = (arr) => {
    if (arr.length > 0) {
      const numArr = arr.reduce((acc, str) => acc.concat(str.match(/\d+/g)), []);

      if (numArr) {
        const nums = numArr.map((i) => +i);
        const mimax = [Math.min(...nums), Math.max(...nums)];

        return [nums, mimax];
      }
    }

    return null;
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

  // TODO: Убрать на страницу

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
          return {
            gender: 'male',
          };
        }
        if (value === 'Женский') {
          return {
            gender: 'female',
          };
        }
        if (value === 'Не важно') {
          return {
            gender: null,
          };
        }
      }

      return null;
    };

    const { gender } = selectedDropdownItems;

    if (gender) {
      setDataForRequest({
        ...dataForRequest,
        ...getGender(selectedDropdownItems.gender),
      });
    }
  }, [selectedDropdownItems.gender]);

  useEffect(() => {
    const { themes } = selectedDropdownItems;

    if (themes) {
      setDataForRequest({
        ...dataForRequest,
        themes,
      });
    }
  }, [selectedDropdownItems.themes]);

  useEffect(() => {
    const { approaches } = selectedDropdownItems;

    if (approaches) {
      const filteredApproaches = [...selectedDropdownItems.approaches].filter(
        (i) => i !== ''
      );

      setDataForRequest({
        ...dataForRequest,
        approaches: filteredApproaches,
      });
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

  useEffect(() => {
    if (isDropdown) {
      setDropdownElem(isDropdown);
    }
  }, [isDropdown]);

  const handleChange = (evt) => {
    const input = evt.target;
    const {
      name, value, type
    } = input;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    const fieldsetName = input.closest('fieldset').id;

    if (name === 'custom') {
      setCustomInputFieldset(fieldsetName);
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
            // TODO: остается пустая строка в массиве
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
    };

    if (isDropdownElem) {
      getValuesForDropdown();
    }

    setIsValid(input.checkValidity());
    setInputValidStatus({ ...inputValidStatus, [name]: input.checkValidity() });
    setIsValidForm(evt.target.closest('form').checkValidity());
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
    resetCustomValue,
    setCustomValue,
    dataForRequest,
  };
};
