import React from 'react';
import { useLocation } from 'react-router-dom';
import './PsychologistAccount.css';
import PageLayout from '../../components/templates/PageTemplate/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import {
  PSYCHOLOGIST_ACCOUNT_LINKS,
  PSYCHOLOGIST_ACCOUNT_TEXT,
  SLOTS,
  SLOT,
} from '../../constants/db';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import Calendar from '../../components/Сalendar/Сalendar';
import CardOfSession from '../../components/generic/CardOfSession/CardOfSession';
import SessionPlanner from '../../components/SessionPlanner/SessionPlanner';
import ScrollerBlock from '../../components/generic/ScrollerBlock/ScrollerBlock';
import Title from '../../components/generic/Title/Title';

export default function PsychologistAccountTemplate() {
  const { pathname } = useLocation();

  const classesPlannerSection = `${
    pathname !== '/psychologist_account_profile'
      ? 'psychologist-account__planner-section'
      : 'psychologist-account__planner_invisible'
  }`;

  // prettier-ignore
  const text = {
    calendarText: `${pathname === '/psychologist_account_schedule' ? PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInShedule : PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInMain}`,
    reminderText: `${pathname === '/psychologist_account_schedule' ? PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInShedule : PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInMain}`,
    titleText: `${(pathname === '/psychologist_account' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitleInMain)
      || (pathname === '/psychologist_account_schedule' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitlenShedule)
      || (pathname === '/psychologist_account_profile' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitleInProfile)}`,
  };

  return (
    // prettier-ignore
    <PageLayout
      title={text.titleText}
      isLoggedIn
      nav={<NavLinksList list={PSYCHOLOGIST_ACCOUNT_LINKS} direction="column" variant="violet" />}
    >
      <section className="psychologist-account">
        <div className={classesPlannerSection}>
          <BlockWithTitle size="xs" title={text.calendarText}>
            <Calendar />
          </BlockWithTitle>

          <BlockWithTitle size="xs" title={text.reminderText}>
            {pathname !== '/psychologist_account_schedule' ? <CardOfSession session={SLOT} /> : <SessionPlanner />}
          </BlockWithTitle>
        </div>

        <div className="psychologist-account__shedule-section">
          {pathname !== '/psychologist_account_profile' ? (<ScrollerBlock slots={SLOTS} />) : (<Title text="ПРОФИЛЬ ЗДЕСЬ" />)}
        </div>
      </section>
    </PageLayout>
  );
}
