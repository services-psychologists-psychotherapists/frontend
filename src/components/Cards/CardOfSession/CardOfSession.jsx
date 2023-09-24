import React from 'react';
import './CardOfSession.css';
import moment from 'moment';
import PropTypes from 'prop-types';
import Avatar from '../../generic/Avatar/Avatar';
import PsychoName from '../../generic/PsychoName/PsychoName';
import { getSessionTime, getMonthName } from '../../../utils/helpers';
import { DATE_FORMAT, DAYS_NAME, NOT_APPOINTMENT_MESSAGE } from '../../../constants/constants';
import ButtonGroup from '../../generic/ButtonGroup/ButtonGroup';
import Button from '../../generic/Button/Button';
import EmptyCard from '../EmptyCard/EmptyCard';
import Text from '../../generic/Text/Text';
import { useResize } from '../../../hooks/useResize';

export default function CardOfSession({ type, session }) {
  const { isScreenSm } = useResize();
  let user;
  let timeFrom;
  let timeTo;

  const setCardData = () => {
    if (session) {
      user = session.psychologist ? session.psychologist : session.client;
      timeFrom = moment(session.datetime_from, DATE_FORMAT);
      timeTo = moment(session.datetime_to, DATE_FORMAT);
    } else {
      user = type === 'psychologist' ? 'psychologist' : 'client';
    }
  };

  const emptyCardProps = () => {
    if (type === 'client') {
      return {
        textBtn: NOT_APPOINTMENT_MESSAGE[user].textBtn,
        href: '/calendar'
      };
    }
    return '';
  };

  setCardData();

  return (
    <div
      className={`session-card session-card_type_${type}`}
    >
      {session ? (
        <>
          <div
            className={`session-card__header session-card__header_type_${type}`}
          >
            <Avatar size="s" src={user.avatar} />
            <div className="session-card__info">
              {type === 'psychologist' ? (
                <PsychoName
                  description="Психолог"
                  name={`${user.first_name} ${user.last_name}`}
                />
              ) : (
                <Text>{`${user.first_name} ${user.last_name}`}</Text>
              )}
              <div className="session-card__date">
                {type === 'psychologist' && <p>{`${timeFrom.date()} ${getMonthName(timeFrom)}, ${DAYS_NAME[timeFrom.day()]}`}</p>}
                <p>{getSessionTime(timeFrom, timeTo)}</p>
              </div>
            </div>
          </div>
          <ButtonGroup size="s">
            <Button href={session.href} size={!isScreenSm ? 'm' : 'l'}>
              {type === 'psychologist' ? 'Перейти' : 'Начать сессию'}
            </Button>
            <Button onClick={() => { }} variant="secondary" size={!isScreenSm ? 'm' : 'l'}>
              Отменить
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <EmptyCard
          type={user}
          title={NOT_APPOINTMENT_MESSAGE[user].title}
          paragraph={NOT_APPOINTMENT_MESSAGE[user].description}
          {...emptyCardProps()}
        />
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
    psychologist: PropTypes.shape({
      fitst_name: PropTypes.string,
      last_name: PropTypes.string,
      id: PropTypes.string,
      avatar: PropTypes.string,
    }),
    datetime_from: PropTypes.string,
    datetime_to: PropTypes.string,
    status: PropTypes.string,
    href: PropTypes.string,
  }),
};

CardOfSession.defaultProps = {
  type: 'client',
  session: null
};
