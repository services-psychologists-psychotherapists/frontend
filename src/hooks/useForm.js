import { useState, useCallback, useEffect } from 'react';

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
  const [fileForRequest, setfileForRequest] = useState({});
  // переделать хук

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
    const {
      name, value, type
    } = input;

    if (type !== 'file') {
      setValues({ ...values, [name]: value });
    }

    setErrors({ ...errors, [name]: input.validationMessage });

    const fieldsetName = input.closest('fieldset').id;

    if (name === 'custom') {
      setCustomInputFieldset(fieldsetName);
    }

    if (type === 'file') {
      const file = e.target.files;

      if (file.length > 0) {
        const currentFile = e.target.files[0];

        if (currentFile) {
          setfileForRequest(currentFile);
        }
      }
    }

    // TODO: возможно переделать на отдельные условия
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

    setIsValid(input.checkValidity());
    setInputValidStatus({ ...inputValidStatus, [name]: input.checkValidity() });
    setIsValidForm(e.target.closest('form').checkValidity());
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
    setDataForRequest,
    getYears,
    fileForRequest,
  };
};
