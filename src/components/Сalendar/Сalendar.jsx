import React, { useState, useEffect } from 'react';
import { arrayOf, func, shape, string, number, bool } from 'prop-types';
import './Сalendar.css';
import moment from 'moment';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';
import {
  NUMBER_OF_DAYS_DISPLAYED,
  NUMBER_TO_SWITCH_THE_WEEKS,
  DAYS_OF_WEEK,
} from '../../constants/constants';
import { today, formattedToday, binarySearchDateIndex } from '../../utils/helpers';

export default function Сalendar({
  onDateCellClick, titleText,
  onResetClick, freeSlotsArray,
  selectedDate, isClient,
}) {
  const [selectedDay, setSelectedDay] = useState(selectedDate || '');
  const [dates, setDates] = useState([]);
  const [isChangedWeeks, setIsChangedWeeks] = useState(false);

  const [startDay, setStartDay] = useState(today.clone().startOf('week'));
  const [lastDay, setLastDay] = useState(moment(startDay).add(NUMBER_OF_DAYS_DISPLAYED, 'days'));

  const formattedCurrentDate = today.format('DD.MM.YYYY');
  const formattedStartDate = startDay.format('DD MMMM');
  const formattedlastDay = lastDay.format('DD MMMM');

  const handleSelectDay = (e) => {
    if (e.key === 'Enter' || e.type === 'click') {
      setSelectedDay(e.target.id);
      onDateCellClick(moment(e.target.id, 'DD.MM.YYYY'), e);
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

  const resetDates = () => {
    if (isClient && freeSlotsArray.length > 0) {
      const [firstElement] = freeSlotsArray;
      setSelectedDay(firstElement.date);
    } else {
      setSelectedDay('');
    }

    const resetStartDay = today.clone().startOf('week');
    const resetLastDay = moment(resetStartDay).add(NUMBER_OF_DAYS_DISPLAYED, 'days');

    setStartDay(resetStartDay);
    setLastDay(resetLastDay);

    onResetClick();
  };

  useEffect(() => {
    const generateDates = () => {
      const newDates = [];
      const currentDatePoint = moment(startDay);

      while (currentDatePoint.isSameOrBefore(lastDay, 'day')) {
        newDates.push({
          dayOfWeek: currentDatePoint.format('ddd'),
          date: currentDatePoint.format('DD.MM.YYYY'),
          day: currentDatePoint.format('D'),
          isDayOff: [6, 7].includes(currentDatePoint.isoWeekday()),
        });

        currentDatePoint.add(1, 'day');
      }
      setDates(newDates);
    };

    const handleChangeWeeks = () => {
      if (today.isSameOrAfter(startDay, 'week') && today.isSameOrBefore(lastDay, 'week')) {
        setIsChangedWeeks(false);
      } else {
        setIsChangedWeeks(true);
      }
    };

    generateDates();
    handleChangeWeeks();
  }, [startDay, lastDay]);

  useEffect(() => {
    if (freeSlotsArray.length > 0) {
      const [firstElement] = freeSlotsArray;

      setSelectedDay(firstElement.date);
    }
  }, [freeSlotsArray]);

  const dateСellСlasses = (i) => `${i.isDayOff ? ' calendar__cell_type_day-off' : ''}${
    i.date === formattedCurrentDate ? ' calendar__date_type_today' : ''
  }${selectedDay === i.date ? ' calendar__date_type_selected' : ''}`;

  const daysOfWeekClasses = (i) => `${(i === 'сб' || i === 'вс') && 'calendar__cell_type_day-off'}`;

  const getDisabledPrevSwitch = () => (!isChangedWeeks ? ' calendar__period-switch_disabled' : '');

  const getCalendarDisabledDate = (i) => {
    const isDateLessThanToday = moment(i.date, 'DD.MM.YYYY') < moment(formattedToday, 'DD.MM.YYYY');
    const res = {
      class: '',
      disabled: false,
    };

    const isDateInArr = () => {
      if (freeSlotsArray.length > 0) {
        const dateIndex = binarySearchDateIndex(freeSlotsArray, i.date);
        res.id = dateIndex;

        return dateIndex === false;
      }

      return true;
    };

    if (isDateLessThanToday || (freeSlotsArray.length >= 0 && isClient && isDateInArr())) {
      return {
        class: ' calendar__date_disabled',
        disabled: true,
      };
    }

    return res;
  };

  return (
    <BlockWithTitle title={titleText} size="xs">
      <div className="calendar">
        <div className="calendar__period">
          <button
            type="button"
            className={
              `calendar__period-switch calendar__period-switch_type_prev${
                getDisabledPrevSwitch()}`
            }
            onClick={switchToPrevWeeks}
            disabled={!isChangedWeeks}
          />
          <div className="calendar__current-weeks">
            {`${formattedStartDate} - ${formattedlastDay}`}
            {isChangedWeeks && (
              <button
                type="button"
                className="calendar__period-switch calendar__period-reset"
                onClick={resetDates}
              />
            )}
          </div>
          <button
            type="button"
            className="calendar__period-switch calendar__period-switch_type_next"
            onClick={switchToNextWeeks}
          />
        </div>
        <div className="calendar__content">
          <ul className="calendar__days-of-week">
            {DAYS_OF_WEEK.map((i) => (
              <li
                className={`calendar__cell calendar__cell_type_day-of-week ${daysOfWeekClasses(i)}`}
                key={i}
              >
                {i}
              </li>
            ))}
          </ul>
          <ul className="calendar__dates">
            {dates.map((i) => {
              const calendarDisabledDate = getCalendarDisabledDate(i);

              return (
                <li
                  className="calendar__dates-cell"
                  key={i.date}
                  id={calendarDisabledDate.id !== false ? calendarDisabledDate.id : null}
                >
                  <button
                    className={`calendar__cell calendar__date${dateСellСlasses(i)}${
                      calendarDisabledDate.class
                    }`}
                    id={i.date}
                    onClick={handleSelectDay}
                    onKeyDown={handleSelectDay}
                    disabled={calendarDisabledDate.disabled}
                  >
                    {i.day}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </BlockWithTitle>
  );
}

Сalendar.propTypes = {
  onDateCellClick: func,
  titleText: string,
  onResetClick: func,
  freeSlotsArray: arrayOf(
    shape({
      date: string.isRequired,
      cells: arrayOf(
        shape({
          id: number.isRequired,
          time: string.isRequired,
        })
      ).isRequired,
    })
  ),
  selectedDate: string,
  isClient: bool,
};

Сalendar.defaultProps = {
  titleText: 'Календарь сессий',
  onResetClick: () => {},
  freeSlotsArray: [],
  onDateCellClick: () => {},
  selectedDate: '',
  isClient: false,
};
