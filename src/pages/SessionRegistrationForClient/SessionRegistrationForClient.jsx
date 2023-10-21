import React, { useState, useEffect } from 'react';
import { func } from 'prop-types';
import './SessionRegistrationForClient.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import Button from '../../components/generic/Button/Button';
import Calendar from '../../components/Сalendar/Сalendar';
import MiniPsychoCard from '../../components/Cards/MiniPsychoCard/MiniPsychoCard';
import SessionInformation from '../../components/SessionInformation/SessionInformation';
import { FREE_SLOTS, FULL_PSYCHO_CARD } from '../../constants/db';
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
    if (FREE_SLOTS) {
      const currentDatesAndTimes = getFormattedLocalTimeArr(FREE_SLOTS);

      setFormattedLocalDates(currentDatesAndTimes);
    }
  }, [FREE_SLOTS]);

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
            experience={FULL_PSYCHO_CARD.experience}
            avatar={FULL_PSYCHO_CARD.avatar}
            firstName={FULL_PSYCHO_CARD.first_name}
            lastName={FULL_PSYCHO_CARD.last_name}
            speciality={FULL_PSYCHO_CARD.speciality}
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
            sessionDuration={FULL_PSYCHO_CARD.duration}
            sessionPrice={FULL_PSYCHO_CARD.price}
          />
        </section>
      </div>
    </PageLayout>
  );
}

SessionRegistrationForClient.propTypes = {
  navigate: func.isRequired,
};
