import React from 'react';
import './CardOfSession.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import PsychoName from '../PsychoName/PsychoName';
import { getSessionTime, getMonthName } from '../../../utils/helpers';
import { DAYS_NAME, NOT_APPOINTMENT_MESSAGE } from '../../../constants/constants';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

export default function CardOfSession({ type, session }) {
  let user;
  let timeFrom;
  let timeTo;

  if (session.client) {
    user = type === 'psychologist' ? session.client : session.slot.psychologist;
    timeFrom = session.slot.datetime_from;
    timeTo = session.slot.datetime_to;
  } else {
    user = type === 'psychologist' ? 'client' : 'psychologist';
  }

  return (
    <div
      className={`session-card session-card_type_${type}`}
    >
      {session.client ? (
        <>
          <div
            className={`session-card__header session-card__header_type_${type}`}
          >
            <Avatar size="s" src={user.avatar} />
            <div className="session-card__info">
              {type === 'client' ? (
                <PsychoName
                  description="Психолог"
                  name={`${user.first_name} ${user.last_name}`}
                />
              ) : (
                <p className="session-card__name">{`${user.first_name} ${user.last_name}`}</p>
              )}
              <div className="session-card__date">
                <p>
                  {type === 'client' && `${timeFrom.date()} ${getMonthName(timeFrom)}, ${DAYS_NAME[timeFrom.day()]}`}
                </p>
                <p>{getSessionTime(timeFrom, timeTo)}</p>
              </div>
            </div>
          </div>
          <ButtonGroup size="m">
            <Button href={session.href}>
              {type === 'client' ? 'Перейти' : 'Начать сессию'}
            </Button>
            <Button onClick={() => {}} variant="secondary">
              Отменить
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <div>
          <p className={`session-card__title ${type === 'psychologist' ? 'session-card__title_type_client' : ''}`}>{NOT_APPOINTMENT_MESSAGE[user].title}</p>
          <p className={`session-card__paragraph ${type === 'psychologist' ? 'session-card__paragraph_type_client' : ''}`}>
            {NOT_APPOINTMENT_MESSAGE[user].description}
          </p>
          {type === 'psychologist' && <Button href="/calendar">{NOT_APPOINTMENT_MESSAGE[user].textBtn}</Button>}
        </div>
      )}
    </div>
  );
}

CardOfSession.propTypes = {
  type: PropTypes.oneOf(['client', 'psychologist']),
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
};

CardOfSession.defaultProps = {
  type: 'psychologist',
};
