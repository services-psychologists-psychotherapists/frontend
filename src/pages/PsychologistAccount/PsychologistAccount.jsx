import React, { useState } from 'react';
import { object, string, func } from 'prop-types';
import moment from 'moment';
import './PsychologistAccount.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import {
  PSYCHOLOGIST_ACCOUNT_LINKS,
  PSYCHOLOGIST_ACCOUNT_TITLES,
  DATE_FORMAT,
} from '../../constants/constants';
import { SLOTS } from '../../constants/db';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import Calendar from '../../components/Сalendar/Сalendar';
import CardOfSession from '../../components/Cards/CardOfSession/CardOfSession';
import SessionPlanner from '../../components/SessionPlanner/SessionPlanner';
import SlotsList from '../../components/SlotsList/SlotsList';
import UserProfileData from '../../components/UserProfileData/UserProfileData';

export default function PsychologistAccount({
  curPath,
  currentUser,
  docIdForRequest,
  uploadDocuments,
  setDocIdForRequest,
  changePsychoAvatar,
  changePsychologistData,
}) {
  const [currentDay, setCurrentDay] = useState(moment());
  let nextAppointment = null;
  const selectedSlots = [];
  const slotsWithSessions = [];
  const path = curPath.pathname.split('_').pop();

  const getNextSession = () => {
    nextAppointment = slotsWithSessions.reduce((acc, cur) => {
      if (moment(cur.datetime_from, DATE_FORMAT).isBefore(moment(acc.datetime_from, DATE_FORMAT))) {
        return cur;
      }
      return acc;
    });
  };

  const getSheduleCurrentDay = () => {
    if (SLOTS.length > 0) {
      for (let i = 0; i < SLOTS.length; i += 1) {
        const timeSession = moment(SLOTS[i].datetime_from, DATE_FORMAT);

        if (timeSession.isSame(currentDay, 'day') && timeSession.isAfter(moment())) {
          selectedSlots.push(SLOTS[i]);

          if (SLOTS[i].client) {
            slotsWithSessions.push(SLOTS[i]);
          }
        }
      }

      if (slotsWithSessions.length > 0) {
        getNextSession();
      }
    }
  };

  getSheduleCurrentDay();

  return (
    <PageLayout
      title={PSYCHOLOGIST_ACCOUNT_TITLES[path].pageTitle}
      isLoggedIn
      nav={(
        <NavLinksList
          list={PSYCHOLOGIST_ACCOUNT_LINKS}
          direction="column"
          variant="violet"
        />
      )}
    >
      {path !== 'profile' ? (
        <section className="psychologist-account">
          <Calendar
            titleText={PSYCHOLOGIST_ACCOUNT_TITLES[path].calendarTitle}
            onDateCellClick={setCurrentDay}
          />
          <BlockWithTitle title={PSYCHOLOGIST_ACCOUNT_TITLES[path].reminderTitle}>
            {path !== 'schedule' ? (
              <CardOfSession session={nextAppointment} />
            ) : (
              <SessionPlanner />
            )}
          </BlockWithTitle>
          <SlotsList sessions={selectedSlots} selectedDay={currentDay} />
        </section>
      ) : null}
      {path === 'profile' ? (
        <UserProfileData
          currentUser={currentUser}
          docIdForRequest={docIdForRequest}
          uploadDocuments={uploadDocuments}
          setDocIdForRequest={setDocIdForRequest}
          changePsychoAvatar={changePsychoAvatar}
          changePsychologistData={changePsychologistData}
          curPath={curPath}
        />
      ) : null}
    </PageLayout>
  );
}

PsychologistAccount.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object,
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func.isRequired,
  changePsychoAvatar: func.isRequired,
  changePsychologistData: func.isRequired,
};

PsychologistAccount.defaultProps = {
  currentUser: {},
};
