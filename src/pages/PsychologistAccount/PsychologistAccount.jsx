import React from 'react';
import './PsychologistAccount.css';
import { useLocation } from 'react-router-dom';
import PsychologistAccountTemplate from '../../components/PsychologistAccountTemplate/PsychologistAccountTemplate';
import Calendar from '../../components/Сalendar/Сalendar';
import ScrollerBlock from '../../components/generic/ScrollerBlock/ScrollerBlock';
import CardOfSession from '../../components/generic/CardOfSession/CardOfSession';
import SessionPlanner from '../../components/SessionPlanner/SessionPlanner';
import { SLOTS, SLOT } from '../../constants/db';
import Title from '../../components/generic/Title/Title';

export default function PsychologistAccount() {
  const { pathname } = useLocation();
  return (
    <PsychologistAccountTemplate
      calendar={<Calendar />}
      meetingsReminder={
        pathname !== '/psychologist_account_schedule' ? (
          <CardOfSession session={SLOT} />
        ) : (
          <SessionPlanner />
        )
      }
      shedule={
        pathname !== '/psychologist_account_profile' ? (
          <ScrollerBlock slots={SLOTS} />
        ) : (
          <Title text="ТУТ НАХОДИТСЯ БОЛЬШОЙ КРАСИВЫЙ ПРОФИЛЬ, НО ТЫ ЕГО ПОКА НЕ ВИДИШЬ" />
        )
      }
    />
  );
}
