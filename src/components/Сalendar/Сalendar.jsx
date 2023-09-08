import React, { useState, useEffect } from 'react';
import './Сalendar.css';
import moment from 'moment';
import 'moment/locale/ru';

export default function Сalendar() {
  const NUMBER_OF_DAYS_DISPLAYED = 13; // убрать в конст
  const NUMBER_TO_SWITCH_THE_WEEKS = 14; // убрать в конст

  moment.locale('ru');
  const currentDate = moment();
  const [selectedDay, setSelectedDay] = useState({});
  const [startDay, setStartDay] = useState(currentDate.clone().startOf('week'));
  const [lastDay, setLastDay] = useState(
    moment(startDay).add(NUMBER_OF_DAYS_DISPLAYED, 'days')
  );

  const [dates, setDates] = useState([]);
  const [daysOfWeek, setDaysOfWeek] = useState([]);

  useEffect(() => {
    const generateDates = () => {
      const newDates = [];
      const newDaysOfWeek = [];

      const currentDatePoint = moment(startDay);

      while (currentDatePoint.isSameOrBefore(lastDay, 'day')) {
        newDates.push({
          dayOfWeek: currentDatePoint.format('ddd'),
          date: currentDatePoint.format('D-MM-YYYY'),
          day: currentDatePoint.format('D'),
          isDayOf: [6, 7].includes(currentDatePoint.isoWeekday()),
        });

        if (newDaysOfWeek.length < 7) {
          newDaysOfWeek.push(currentDatePoint.format('ddd'));
        }

        currentDatePoint.add(1, 'day');
      }

      setDates(newDates);
      setDaysOfWeek(newDaysOfWeek);
    };

    generateDates();
  }, [startDay, lastDay]);

  const formattedCurrentDate = currentDate.format('D-MM-YYYY');
  const formattedStartDate = startDay.format('D MMMM');
  const formattedlastDay = lastDay.format('D MMMM');

  const handleSelectDay = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      setSelectedDay(e.target.id);
    }
    if (e.type === 'click') {
      setSelectedDay(e.target.id);
    }
  };

  const switchToNextWeeks = () => {
    setStartDay(startDay.add(NUMBER_TO_SWITCH_THE_WEEKS, 'days'));
    setLastDay(moment(startDay).add(NUMBER_OF_DAYS_DISPLAYED, 'days'));
  };

  const switchToPrevWeeks = () => {
    setLastDay(moment(startDay).subtract(1, 'days'));
    setStartDay(startDay.subtract(NUMBER_TO_SWITCH_THE_WEEKS, 'days'));
  };

  return (
    <div className="calendar">
      <div className="calendar__period">
        <button
          type="button"
          className="calendar__period_switch calendar__period_prev"
          onClick={switchToPrevWeeks}
        />
        {`${formattedStartDate} - ${formattedlastDay}`}
        <button
          type="button"
          className="calendar__period_switch calendar__period_next"
          onClick={switchToNextWeeks}
        />
      </div>
      <div className="calendar__content">
        <div className="calendar__days-of-week">
          {daysOfWeek.map((i) => (
            <div
              className={`calendar__cell calendar__day-of-week ${
                (i === 'сб' || i === 'вс') && 'calendar__day-of-week_day-of'
              }`}
              key={i}
            >
              {i}
            </div>
          ))}
        </div>
        <div className="calendar__dates">
          {dates.map((i) => (
            <div
              className={`calendar__cell calendar__date ${
                i.isDayOf ? 'calendar__day-of-week_day-of' : ''
              } ${
                i.date === formattedCurrentDate ? 'calendar__date_today' : ''
              } ${selectedDay === i.date ? 'calendar__date_selected' : ''}`}
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
  );
}
