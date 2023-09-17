import React from 'react';
import './CardOfSession.css';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import PsychoName from '../PsychoName/PsychoName';
import { getTime, getMonthName } from '../../../utils/helpers';
import { NAME_OF_DAYS, NOT_APPOINTMENT_MESSAGE } from '../../../constants/constants';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import EmptyCard from '../Cards/EmptyCard/EmptyCard';
import Paragraph from '../Paragraph/Paragraph';

export default function CardOfSession({ type, session }) {
  const emptyCardProps = () => {
    if (type === 'psycho') {
      return {
        textBtn: NOT_APPOINTMENT_MESSAGE[type].textBtn,
        href: '/calendar'
      };
    }
    return '';
  };

  return (
    <div
      className={`session-card session-card_type_${type}`}
    >
      {session.client ? (
        <>
          <div
            className={`session-card__header session-card__header_type_${type}`}
          >
            <Avatar size="s" src={session[type].img} />
            <div className="session-card__info">
              {type === 'client' ? (
                <PsychoName
                  description="Психолог"
                  name={`${session[type].name} ${session[type].lastName}`}
                />
              ) : (
                <Paragraph>{`${session[type].name} ${session[type].lastName}`}</Paragraph>
              )}
              <div className="session-card__date">
                {type === 'client' && <p>{`${session.date.getDate()} ${getMonthName(session.date)}, ${NAME_OF_DAYS[session.date.getDay()]}`}</p>}
                <p>{getTime(session.date)}</p>
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
        <EmptyCard
          type={type}
          title={NOT_APPOINTMENT_MESSAGE[type].title}
          paragraph={NOT_APPOINTMENT_MESSAGE[type].description}
          {...emptyCardProps()}
        />
      )}
    </div>
  );
}

CardOfSession.propTypes = {
  type: PropTypes.oneOf(['client', 'psycho']),
  session: PropTypes.shape({
    client: PropTypes.shape({
      name: PropTypes.string,
      lastName: PropTypes.string,
      id: PropTypes.string,
      dateOfBith: PropTypes.instanceOf(Date),
      img: PropTypes.string,
    }),
    psycho: PropTypes.shape({
      name: PropTypes.string,
      lastName: PropTypes.string,
      id: PropTypes.string,
      dateOfBith: PropTypes.instanceOf(Date),
      img: PropTypes.string,
    }),
    date: PropTypes.instanceOf(Date),
    href: PropTypes.string,
  }).isRequired,
};

CardOfSession.defaultProps = {
  type: 'psycho',
};
