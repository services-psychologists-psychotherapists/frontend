import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import './SlotsList.css';
import Button from '../generic/Button/Button';
import Slot from './Slot/Slot';
import { getMonthName } from '../../utils/helpers';
import { NO_SLOTS_MESSAGE } from '../../constants/constants';

export default function SlotsList({ sessions, selectedDay }) {
  const [openSlot, setOpenSlot] = useState(null);
  const currentDay = selectedDay.isSame(moment(), 'day') ? 'otherDay' : 'today';
  const { pathname } = useLocation();

  const handlerSlotClick = (id) => {
    if (id !== openSlot) {
      setOpenSlot(id);
    } else {
      setOpenSlot(null);
    }
  };
  console.log(sessions);

  return (
    <div className="scroller">
      {/* prettier-ignore */}
      <h2 className="scroller__title">{`${selectedDay.date()} ${getMonthName(selectedDay)}`}</h2>
      {sessions.length > 0 ? (
        <ul className="slots">
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
        <div className="scroller__empty">
          {pathname !== '/psychologist_account_schedule' ? (
            <>
              <p className="scroller__description">{NO_SLOTS_MESSAGE[currentDay].title}</p>
              <Button variant="secondary" href="/psychologist_account_schedule">
                {NO_SLOTS_MESSAGE[currentDay].textBtn}
              </Button>
            </>
          ) : (
            <p className="scroller__description">{NO_SLOTS_MESSAGE.noSlots.title}</p>
          )}
        </div>
      )}
    </div>
  );
}

SlotsList.propTypes = {
  sessions: PropTypes.arrayOf(
    PropTypes.shape({
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
        datetime_from: PropTypes.string,
        datetime_to: PropTypes.string,
        is_free: PropTypes.bool,
      }),
      status: PropTypes.string,
      href: PropTypes.string,
    }).isRequired
  ).isRequired,
  selectedDay: PropTypes.instanceOf(moment).isRequired,
};
