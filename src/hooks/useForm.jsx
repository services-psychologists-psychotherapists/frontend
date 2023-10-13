import { useState, useCallback, useEffect } from 'react';

export const useForm = (isDropdown) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [inputValidStatus, setInputValidStatus] = useState({});
  const [selectedDropdownItems, setSelectedDropdownItems] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);
  const [isDropdownElem, setDropdownElem] = useState(false);

  useEffect(() => {
    if (isDropdown) {
      setDropdownElem(isDropdown);
    }
  }, [isDropdown]);

  const handleChange = (evt) => {
    const input = evt.target;
    const { name, value, type } = input;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });

    const getValuesForDropdown = () => {
      if (type === 'radio') {
        setSelectedDropdownItems({ ...selectedDropdownItems, [name]: value });
      } else if (selectedDropdownItems[name]) {
        if (!selectedDropdownItems[name].includes(value)) {
          setSelectedDropdownItems({
            ...selectedDropdownItems,
            [name]: [...selectedDropdownItems[name], value],
          });
        } else {
          setSelectedDropdownItems({
            ...selectedDropdownItems,
            [name]: selectedDropdownItems[name].filter((i) => i !== value),
          });
        }
      } else {
        setSelectedDropdownItems({ ...selectedDropdownItems, [name]: [value] });
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
      newSelectedDropdownItems = {}
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidForm(newIsValidForm);
      setInputValidStatus(newInputValidStatus);
      setSelectedDropdownItems(newSelectedDropdownItems);
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
  };
};
