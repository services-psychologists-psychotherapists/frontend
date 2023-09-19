import React from 'react';
import './PlannerSection.css';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
/* import Title from '../../generic/Title/Title'; */
import iconInfo from '../../../images/icon_info.svg';

export default function PlannerSection({ calendar, meetingsReminder, text }) {
  const { pathname } = useLocation();
  const classInfoIcon = `psychologist-account__info ${
    pathname !== '/psychologist_account_schedule'
      ? 'psychologist-account__info_invisible'
      : ''
  }`;
  const classesPlannerSection = `${
    pathname !== '/psychologist_account_profile'
      ? 'psychologist-account__planner-section'
      : 'psychologist-account__planner_invisible'
  }`;
  const { calendarText, reminderText } = text;
  return (
    <div className={classesPlannerSection}>
      {/*  <Title size="m" text="Главная" /> */}
      <div className="psychologist-account__calendar">
        <p className="psychologist-account__subtitle">{calendarText}</p>
        {calendar}
      </div>
      <div className="psychologist-account__meetings-reminder">
        <article className="psychologist-account__subtitle-string">
          <p className="psychologist-account__subtitle">{reminderText}</p>
          <img src={iconInfo} alt="справка" className={classInfoIcon} />
          <p className="prompt">
            Время, бронируемое в сервисе на одну сессию - 40 мин
          </p>
        </article>
        {meetingsReminder}
      </div>
    </div>
  );
}

PlannerSection.propTypes = {
  calendar: PropTypes.node.isRequired,
  meetingsReminder: PropTypes.node.isRequired,
  text: PropTypes.objectOf(PropTypes.string),
};

PlannerSection.defaultProps = {
  text: '',
};
