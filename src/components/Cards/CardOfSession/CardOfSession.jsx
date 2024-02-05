import React from 'react';
import './CardOfSession.css';
import moment from 'moment';
import { oneOf, func, object } from 'prop-types';
import Avatar from '../../generic/Avatar/Avatar';
import PsychoName from '../../generic/PsychoName/PsychoName';
import { getSessionTime, getMonthName, convertUtcToLocal } from '../../../utils/helpers';
import { DATE_FORMAT, CARD_OF_SESSION_MESSAGE } from '../../../constants/constants';
import ButtonGroup from '../../generic/ButtonGroup/ButtonGroup';
import Button from '../../generic/Button/Button';
import EmptyCard from '../EmptyCard/EmptyCard';
import Text from '../../generic/Text/Text';
import { useResize } from '../../../hooks/useResize';

export default function CardOfSession({
  type, session, handleDeleteSessionClick
}) {
  const { isScreenMd } = useResize();
  let user;
  let timeFrom;
  let timeTo;

  const setCardData = () => {
    if (session && session.datetime_from) {
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
        textBtn: CARD_OF_SESSION_MESSAGE[user].textBtn,
        href: '/calendar',
      };
    }
    return '';
  };

  setCardData();

  const getFormattredDay = (day) => {
    const curDay = convertUtcToLocal(day.format('DD.MM.YYYY HH:mm'), 'DD.MM.YYYY HH:mm');

    return moment(curDay, 'DD.MM.YYYY HH:mm').format('dd');
  };

  return (
    <div className={`session-card session-card_type_${type}`}>
      {session && session.datetime_from ? (
        <>
          <div className={`session-card__header session-card__header_type_${type}`}>
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
                {type === 'psychologist' && (
                  <p>
                    {`${getMonthName(timeFrom)}, ${
                      getFormattredDay(timeFrom)}`}
                  </p>
                )}
                <p>{getSessionTime(timeFrom, timeTo)}</p>
              </div>
            </div>
          </div>
          <ButtonGroup size="s" className="session-card__buttons">
            <Button href={session.href} size={isScreenMd ? 'm' : 'l'}>
              {type === 'psychologist' ? 'Перейти' : 'Начать сессию'}
            </Button>
            <Button
              onClick={handleDeleteSessionClick}
              variant="secondary"
              size={isScreenMd ? 'm' : 'l'}
            >
              Отменить
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <EmptyCard
          type={user}
          title={CARD_OF_SESSION_MESSAGE[user].title}
          paragraph={CARD_OF_SESSION_MESSAGE[user].description}
          {...emptyCardProps()}
        />
      )}
    </div>
  );
}

CardOfSession.propTypes = {
  type: oneOf(['client', 'psychologist']),
  // eslint-disable-next-line react/forbid-prop-types
  session: object,
  handleDeleteSessionClick: func,
};

CardOfSession.defaultProps = {
  type: 'client',
  session: {},
  handleDeleteSessionClick: () => {},
};
