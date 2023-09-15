import React from 'react';
import './Slot.css';
import PropTypes from 'prop-types';
import arrow from '../../../images/arrow_icon.svg';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import getTime from '../../../utils/getTime';

export default function Slot({ slot, onClick, isSlotOpen }) {
  function classIsOpen(element) {
    if (isSlotOpen) {
      return `${element}_opened`;
    }
    return '';
  }

  return (
    <li className={`slot ${slot.isFree && 'slot_free'}`}>
      <button onClick={onClick} className="slot__header">
        <p className="session-time">{getTime(slot.time.getHours())}</p>
        <p className="slot__title">
          {!slot.isFree
            ? `${slot.patient.name} ${slot.patient.lastName}`
            : 'Свободное время'}
        </p>
        <img
          src={arrow}
          alt="arrow"
          className={`slot__icon ${classIsOpen('slot__icon')}`}
        />
      </button>
      <div className={`slot__content ${classIsOpen('slot__content')}`}>
        {slot.isFree ? (
          <Button size="m" onClick={() => {}} variant="secondary">
            Удалить из расписания
          </Button>
        ) : (
          <ButtonGroup size="m">
            <Button size="m" onClick={() => {}}>
              Начать сессию
            </Button>
            <Button size="m" onClick={() => {}} variant="secondary">
              Отменить
            </Button>
          </ButtonGroup>
        )}
      </div>
    </li>
  );
}

Slot.propTypes = {
  slot: PropTypes.shape({
    time: PropTypes.instanceOf(Date).isRequired,
    patient: PropTypes.objectOf(PropTypes.string),
    isFree: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSlotOpen: PropTypes.bool.isRequired,
};
