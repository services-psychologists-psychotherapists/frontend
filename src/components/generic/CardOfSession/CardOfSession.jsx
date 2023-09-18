import React from 'react';
import './CardOfSession.css';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import PsychoName from '../PsychoName/PsychoName';
import { getSessionTime, getMonthName } from '../../../utils/helpers';
import { DAYS_NAME, NOT_APPOINTMENT_MESSAGE } from '../../../constants/constants';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';

export default function CardOfSession({ type, session }) {
  const user = type === 'psycho' ? 'patient' : 'psycho';
  return (
    <div
      className={`session-card session-card_type_${type}`}
    >
      {session.patient ? (
        <>
          <div
            className={`session-card__header session-card__header_type_${type}`}
          >
            <Avatar size="s" src={session[user].avatar} />
            <div className="session-card__info">
              {type === 'patient' ? (
                <PsychoName
                  description="Психолог"
                  name={`${session[user].name} ${session[user].lastName}`}
                />
              ) : (
                <p className="session-card__name">{`${session[user].name} ${session[user].lastName}`}</p>
              )}
              <div className="session-card__date">
                <p>
                  {type === 'patient' && `${session.time.date()} ${getMonthName(session.time)}, ${DAYS_NAME[session.time.day()]}`}
                </p>
                <p>{getSessionTime(session.time)}</p>
              </div>
            </div>
          </div>
          <ButtonGroup size="m">
            <Button href={session.href}>
              {type === 'patient' ? 'Перейти' : 'Начать сессию'}
            </Button>
            <Button onClick={() => {}} variant="secondary">
              Отменить
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <div>
          <p className={`session-card__title ${type === 'psycho' ? 'session-card__title_type_patient' : ''}`}>{NOT_APPOINTMENT_MESSAGE[user].title}</p>
          <p className={`session-card__paragraph ${type === 'psycho' ? 'session-card__paragraph_type_patient' : ''}`}>
            {NOT_APPOINTMENT_MESSAGE[user].description}
          </p>
          {type === 'psycho' && <Button href="/calendar">{NOT_APPOINTMENT_MESSAGE[user].textBtn}</Button>}
        </div>
      )}
    </div>
  );
}

CardOfSession.propTypes = {
  type: PropTypes.oneOf(['patient', 'psycho']),
  session: PropTypes.shape({
    patient: PropTypes.shape({
      name: PropTypes.string,
      lastName: PropTypes.string,
      id: PropTypes.string,
      img: PropTypes.string,
    }),
    psycho: PropTypes.shape({
      name: PropTypes.string,
      lastName: PropTypes.string,
      id: PropTypes.string,
      img: PropTypes.string,
    }),
    time: PropTypes.string, // change
    href: PropTypes.string,
  }).isRequired,
};

CardOfSession.defaultProps = {
  type: 'psycho',
};
