import React from 'react';
import './PsychologistAccount.css';
import PsychologistAccountTemplate from '../../components/PsychologistAccountTemplate/PsychologistAccountTemplate';
import Title from '../../components/generic/Title/Title';
import Calendar from '../../components/Сalendar/Сalendar';
import ScrollerBlock from '../../components/generic/ScrollerBlock/ScrollerBlock';
import { SLOTS } from '../../constants/db';

export default function PsychologistAccount() {
  return (
    <PsychologistAccountTemplate
      calendar={<Calendar />}
      meetingsReminder={<Title text="Напоминалка тут" />}
      shedule={<ScrollerBlock slots={SLOTS} />}
    />
    /* calendar={<Calendar />}
       meetingsReminder={<Reminder />}
       shedule={<Shedule />} */
  );
}
