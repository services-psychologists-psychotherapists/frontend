import React from 'react';
import moment from 'moment';
import './PsychologistAccount.css';
import { useLocation } from 'react-router-dom';
import PageLayout from '../../components/templates/PageTemplate/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import {
  PSYCHOLOGIST_ACCOUNT_LINKS,
  PSYCHOLOGIST_ACCOUNT_TEXT,
  SLOTS,
} from '../../constants/db';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import Calendar from '../../components/Сalendar/Сalendar';
import CardOfSession from '../../components/Cards/CardOfSession/CardOfSession';
import SessionPlanner from '../../components/SessionPlanner/SessionPlanner';
import SlotsList from '../../components/SlotsList/SlotsList';
import Title from '../../components/generic/Title/Title';
import { DATE_FORMAT } from '../../constants/constants';

export default function PsychologistAccount() {
  const { pathname } = useLocation();
  const currentDay = moment('18.09.2023 19:20', DATE_FORMAT);
  let nextAppointment = null;
  const selectedSlots = [];

  // prettier-ignore
  const text = {
    calendarText: `${pathname === '/psychologist_account_schedule' ? PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInShedule : PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInMain}`,
    reminderText: `${pathname === '/psychologist_account_schedule' ? PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInShedule : PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInMain}`,
    titleText: `${(pathname === '/psychologist_account' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitleInMain)
      || (pathname === '/psychologist_account_schedule' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitlenShedule)
      || (pathname === '/psychologist_account_profile' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitleInProfile)}`,
  };

  const getNextSession = () => {
    if (selectedSlots.length > 0) {
      // prettier-ignore
      nextAppointment = selectedSlots.reduce((acc, cur) => {
        if (
          moment(cur.slot.datetime_from, DATE_FORMAT).isBefore(
            moment(acc.slot.datetime_from, DATE_FORMAT)
          ) && selectedSlots.client
        ) {
          return cur;
        }
        return acc;
      });

      nextAppointment.datetime_from = nextAppointment.slot.datetime_from;
      nextAppointment.datetime_to = nextAppointment.slot.datetime_to;
    }
  };

  const getSheduleCurrentDay = () => {
    if (SLOTS.length > 0) {
      // eslint-disable-next-line
      for (let i = 0; i < SLOTS.length; i += 1) {
        const timeSession = moment(SLOTS[i].slot.datetime_from, DATE_FORMAT);
        if (timeSession.isSame(currentDay, 'day')) {
          selectedSlots.push(SLOTS[i]);
        }
      }
      getNextSession();
    }
  };

  getSheduleCurrentDay();

  return (
    // prettier-ignore
    <PageLayout
      title={text.titleText}
      isLoggedIn
      nav={<NavLinksList list={PSYCHOLOGIST_ACCOUNT_LINKS} direction="column" variant="violet" />}
    >
      <section className="psychologist-account">
        {pathname !== '/psychologist_account_profile'
          ? (
            <>
              <BlockWithTitle title={text.calendarText}>
                <Calendar />
              </BlockWithTitle>

              <BlockWithTitle title={text.reminderText}>
                {pathname !== '/psychologist_account_schedule' ? <CardOfSession session={nextAppointment} /> : <SessionPlanner />}
              </BlockWithTitle>
            </>
          ) : null}

        {pathname !== '/psychologist_account_profile' ? (<SlotsList sessions={selectedSlots} selectedDay={currentDay} />) : (<Title text="ПРОФИЛЬ ЗДЕСЬ" />)}

      </section>
    </PageLayout>
  );
}
