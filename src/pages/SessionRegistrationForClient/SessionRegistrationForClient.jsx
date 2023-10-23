import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { func } from 'prop-types';
import * as psychologistSrvice from '../../utils/services/psychologistService';
import './SessionRegistrationForClient.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import Button from '../../components/generic/Button/Button';
import Calendar from '../../components/Сalendar/Сalendar';
import MiniPsychoCard from '../../components/Cards/MiniPsychoCard/MiniPsychoCard';
import SessionInformation from '../../components/SessionInformation/SessionInformation';
import TimeContainer from '../../components/generic/TimeBtn/TimeContainer/TimeContainer';
import {
  formattedToday,
  binarySearchDateIndex,
  getFormattedLocalTimeArr,
} from '../../utils/helpers';

export default function SessionRegistrationForClient({ navigate }) {
  // TODO: Данные психолога получать свехру?
  // TODO: Сделать прелоадер
  const [freeTimeElements, setFreeTimeElements] = useState([]);
  const [searchDayIndex, setSearchDayIndex] = useState(0);
  const [selectedDay, setSelectedDay] = useState(formattedToday);
  const [selectedTime, setSelectedTime] = useState('');
  const [formattedLocalDates, setFormattedLocalDates] = useState([]);
  const [currentPsychologist, setCurrentPsychologist] = useState({});
  const pathname = useLocation();

  const getPsychologist = async () => {
    const psychologistId = pathname.pathname.split('/')[2];
    const psychologist = await psychologistSrvice.getCurrentPsychologist(psychologistId);
    setCurrentPsychologist(psychologist);
  };

  const goBack = () => {
    navigate(-1);
  };

  const handleTimeClick = (e) => {
    setSelectedTime(e.target.innerText);
  };

  const handleCalendarDateClick = (date) => {
    const formattedCurrentDate = date.format('DD.MM.YYYY');

    setSelectedDay(formattedCurrentDate);
  };

  const handleResetDateClick = (date) => {
    setSelectedDay(date);
  };

  useEffect(() => {
    getPsychologist();
  }, []);

  useEffect(() => {
    if (currentPsychologist.slots) {
      const currentDatesAndTimes = getFormattedLocalTimeArr(currentPsychologist.slots);

      setFormattedLocalDates(currentDatesAndTimes);
    }
  }, [currentPsychologist.slots]);

  useEffect(() => {
    if (formattedLocalDates.length > 0) {
      setSearchDayIndex(binarySearchDateIndex(formattedLocalDates, selectedDay));
    }
  }, [formattedLocalDates, selectedDay]);

  useEffect(() => {
    if (formattedLocalDates.length > 0) {
      if (searchDayIndex || searchDayIndex === 0) {
        const { times } = formattedLocalDates[searchDayIndex];

        setFreeTimeElements(times);
      } else {
        setFreeTimeElements([]);
      }
    }
  }, [formattedLocalDates, searchDayIndex]);

  useEffect(() => {
    setSelectedTime('');

    if (freeTimeElements.length > 0) {
      const [firstElement] = freeTimeElements;

      setSelectedTime(firstElement.time);
    }
  }, [freeTimeElements]);

  return (
    <PageLayout
      title="Запись на сессию"
      section={(
        <Button variant="text-icon" onClick={() => goBack()}>
          Назад
        </Button>
      )}
    >
      <div className="session-registration">
        <section>
          <MiniPsychoCard
            experience={currentPsychologist.experience}
            avatar={currentPsychologist.avatar}
            firstName={currentPsychologist.first_name}
            lastName={currentPsychologist.last_name}
            speciality={currentPsychologist.speciality}
          />
        </section>
        <section className="session-registration__time">
          <div className="session-registration__time_calendar">
            <Calendar
              titleText="Выбор даты и времени"
              onDateCellClick={handleCalendarDateClick}
              onResetClick={() => handleResetDateClick(formattedToday)}
              freeSlotsArray={formattedLocalDates}
            />
            <TimeContainer
              timeCells={freeTimeElements}
              containerClassName="session-registration__time-container"
              onClick={handleTimeClick}
              selectedTime={selectedTime}
            />
          </div>
          <SessionInformation
            selectedTime={selectedTime}
            selectedDay={selectedDay}
            sessionDuration={currentPsychologist.duration}
            sessionPrice={currentPsychologist.price}
          />
        </section>
      </div>
    </PageLayout>
  );
}

SessionRegistrationForClient.propTypes = {
  navigate: func.isRequired,
};
