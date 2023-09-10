import React, { useState, useEffect } from 'react';
import './Сalendar.css';
import moment from 'moment';
import 'moment/locale/ru';
import {
  NUMBER_OF_DAYS_DISPLAYED,
  NUMBER_TO_SWITCH_THE_WEEKS,
  DAYS_OF_WEEK,
} from '../../constants/constants';
// TODO: Title

export default function Сalendar() {
  moment.locale('ru');

  const currentDate = moment();

  const [selectedDay, setSelectedDay] = useState({});

  const [startDay, setStartDay] = useState(currentDate.clone().startOf('week'));
  const [lastDay, setLastDay] = useState(
    moment(startDay).add(NUMBER_OF_DAYS_DISPLAYED, 'days')
  );

  const [dates, setDates] = useState([]);

  const formattedCurrentDate = currentDate.format('D-MM-YYYY');
  const formattedStartDate = startDay.format('D MMMM');
  const formattedlastDay = lastDay.format('D MMMM');

  const handleSelectDay = (e) => {
    if (e.key === 'Enter') {
      setSelectedDay(e.target.id);
    }
    if (e.type === 'click') {
      setSelectedDay(e.target.id);
    }
  };

  const [isChangedWeeks, setIsChangedWeeks] = useState(false);

  const handleChangeWeeks = () => {
    if (!isChangedWeeks) {
      setIsChangedWeeks(true);
    }
  };

  const switchToNextWeeks = () => {
    setStartDay(startDay.add(NUMBER_TO_SWITCH_THE_WEEKS, 'days'));
    setLastDay(moment(startDay).add(NUMBER_OF_DAYS_DISPLAYED, 'days'));

    handleChangeWeeks();
  };

  const switchToPrevWeeks = () => {
    setLastDay(moment(startDay).subtract(1, 'days'));
    setStartDay(startDay.subtract(NUMBER_TO_SWITCH_THE_WEEKS, 'days'));

    handleChangeWeeks();
  };

  const resetDates = () => {
    if (isChangedWeeks) {
      const resetStartDay = currentDate.clone().startOf('week');
      const resetLastDay = moment(resetStartDay).add(
        NUMBER_OF_DAYS_DISPLAYED,
        'days'
      );

      setStartDay(resetStartDay);
      setLastDay(resetLastDay);
      setIsChangedWeeks(false);
    }
  };

  useEffect(() => {
    const generateDates = () => {
      const newDates = [];

      const currentDatePoint = moment(startDay);

      while (currentDatePoint.isSameOrBefore(lastDay, 'day')) {
        newDates.push({
          dayOfWeek: currentDatePoint.format('ddd'),
          date: currentDatePoint.format('D-MM-YYYY'),
          day: currentDatePoint.format('D'),
          isDayOff: [6, 7].includes(currentDatePoint.isoWeekday()),
        });

        currentDatePoint.add(1, 'day');
      }

      setDates(newDates);
    };

    generateDates();
  }, [startDay, lastDay]);

  // prettier-ignore
  const dateСellСlasses = (i) => (
    `${i.isDayOff ? 'calendar__day-of-week_day-off' : ''} ${
      i.date === formattedCurrentDate ? 'calendar__date_today' : ''
    } ${selectedDay === i.date ? 'calendar__date_selected' : ''}`
  );

  // prettier-ignore
  const daysOfWeekClasses = (i) => (
    `${(i === 'сб' || i === 'вс') && 'calendar__day-of-week_day-off'}`
  );

  return (
    <div className="session-calendar">
      {/* TODO: настроить тайтл */}
      <h3 className="session-calendar__title">Календарь сессий</h3>
      <div className="calendar">
        <div className="calendar__period">
          <button
            type="button"
            className="calendar__period_switch calendar__period_prev"
            onClick={switchToPrevWeeks}
          />
          <div className="calendar__current-weeks">
            {`${formattedStartDate} - ${formattedlastDay}`}
            <button
              type="button"
              className="calendar__period_switch calendar__period_reset"
              onClick={resetDates}
            />
          </div>
          <button
            type="button"
            className="calendar__period_switch calendar__period_next"
            onClick={switchToNextWeeks}
          />
        </div>
        <div className="calendar__content">
          <ul className="calendar__days-of-week">
            {DAYS_OF_WEEK.map((i) => (
              <li
                className={`calendar__cell calendar__day-of-week ${daysOfWeekClasses(
                  i
                )}`}
                key={i}
              >
                {i}
              </li>
            ))}
          </ul>
          <div className="calendar__dates">
            {dates.map((i) => (
              <div
                className={`calendar__cell calendar__date ${dateСellСlasses(
                  i
                )}`}
                key={i.date}
                id={i.date}
                onClick={handleSelectDay}
                onKeyDown={handleSelectDay}
                tabIndex={0}
                role="button"
              >
                {i.day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
