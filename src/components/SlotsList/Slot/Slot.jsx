import React from 'react';
import './Slot.css';
import moment from 'moment';
import { shape, string, func, bool } from 'prop-types';
import arrow from '../../../images/arrow_icon.svg';
import Button from '../../generic/Button/Button';
import ButtonGroup from '../../generic/ButtonGroup/ButtonGroup';
import { DATE_FORMAT } from '../../../constants/constants';

export default function Slot({
  session, isSlotOpen,
  handleDeleteSessionClick, handleDeleteSlotClick,
  setSelectedSlot, setIsSlotOpen,
  isListLoading,
}) {
  const classIsOpen = (element) => {
    if (isSlotOpen) {
      return `${element}_opened`;
    }
    return '';
  };

  const handleClick = () => {
    setIsSlotOpen(!isSlotOpen);
    setSelectedSlot(session);
  };

  const startTime = moment(session.datetime_from, DATE_FORMAT);
  const endTime = moment(session.datetime_to, DATE_FORMAT);

  return (
    <div
      className={`slot ${!session.client ? 'slot_type_free' : ''}`}
      onClick={() => handleClick()}
      onKeyDown={(e) => e.key === 'Enter' && handleClick()}
      role="button"
      tabIndex={0}
    >
      <div className="slot__header">
        <p className="slot__session-time">
          {`${startTime.format('HH:mm')} - ${endTime.format('HH:mm')}`}
        </p>
        <p className="slot__title">
          {session.client
            ? `${session.client.first_name} ${session.client.last_name}`
            : 'Свободное время'}
        </p>
        <img
          src={arrow}
          alt="Иконка развернуть"
          className={`slot__icon${classIsOpen(' slot__icon')}`}
        />
      </div>
      <div className={`slot__content${classIsOpen(' slot__content')}`}>
        <ButtonGroup size="s" className="slot__btns">
          {!session.is_free && (
            <Button size="m" href={session.href}>
              Начать сессию
            </Button>
          )}
          <Button
            size="m"
            onClick={() => {
              if (session.is_free) {
                handleDeleteSlotClick();
              } else {
                handleDeleteSessionClick();
              }
            }}
            variant="secondary"
            disabled={isListLoading}
          >
            Отменить
          </Button>
        </ButtonGroup>
      </div>
    </div>
  );
}

Slot.propTypes = {
  session: shape({
    client: shape({
      first_name: string,
      last_name: string,
      id: string,
    }),
    datetime_from: string,
    datetime_to: string,
    href: string,
  }).isRequired,
  isSlotOpen: bool.isRequired,
  handleDeleteSessionClick: func.isRequired,
  handleDeleteSlotClick: func.isRequired,
  setSelectedSlot: func.isRequired,
  setIsSlotOpen: func.isRequired,
  isListLoading: bool.isRequired,
};
