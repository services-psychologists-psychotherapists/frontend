import { useState, useCallback } from 'react';

export const useForm = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [inputValidStatus, setInputValidStatus] = useState({});
  const [isValid, setIsValid] = useState(true);
  const [isValidForm, setIsValidForm] = useState(false);

  const handleChange = (evt) => {
    const input = evt.target;
    const { name } = input;
    const { value } = input;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
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
      newInputValidStatus = {}
    ) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setIsValidForm(newIsValidForm);
      setInputValidStatus(newInputValidStatus);
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
  };
};
