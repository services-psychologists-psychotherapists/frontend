import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ScrollerBlock.css';

import Button from '../Button/Button';
import Slot from '../Slot/Slot';

export default function ScrollerBlock({ slots }) {
  const [openSlot, setOpenSlot] = useState(null);

  function handlerSlotClick(id) {
    if (id !== openSlot) {
      setOpenSlot(id);
    } else {
      setOpenSlot(null);
    }
  }

  return (
    <div className="scroller">
      <h2 className="scroller__title">29 августа</h2>
      {slots.length > 0 ? (
        <ul className="slots">
          {slots.map((slot) => (
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
            На сегодня не установлено доступное время для сессий
          </p>
          <Button variant="secondary" onClick={() => {}}>
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
      time: PropTypes.instanceOf(Date).isRequired,
      patient: PropTypes.shape({
        name: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
      isFree: PropTypes.bool.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// ScrollerBlock.propsTypes = {
// };
