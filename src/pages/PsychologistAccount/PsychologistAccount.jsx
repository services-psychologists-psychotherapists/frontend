import React from 'react';
import './PsychologistAccount.css';
import PsychologistAccountTemplate from '../../components/PsychologistAccountTemplate/PsychologistAccountTemplate';
import Calendar from '../../components/Сalendar/Сalendar';
import ScrollerBlock from '../../components/generic/ScrollerBlock/ScrollerBlock';
import CardOfSession from '../../components/generic/CardOfSession/CardOfSession';
import { SLOTS, SLOT } from '../../constants/db';
/* import Title from '../../components/generic/Title/Title'; */

export default function PsychologistAccount() {
  /* console.log(SLOT); */
  return (
    <PsychologistAccountTemplate
      calendar={<Calendar />}
      /* meetingsReminder={<Title text="GHBDTN" />} */
      meetingsReminder={<CardOfSession session={SLOT} />}
      /*  shedule={<Title text="GHBDTN" />} */
      shedule={<ScrollerBlock slots={SLOTS} />}
    />
  );
}
