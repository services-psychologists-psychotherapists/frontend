import React from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import './PsychologistAccountTemplate.css';
import PageLayout from '../templates/PageTemplate/PageLayout';
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
    titleText: `${
      pathname === '/psychologist_account_schedule'
        ? PSYCHOLOGIST_ACCOUNT_TEXT.txtTitlenShedule
        : PSYCHOLOGIST_ACCOUNT_TEXT.txtTitleInMain
    }`,
  };

  return (
    <PageLayout
      title={text.titleText}
      isLoggedIn
      // prettier-ignore
      nav={<NavLinksList list={PSYCHOLOGIST_ACCOUNT_LINKS} direction="column" variant="violet" />}
    >
      <section className="psychologist-account">
        <PlannerSection
          calendar={calendar}
          meetingsReminder={meetingsReminder}
          text={text}
        />

        <SheduleSection>{shedule}</SheduleSection>
      </section>
    </PageLayout>
  );
}

PsychologistAccountTemplate.propTypes = {
  calendar: PropTypes.node.isRequired,
  meetingsReminder: PropTypes.node.isRequired,
  shedule: PropTypes.node.isRequired,
};
