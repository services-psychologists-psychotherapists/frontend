import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { parsePhoneNumberFromString } from 'libphonenumber-js';
import './PsychologistRegistration.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import { PSYCHO_REGISTRATION_TEXT } from '../../constants/constants';
import Button from '../../components/generic/Button/Button';
import FirstStep from './Steps/FirstStep/FirstStep';
import SecondStep from './Steps/SecondStep/SecondStep';
import ThirdStep from './Steps/ThirdStep/ThirdStep';
import FourthStep from './Steps/FourthStep/FourthStep';
import { useForm } from '../../hooks/useForm';
import { uploadFile, createPsychologist } from '../../utils/auth';
import { usePopup } from '../../hooks/usePopup';

export default function PsychologistRegistration() {
  // TODO: добавить анимацию переходов
  // TODO: разобраться с этой катастрофой
  const {
    values, handleChange, errors,
    selectedDropdownItems,
    dataForRequest,
    isValidForm,
    inputValidStatus,
    getInvalidInput,
    setCustomValue,
    resetCustomValue,
    setDataForRequest,
    getYears,
    fileForRequest,
  } = useForm();

  const { setValue } = usePopup();

  const [docIdForRequest, setDocIdForRequest] = useState('');

  const [listId, setListId] = useState(0);

  const [step, setStep] = useState(1);

  const createPsycho = async (data) => {
    try {
      const psycho = await createPsychologist(data);

      setValue({
        data: {
          title: 'Вы успешно зарегистрировались',
        },
      });
      // TODO: убрать
      console.log(psycho);
    } catch (err) {
      console.log(err);

      setValue({
        data: {
          title: 'При регистрации произошла ошибка',
        },
      });
    }
  };

  const switchNextStep = () => {
    if (step !== 4) {
      setStep(step + 1);
    } else {
      createPsycho(dataForRequest);
    }
  };

  const switchPrevStep = () => {
    setStep(step - 1);
  };

  const getClosestList = (e, setListValue, onChange) => {
    setListValue(+e.target.closest('ul').id);

    if (onChange) {
      onChange(e);
    }
  };

  const uploadDocuments = async (document) => {
    try {
      const docData = await uploadFile(document);

      setDocIdForRequest(docData.id);
    } catch (err) {
      console.log(err);

      setValue({
        data: {
          title: 'При загрузке документа произошла ошибка',
        },
      });
    }

    return false;
  };

  const resetValue = (deleteElement, key) => {
    setDataForRequest((prevData) => {
      const institutes = prevData[key] || [];
      const instituteExists = institutes.some((_, index) => index === listId);

      if (instituteExists) {
        return {
          ...prevData,
          [key]: institutes.map((institute, index) => {
            if (index === listId) {
              const newInstitute = { ...institute };

              delete newInstitute[deleteElement];

              return newInstitute;
            }
            return institute;
          })
        };
      }
      return prevData;
    });
  };

  useEffect(() => {
    const sessionPrice = values.price;

    if (sessionPrice) {
      if (!sessionPrice.isNaN) {
        setDataForRequest({
          ...dataForRequest,
          price: sessionPrice,
        });
      } else {
        delete dataForRequest.price;
      }
    } else {
      delete dataForRequest.price;
    }
  }, [values.price]);

  useEffect(() => {
    const sessionExperience = values.experience;

    if (sessionExperience) {
      if (!sessionExperience.isNaN) {
        setDataForRequest({
          ...dataForRequest,
          experience: sessionExperience,
        });
      } else {
        delete dataForRequest.experience;
      }
    } else {
      delete dataForRequest.experience;
    }
  }, [values.experience]);

  useEffect(() => {
    const firstName = values.first_name;

    if (firstName) {
      setDataForRequest({
        ...dataForRequest,
        first_name: firstName,
      });
    } else {
      delete dataForRequest.first_name;
    }
  }, [values.first_name]);

  useEffect(() => {
    const { about } = values;

    if (about) {
      setDataForRequest({
        ...dataForRequest,
        about,
      });
    } else {
      delete dataForRequest.about;
    }
  }, [values.about]);

  useEffect(() => {
    const lastName = values.last_name;

    if (lastName) {
      setDataForRequest({
        ...dataForRequest,
        last_name: lastName,
      });
    } else {
      delete dataForRequest.last_name;
    }
  }, [values.last_name]);

  useEffect(() => {
    const userEmail = values.email;
    const isEmail = /@/.test(userEmail);

    if (userEmail && isEmail) {
      setDataForRequest({
        ...dataForRequest,
        email: userEmail,
      });
    } else {
      delete dataForRequest.email;
    }
  }, [values.email]);

  useEffect(() => {
    const phoneString = values.phone_number;

    if (phoneString) {
      const validPhoneNumber = parsePhoneNumberFromString(phoneString);

      if (validPhoneNumber) {
        const phoneNumber = validPhoneNumber.number;

        setDataForRequest({
          ...dataForRequest,
          phone_number: phoneNumber,
        });
      } else {
        delete dataForRequest.phone_number;
      }
    } else {
      delete dataForRequest.phone_number;
    }
  }, [values.phone_number]);

  useEffect(() => {
    const userBirthday = values.birthday;

    if (userBirthday) {
      const formattedBirthday = moment(userBirthday).format('DD.MM.YYYY');

      setDataForRequest({
        ...dataForRequest,
        birthday: formattedBirthday,
      });
    } else {
      delete dataForRequest.birthday;
    }
  }, [values.birthday]);

  useEffect(() => {
    const file = fileForRequest;
    if (file) {
      if (file.name && step === 2) {
        // TODO: сделать общую фунцию проверки есть еще в аплоад файле
        const fileExtension = file.name.split('.').pop();

        if (fileExtension === 'pdf' || fileExtension === 'jpg') {
          uploadDocuments(file);
        } else {
          setValue({
            data: {
              title: 'Можно отправить только pdf и jpg файлы',
            },
          });

          resetValue('document', 'institutes');
        }
      }
    }
  }, [fileForRequest]);

  useEffect(() => {
    const id = docIdForRequest;

    if (id && step === 2) {
      setDataForRequest((prevData) => {
        const institutes = prevData.institutes || [];
        const instituteExists = institutes.some((_, index) => index === listId);

        if (instituteExists) {
          return {
            ...prevData,
            institutes: institutes.map((institute, index) => (index === listId
              ? { ...institute, document: id }
              : institute))
          };
        }
        return {
          ...prevData,
          institutes: [
            ...institutes,
            { document: id }
          ]
        };
      });
    }
  }, [docIdForRequest]);

  const [graduationYear, setGraduationYear] = useState(null);
  const [instituteTitle, setInstituteTitle] = useState(null);
  const [instituteSpeciality, setInstituteSpeciality] = useState(null);
  const [coursesGraduationYear, setCoursesGraduationYear] = useState(null);
  const [coursesTitle, setCoursesTitle] = useState(null);
  const [coursesSpeciality, setCoursesSpeciality] = useState(null);

  useEffect(() => {
    const propertyPath = `courses_graduation_year${listId}`;
    const newCoursesGraduationYear = values[propertyPath];

    if (newCoursesGraduationYear !== coursesGraduationYear) {
      setCoursesGraduationYear(newCoursesGraduationYear);
    }
  }, [values, listId]);

  useEffect(() => {
    const propertyPath = `courses_title${listId}`;
    const newСoursesTitle = values[propertyPath];

    if (newСoursesTitle !== coursesTitle) {
      setCoursesTitle(newСoursesTitle);
    }
  }, [values, listId]);

  useEffect(() => {
    const propertyPath = `courses_speciality${listId}`;
    const newCoursesSpeciality = values[propertyPath];

    if (newCoursesSpeciality !== coursesSpeciality) {
      setCoursesSpeciality(newCoursesSpeciality);
    }
  }, [values, listId]);

  useEffect(() => {
    const propertyPath = `institutes_graduation_year${listId}`;
    const newGraduationYear = values[propertyPath];

    if (newGraduationYear !== graduationYear) {
      setGraduationYear(newGraduationYear);
    }
  }, [values, listId]);

  useEffect(() => {
    const propertyPath = `institutes_title${listId}`;
    const newInstituteTitle = values[propertyPath];

    if (newInstituteTitle !== instituteTitle) {
      setInstituteTitle(newInstituteTitle);
    }
  }, [values, listId]);

  useEffect(() => {
    const propertyPath = `institutes_speciality${listId}`;
    const newInstituteSpeciality = values[propertyPath];

    if (newInstituteSpeciality !== instituteSpeciality) {
      setInstituteSpeciality(newInstituteSpeciality);
    }
  }, [values, listId]);

  useEffect(() => {
    const file = fileForRequest;

    if (file) {
      if (file.name && step === 3) {
        // TODO: сделать общую фунцию проверки есть еще в аплоад файле
        const fileExtension = file.name.split('.').pop();

        if (fileExtension === 'pdf' || fileExtension === 'jpg') {
          uploadDocuments(file);
        } else {
          setValue({
            data: {
              title: 'Можно отправить только pdf и jpg файлы',
            },
          });

          resetValue('document', 'courses');
        }
      }
    }
  }, [fileForRequest]);

  useEffect(() => {
    const id = docIdForRequest;

    if (id && step === 3) {
      setDataForRequest((prevData) => {
        const courses = prevData.courses || [];
        const courseExists = courses.some((_, index) => index === listId);

        if (courseExists) {
          return {
            ...prevData,
            courses: courses.map((course, index) => (index === listId
              ? { ...course, document: id }
              : course))
          };
        }
        return {
          ...prevData,
          courses: [
            ...courses,
            { document: id }
          ]
        };
      });
    }
  }, [docIdForRequest]);

  useEffect(() => {
    if (coursesGraduationYear) {
      const year = coursesGraduationYear;

      if (year) {
        if (year.length === 4) {
          setDataForRequest((prevData) => {
            const courses = prevData.courses || [];
            const courseExists = courses.some((_, index) => index === listId);

            if (courseExists) {
              return {
                ...prevData,
                courses: courses.map((course, index) => (index === listId
                  ? { ...course, graduation_year: year }
                  : course))
              };
            }

            return {
              ...prevData,
              courses: [
                ...courses,
                { graduation_year: year }
              ]
            };
          });
        } else {
          resetValue('graduation_year', 'courses');
        }
      } else {
        resetValue('graduation_year', 'courses');
      }
    } else {
      resetValue('graduation_year', 'courses');
    }
  }, [coursesGraduationYear]);

  useEffect(() => {
    if (coursesTitle) {
      setDataForRequest((prevData) => {
        const courses = prevData.courses || [];
        const courseExists = courses.some((_, index) => index === listId);

        if (courseExists) {
          return {
            ...prevData,
            courses: courses.map((course, index) => (index === listId
              ? { ...course, title: coursesTitle }
              : course))
          };
        }

        return {
          ...prevData,
          courses: [
            ...courses,
            { title: coursesTitle }
          ]
        };
      });
    } else {
      resetValue('title', 'courses');
    }
  }, [coursesTitle]);

  useEffect(() => {
    if (coursesSpeciality) {
      setDataForRequest((prevData) => {
        const courses = prevData.courses || [];
        const courseExists = courses.some((_, index) => index === listId);

        if (courseExists) {
          return {
            ...prevData,
            courses: courses.map((course, index) => (index === listId
              ? { ...course, speciality: coursesSpeciality }
              : course))
          };
        }

        return {
          ...prevData,
          courses: [
            ...courses,
            { speciality: coursesSpeciality }
          ]
        };
      });
    } else {
      resetValue('speciality', 'courses');
    }
  }, [coursesSpeciality]);

  useEffect(() => {
    if (graduationYear) {
      const minMaxArr = getYears([graduationYear]);

      if (minMaxArr) {
        if (minMaxArr[0].length > 1) {
          const yearsArr = minMaxArr[1];

          if ((yearsArr[0].toString().length === 4) && (yearsArr[1].toString().length === 4)) {
            setDataForRequest((prevData) => {
              const institutes = prevData.institutes || [];
              const instituteExists = institutes.some((_, index) => index === listId);

              if (instituteExists) {
                return {
                  ...prevData,
                  institutes: institutes.map((institute, index) => (index === listId
                    ? { ...institute, graduation_year: `${yearsArr[0]}-${yearsArr[1]}` }
                    : institute))
                };
              }

              return {
                ...prevData,
                institutes: [
                  ...institutes,
                  { graduation_year: `${yearsArr[0]}-${yearsArr[1]}` }
                ]
              };
            });
          } else {
            resetValue('graduation_year', 'institutes');
          }
        }
      } else {
        resetValue('graduation_year', 'institutes');
      }
    } else {
      resetValue('graduation_year', 'institutes');
    }
  }, [graduationYear]);

  useEffect(() => {
    if (instituteTitle) {
      setDataForRequest((prevData) => {
        const institutes = prevData.institutes || [];
        const instituteExists = institutes.some((_, index) => index === listId);

        if (instituteExists) {
          return {
            ...prevData,
            institutes: institutes.map((institute, index) => (index === listId
              ? { ...institute, title: instituteTitle }
              : institute))
          };
        }

        return {
          ...prevData,
          institutes: [
            ...institutes,
            { title: instituteTitle }
          ]
        };
      });
    } else {
      resetValue('title', 'institutes');
    }
  }, [instituteTitle]);

  useEffect(() => {
    if (instituteSpeciality) {
      setDataForRequest((prevData) => {
        const institutes = prevData.institutes || [];
        const instituteExists = institutes.some((_, index) => index === listId);

        if (instituteExists) {
          return {
            ...prevData,
            institutes: institutes.map((institute, index) => (index === listId
              ? { ...institute, speciality: instituteSpeciality }
              : institute))
          };
        }

        return {
          ...prevData,
          institutes: [
            ...institutes,
            { speciality: instituteSpeciality }
          ]
        };
      });
    } else {
      resetValue('speciality', 'institutes');
    }
  }, [instituteSpeciality]);

  return (
    <PageLayout
      classes={
        `psycho-registration${step === 1 ? `${' psycho-registration__fist-step'}`
          : `${' psycho-registration__other-step'}`}`
      }
      title="Подать заявку"
      nav={step !== 1 ? (
        <Button
          variant="text-icon"
          onClick={() => switchPrevStep()}
          className="psycho-registration__switch"
        >
          Назад
        </Button>
      ) : null}
    >
      <div className="psycho-registration__container">
        {step === 1 ? (
          <ul className="psycho-registration__text-list">
            {PSYCHO_REGISTRATION_TEXT.map((i) => (
              <li key={i}>
                <p className="psycho-registration__text">{i}</p>
              </li>
            ))}
          </ul>
        ) : null}
        <form className="psycho-registration__form">
          {/* TODO: объединить шаги в один компонент? */}
          <FirstStep
            className={step === 1 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            selectedDropdownItems={selectedDropdownItems}
            step={step}
          />
          <SecondStep
            className={step === 2 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            step={step}
            getClosestList={getClosestList}
            setListId={setListId}
          />
          <ThirdStep
            className={step === 3 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            step={step}
            getClosestList={getClosestList}
            setListId={setListId}
          />
          <FourthStep
            className={step === 4 ? 'psycho-registration__step_on' : ''}
            values={values}
            handleChange={handleChange}
            errors={errors}
            inputValidStatus={inputValidStatus}
            getInvalidInput={getInvalidInput}
            step={step}
            selectedDropdownItems={selectedDropdownItems}
            setCustomValue={setCustomValue}
            resetCustomValue={resetCustomValue}
          />
          <Button
            className="psycho-registration__form_button"
            type={step !== 4 ? 'button' : 'submit'}
            variant="primary"
            size="l"
            disabled={!isValidForm}
            onClick={switchNextStep}
          >
            {step !== 4 ? 'Далее' : 'Подать заявку'}
          </Button>
        </form>
      </div>
    </PageLayout>
  );
}
