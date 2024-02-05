import React, { useState } from 'react';
import {
  string, arrayOf, shape, instanceOf, object,
  func, bool,
} from 'prop-types';
import moment from 'moment/moment';
import './SlotsList.css';
import Button from '../generic/Button/Button';
import Slot from './Slot/Slot';
import { NO_SLOTS_MESSAGE } from '../../constants/constants';

export default function SlotsList({
  sessions, selectedDay, curPath,
  handleDeleteSessionClick, handleDeleteSlotClick,
  setSelectedSlot, selectedSlot,
  isListLoading,
}) {
  const [isSlotOpen, setIsSlotOpen] = useState(false);
  const currentDay = selectedDay.isSame(moment(), 'day') ? 'otherDay' : 'today';

  return (
    <div className="slot-list">
      <h2 className="slot-list__title">{moment(selectedDay).format('D MMMM')}</h2>
      {sessions.length > 0 ? (
        <ul className="slot-list__slots scrollbar">
          {sessions.map((session) => (
            <li key={session.id} id={session.id}>
              <Slot
                session={session}
                key={session.id}
                id={session.id}
                isSlotOpen={selectedSlot.id === session.id && isSlotOpen}
                handleDeleteSessionClick={handleDeleteSessionClick}
                handleDeleteSlotClick={handleDeleteSlotClick}
                setSelectedSlot={setSelectedSlot}
                setIsSlotOpen={setIsSlotOpen}
                isListLoading={isListLoading}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className="slot-list__empty">
          {curPath.pathname !== '/psychologist_account_schedule' ? (
            <>
              <p className="slot-list__description">
                {NO_SLOTS_MESSAGE[currentDay].title}
              </p>
              <Button
                variant="secondary"
                href="/psychologist_account_schedule"
                className="slot-list__button"
              >
                {NO_SLOTS_MESSAGE[currentDay].textBtn}
              </Button>
            </>
          ) : (
            <p className="slot-list__description">
              {NO_SLOTS_MESSAGE.noSlots.title}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

SlotsList.propTypes = {
  sessions: arrayOf(
    shape({
      client: shape({
        first_name: string,
        last_name: string,
        id: string,
      }),
      datetime_from: string,
      datetime_to: string,
      href: string,
    }).isRequired
  ).isRequired,
  selectedDay: instanceOf(moment).isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
  handleDeleteSessionClick: func.isRequired,
  handleDeleteSlotClick: func.isRequired,
  setSelectedSlot: func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  selectedSlot: object,
  isListLoading: bool.isRequired,
};

SlotsList.defaultProps = {
  selectedSlot: {},
};
