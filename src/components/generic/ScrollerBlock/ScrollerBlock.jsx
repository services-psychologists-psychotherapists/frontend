import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import './ScrollerBlock.css';
import Button from '../Button/Button';
import Slot from '../Slot/Slot';
import { getMonthName } from '../../../utils/helpers';

export default function ScrollerBlock({ slots, selectedDay }) {
  const [openSlot, setOpenSlot] = useState(null);
  const selectedSlots = [];

  function handlerSlotClick(id) {
    if (id !== openSlot) {
      setOpenSlot(id);
    } else {
      setOpenSlot(null);
    }
  }

  // Позже весь функционал перенесеться в родительский
  // компонент и сюда будет передоваться только массив
  const getSlots = () => {
    slots.map((slot) => {
      const time = moment(slot.time, 'DD.MM.YYYY hh:mm');
      if (time.month() === selectedDay.month() && time.day() === selectedDay.day()) {
        slot.time = time; // eslint-disable-line no-param-reassign
        return selectedSlots.push({ ...slot });
      }
      return null;
    });
  };

  getSlots(); // это временно

  useEffect(() => {
    getSlots();
  }, [selectedDay]);

  return (
    <div className="scroller">
      <h2 className="scroller__title">{`${selectedDay.date()} ${getMonthName(selectedDay)}`}</h2>
      {selectedSlots.length > 0 ? (
        <ul className="slots">
          {selectedSlots.map((slot) => (
            <Slot
              slot={slot}
              key={slot.id}
              id={slot.id}
              onClick={() => handlerSlotClick(slot.id)}
              isSlotOpen={openSlot === slot.id}
            />
          ))}
        </ul>
      ) : (
        <div className="scroller__empty">
          <p className="scroller__description">
            {selectedSlots.length <= 0 ? 'На выбранный день не установлено доступное время для сессий' : 'На сегодня не установлено доступное время для сессий'}
          </p>
          <Button variant="secondary" href="/schedule">
            Перейти в расписание
          </Button>
        </div>
      )}
    </div>
  );
}

ScrollerBlock.propTypes = {
  slots: PropTypes.arrayOf(
    PropTypes.shape({
      time: PropTypes.node.isRequired,
      patient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
      isFree: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  selectedDay: PropTypes.instanceOf(moment).isRequired
};
