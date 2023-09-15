import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PsychologistAccountTemplate.css';
import Header from '../Header/Header';
import NavLinksList from '../NavLinksList/NavLinksList';
import {
  PSYCHOLOGIST_ACCOUNT_LINKS,
  PSYCHOLOGIST_ACCOUNT_TEXT,
} from '../../constants/db';
import Title from '../generic/Title/Title';
import CalendarBlock from './PlannerSection/CalendarBlock/CalendarBlock';
import MeetingsReminderBlock from './PlannerSection/MeetingsReminderBlock/MeetingsReminderBlock';
import SheduleSection from './SheduleSection/SheduleSection';

export default function PsychologistAccountTemplate({
  calendar,
  meetingsReminder,
  shedule,
}) {
  const { pathname } = useLocation();
  const calendarText = `${
    pathname === '/schedule'
      ? PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInShedule
      : PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInMain
  }`;

  const reminderText = `${
    pathname === '/schedule'
      ? PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInShedule
      : PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInMain
  }`;

  return (
    <>
      <Header isLoggedIn />
      <section className="psychologist-account">
        <div className="psychologist-account__links-section">
          <NavLinksList
            list={PSYCHOLOGIST_ACCOUNT_LINKS}
            direction="column"
            variant="violet"
          />
        </div>

        <div className="psychologist-account__planner-section">
          <Title size="m" text="Главная" />
          <CalendarBlock text={calendarText}>{calendar}</CalendarBlock>

          <MeetingsReminderBlock text={reminderText}>
            {meetingsReminder}
          </MeetingsReminderBlock>
        </div>

        <SheduleSection>{shedule}</SheduleSection>
      </section>
    </>
  );
}

PsychologistAccountTemplate.propTypes = {
  calendar: PropTypes.node.isRequired,
  meetingsReminder: PropTypes.node.isRequired,
  shedule: PropTypes.node.isRequired,
};
