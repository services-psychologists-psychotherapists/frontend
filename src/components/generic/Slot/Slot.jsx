import React from 'react';
import './Slot.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import arrow from '../../../images/arrow_icon.svg';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import { getSessionTime } from '../../../utils/helpers';

export default function Slot({ session, onClick, isSlotOpen }) {
  function classIsOpen(element) {
    if (isSlotOpen) {
      return `${element}_opened`;
    }
    return '';
  }

  const startTime = session.slot.datetime_from;
  const endTime = session.slot.datetime_to;

  return (
    <li className={`slot ${session.slot.is_free && 'slot_free'}`}>
      <button onClick={onClick} className="slot__header">
        <p className="session-time">{getSessionTime(startTime, endTime)}</p>
        <p className="slot__title">
          {!session.slot.is_free
            ? `${session.client.first_name} ${session.client.last_name}`
            : 'Свободное время'}
        </p>
        <img
          src={arrow}
          alt="arrow"
          className={`slot__icon ${classIsOpen('slot__icon')}`}
        />
      </button>
      <div className={`slot__content ${classIsOpen('slot__content')}`}>
        {session.slot.is_free ? (
          <Button size="m" onClick={() => {}} variant="secondary">
            Удалить из расписания
          </Button>
        ) : (
          <ButtonGroup size="m">
            <Button size="m" href={session.href}>
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
  session: PropTypes.shape({
    client: PropTypes.shape({
      first_name: PropTypes.string,
      last_name: PropTypes.string,
      id: PropTypes.string,
      avatar: PropTypes.string,
    }),
    slot: PropTypes.shape({
      psychologist: PropTypes.shape({
        fitst_name: PropTypes.string,
        last_name: PropTypes.string,
        id: PropTypes.string,
        avatar: PropTypes.string,
      }),
      datetime_from: PropTypes.instanceOf(moment),
      datetime_to: PropTypes.instanceOf(moment),
      is_free: PropTypes.bool,
    }),
    status: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSlotOpen: PropTypes.bool.isRequired,
};
