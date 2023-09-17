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
import PlannerSection from './PlannerSection/PlannerSection';
import SheduleSection from './SheduleSection/SheduleSection';

export default function PsychologistAccountTemplate({
  calendar,
  meetingsReminder,
  shedule,
}) {
  const { pathname } = useLocation();
  const text = {
    calendarText: `${
      pathname === '/psychologist_account_schedule'
        ? PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInShedule
        : PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInMain
    }`,
    reminderText: `${
      pathname === '/psychologist_account_schedule'
        ? PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInShedule
        : PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInMain
    }`,
  };

  return (
    <>
      <Header isLoggedIn />
      <section className="psychologist-account">
        <div className="psychologist-account__links-section">
          <div className="psychologist-account__style-links">
            <NavLinksList
              list={PSYCHOLOGIST_ACCOUNT_LINKS}
              direction="column"
              variant="violet"
            />
          </div>
        </div>

        <PlannerSection
          calendar={calendar}
          meetingsReminder={meetingsReminder}
          text={text}
        />

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
