import React, { useEffect } from 'react';
import moment from 'moment';
import { func, object, bool, string } from 'prop-types';
import './SessionPlanner.css';
import Button from '../generic/Button/Button';
import { PSYCHO_ACCOUNT_TIMEPICKER } from '../../constants/constants';
import Fieldset from '../generic/Fieldset/Fieldset';

export default function SessionPlanner({
  createNewSession, values,
  setSelectedDropdownItems, handleChange,
  selectedDropdownItems, errors,
  isScreenMd, jwt,
  selectedDay, isLoading,
  convertLocalToUtc,
}) {
  const getDateForNewSession = (curDate, curHour, curMinute) => {
    const newDate = moment(curDate).set({
      hour: curHour,
      minute: curMinute,
    });

    return convertLocalToUtc(newDate, 'DD.MM.YYYY HH:mm');
  };

  useEffect(() => {
    setSelectedDropdownItems({
      ...values,
      [PSYCHO_ACCOUNT_TIMEPICKER[0].name]: PSYCHO_ACCOUNT_TIMEPICKER[0].dropdownContent[0],
      [PSYCHO_ACCOUNT_TIMEPICKER[1].name]: PSYCHO_ACCOUNT_TIMEPICKER[1].dropdownContent[0],
    });
  }, []);

  return (
    <form className="session-planner">
      <div className="session-planner__time-picker">
        <div className="session-planner__time-picker-text">
          <h2 className="session-planner__text">Время начала сессии</h2>
          <div className="session-planner__icon" />
        </div>
        <div className="session-planner__timing-box">
          <Fieldset
            name={PSYCHO_ACCOUNT_TIMEPICKER[0].name}
            element={PSYCHO_ACCOUNT_TIMEPICKER[0].element}
            classesForAbsoluteList="session-planner__timing-list"
            isIcon={false}
            classesForInput="session-planner__timing-input"
            isPrompt={false}
            dropdownContent={PSYCHO_ACCOUNT_TIMEPICKER[0].dropdownContent}
            typeForDropdown={PSYCHO_ACCOUNT_TIMEPICKER[0].typeForDropdown}
            required={PSYCHO_ACCOUNT_TIMEPICKER[0].required}
            values={values}
            errors={errors}
            handleChange={(e) => handleChange(e, true)}
            selectedDropdownItems={selectedDropdownItems}
            autoComplete={PSYCHO_ACCOUNT_TIMEPICKER[0].autoComplete}
            readOnly
            isChangeFocus
          />
          :
          <Fieldset
            name={PSYCHO_ACCOUNT_TIMEPICKER[1].name}
            element={PSYCHO_ACCOUNT_TIMEPICKER[1].element}
            classesForAbsoluteList="session-planner__timing-list"
            isIcon={false}
            classesForInput="session-planner__timing-input"
            isPrompt={false}
            dropdownContent={PSYCHO_ACCOUNT_TIMEPICKER[1].dropdownContent}
            typeForDropdown={PSYCHO_ACCOUNT_TIMEPICKER[1].typeForDropdown}
            required={PSYCHO_ACCOUNT_TIMEPICKER[1].required}
            values={values}
            errors={errors}
            handleChange={(e) => handleChange(e, true)}
            selectedDropdownItems={selectedDropdownItems}
            autoComplete={PSYCHO_ACCOUNT_TIMEPICKER[1].autoComplete}
            readOnly
            isChangeFocus
          />
        </div>
      </div>
      <Button
        onClick={() => createNewSession({
          datetime_from: getDateForNewSession(
            selectedDay,
            selectedDropdownItems.hours,
            selectedDropdownItems.minutes,
          ),
        }, jwt)}
        type="submit"
        className="session-planner__button-add"
        size={isScreenMd ? 'm' : 'l'}
        disabled={isLoading}
      >
        {isLoading ? 'Добавление...' : 'Добавить'}
      </Button>
    </form>
  );
}

SessionPlanner.propTypes = {
  createNewSession: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  values: object.isRequired,
  setSelectedDropdownItems: func.isRequired,
  handleChange: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selectedDropdownItems: object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  errors: object.isRequired,
  isScreenMd: bool.isRequired,
  jwt: string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selectedDay: object.isRequired,
  isLoading: bool,
  convertLocalToUtc: func.isRequired,
};

SessionPlanner.defaultProps = {
  isLoading: false,
};
