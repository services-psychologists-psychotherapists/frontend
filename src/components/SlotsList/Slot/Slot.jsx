import React from 'react';
import './Slot.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import arrow from '../../../images/arrow_icon.svg';
import Button from '../../generic/Button/Button';
import ButtonGroup from '../../generic/ButtonGroup/ButtonGroup';
import { getSessionTime } from '../../../utils/helpers';
import { DATE_FORMAT } from '../../../constants/constants';

export default function Slot({ session, onClick, isSlotOpen }) {
  const classIsOpen = (element) => {
    if (isSlotOpen) {
      return `${element}_opened`;
    }
    return '';
  };

  const startTime = moment(session.datetime_from, DATE_FORMAT);
  const endTime = moment(session.datetime_to, DATE_FORMAT);

  return (
    <li className={`slot ${!session.client && 'slot_free'}`}>
      <button onClick={onClick} className="slot__header">
        <p className="session-time">{getSessionTime(startTime, endTime)}</p>
        <p className="slot__title">
          {session.client
            ? `${session.client.first_name} ${session.client.last_name}`
            : 'Свободное время'}
        </p>
        <img src={arrow} alt="arrow" className={`slot__icon ${classIsOpen('slot__icon')}`} />
      </button>
      <div className={`slot__content ${classIsOpen('slot__content')}`}>
        {!session.client ? (
          <Button size="m" onClick={() => {}} variant="secondary">
            Удалить из расписания
          </Button>
        ) : (
          <ButtonGroup size="s">
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
    }),
    datetime_from: PropTypes.string,
    datetime_to: PropTypes.string,
    href: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  isSlotOpen: PropTypes.bool.isRequired,
};
