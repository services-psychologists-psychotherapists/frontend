import React, { useState } from 'react';
import { string, arrayOf, shape, instanceOf } from 'prop-types';
import moment from 'moment/moment';
import './SlotsList.css';
import Button from '../generic/Button/Button';
import Slot from './Slot/Slot';
import { getMonthName } from '../../utils/helpers';
import { NO_SLOTS_MESSAGE } from '../../constants/constants';

export default function SlotsList({
  sessions, selectedDay, curPath
}) {
  // проверить переделать
  const [openSlot, setOpenSlot] = useState(null);
  const currentDay = selectedDay.isSame(moment(), 'day') ? 'otherDay' : 'today';

  const handlerSlotClick = (id) => {
    if (id !== openSlot) {
      setOpenSlot(id);
    } else {
      setOpenSlot(null);
    }
  };

  return (
    <div className="slot-list">
      <h2 className="slot-list__title">{getMonthName(selectedDay)}</h2>
      {sessions.length > 0 ? (
        <ul className="slot-list__slots scrollbar">
          {sessions.map((session) => (
            <Slot
              session={session}
              key={session.id}
              id={session.id}
              onClick={() => handlerSlotClick(session.id)}
              isSlotOpen={openSlot === session.id}
            />
          ))}
        </ul>
      ) : (
        <div className="slot-list__empty">
          {curPath !== '/psychologist_account_schedule' ? (
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
  curPath: string.isRequired,
};
