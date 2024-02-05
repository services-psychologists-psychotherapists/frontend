import React, { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { func, bool } from 'prop-types';
import * as psychologistService from '../../utils/services/psychologistService';
import * as clientServicejs from '../../utils/services/clientService';
import './SessionRegistrationForClient.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import Button from '../../components/generic/Button/Button';
import Calendar from '../../components/Сalendar/Сalendar';
import MiniPsychoCard from '../../components/Cards/MiniPsychoCard/MiniPsychoCard';
import SessionInformation from './SessionInformation/SessionInformation';
import TimeContainer from '../../components/generic/TimeBtn/TimeContainer/TimeContainer';
import {
  formattedToday,
  binarySearchDateIndex,
  getFormattedLocalTimeArr,
  showPopupWithValue,
} from '../../utils/helpers';
import { usePopup } from '../../hooks/usePopup';

export default function SessionRegistrationForClient({ goBack, isLoading }) {
  const { date, time, cellId } = useParams();
  const { setValue } = usePopup();
  const [freeTimeElements, setFreeTimeElements] = useState([]);
  const [searchDayIndex, setSearchDayIndex] = useState(0);
  const [formattedLocalDates, setFormattedLocalDates] = useState([]);
  const [selectedDay, setSelectedDay] = useState(date || formattedToday);
  const [selectedTime, setSelectedTime] = useState(time || '');
  const [currentPsychologist, setCurrentPsychologist] = useState({});
  const [curCellId, setCurCellId] = useState(cellId || null);
  const pathname = useLocation();
  const psychologistId = pathname.pathname.split('/')[2];
  const jwt = localStorage.getItem('jwt');

  const getPsychologist = async (userId) => {
    try {
      const psychologist = await psychologistService.getCurrentPsychologist(userId);

      setCurrentPsychologist(psychologist);
    } catch (err) {
      console.log(err);
    }
  };

  const createNewSession = async (id, token) => {
    try {
      await clientServicejs.createSession(id, token);

      setSearchDayIndex(0);
      getPsychologist(psychologistId);
      setValue({
        data: {
          title: 'Сессия успешно оплачена!',
          text: (
            <>
              Вы записаны
              {` ${selectedDay} `}
              в
              {` ${selectedTime} `}
              <br />
              Психолог:
              {` ${currentPsychologist.first_name}`}
              {` ${currentPsychologist.last_name}`}
            </>
          ),
          buttons: [
            {
              label: 'В личный кабинет',
              onClick: () => {},
              type: 'button',
              size: 'l',
              variant: 'primary',
              href: '/client_account',
            },
          ],
        },
      });
    } catch (err) {
      console.log(err);

      showPopupWithValue(
        setValue,
        'При создании сессии произошла ошибка',
        (
          <>
            Возможно у вас уже есть запланированная сессия
            <br />
            (можно иметь только одну активную сессию)
          </>
        )
      );
    }
  };

  const handleTimeClick = (e) => {
    setSelectedTime(e.target.innerText);
    setCurCellId(e.target.id);
  };

  const handleCalendarDateClick = (dateData, e) => {
    const formattedCurrentDate = dateData.format('DD.MM.YYYY');

    setSelectedDay(formattedCurrentDate);
    setSelectedTime(formattedLocalDates[e.target.closest('li').id].cells[0].time);
    setCurCellId(formattedLocalDates[e.target.closest('li').id].cells[0].id);
  };

  const handleResetDateClick = (dateData) => {
    if (formattedLocalDates.length > 0) {
      setSelectedDay(formattedLocalDates[0].date);
      setSelectedTime(formattedLocalDates[0].cells[0].time);
      setCurCellId(formattedLocalDates[0].cells[0].id);
    } else {
      setSelectedDay(dateData);
    }
  };

  useEffect(() => {
    getPsychologist(psychologistId);
  }, []);

  useEffect(() => {
    if (currentPsychologist.slots && currentPsychologist.slots.length > 0) {
      const currentDatesAndTimes = getFormattedLocalTimeArr(currentPsychologist.slots);

      setFormattedLocalDates(currentDatesAndTimes);
      setSelectedDay(currentDatesAndTimes[0].date);
      if (!cellId) {
        setCurCellId(currentDatesAndTimes[0].cells[0].id);
      }
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
        const { cells } = formattedLocalDates[searchDayIndex];

        setFreeTimeElements(cells);
      } else {
        setFreeTimeElements([]);
      }
    }
  }, [formattedLocalDates, searchDayIndex]);

  useEffect(() => {
    if (!time) {
      setSelectedTime('');

      if (freeTimeElements.length > 0) {
        const [firstElement] = freeTimeElements;

        setSelectedTime(firstElement.time);
      }
    }
  }, [freeTimeElements]);

  return (
    <PageLayout
      layoutClassName="session-registration__container"
      title="Запись на сессию"
      section={(
        <Button
          variant="text-icon"
          onClick={() => goBack()}
          className="session-registration__back-btn"
        >
          Назад
        </Button>
      )}
    >
      <div className="session-registration">
        <MiniPsychoCard
          experience={currentPsychologist.experience}
          avatar={currentPsychologist.avatar}
          firstName={currentPsychologist.first_name}
          lastName={currentPsychologist.last_name}
          speciality={currentPsychologist.speciality}
        />
        <section className="session-registration__time">
          <div className="session-registration__time-calendar">
            <Calendar
              titleText="Выбор даты и времени"
              onDateCellClick={handleCalendarDateClick}
              onResetClick={() => handleResetDateClick(formattedToday)}
              freeSlotsArray={formattedLocalDates}
              selectedDate={date || ''}
              isClient
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
            onClick={() => createNewSession(curCellId, jwt)}
            className="session-registration__info"
            isLoading={isLoading}
          />
        </section>
      </div>
    </PageLayout>
  );
}

SessionRegistrationForClient.propTypes = {
  goBack: func.isRequired,
  isLoading: bool.isRequired,
};
