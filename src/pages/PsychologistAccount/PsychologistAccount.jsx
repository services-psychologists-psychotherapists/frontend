import React from 'react';
import './PsychologistAccount.css';
import PsychologistAccountTemplate from '../../components/PsychologistAccountTemplate/PsychologistAccountTemplate';
import Title from '../../components/generic/Title/Title';

export default function PsychologistAccount() {
  return (
    <PsychologistAccountTemplate
      calendar={<Title text="Календарь тут" />}
      meetingsReminder={<Title text="Напоминалка тут" />}
      shedule={<Title text="Расписание тут" />}
    />
    /* calendar={<Calendar />}
       meetingsReminder={<Reminder />}
       shedule={<Shedule />} */
  );
}
