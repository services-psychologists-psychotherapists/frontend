import React from 'react';
import './CardOfSession.css';
import PropTypes from 'prop-types';
import Avatar from '../Avatar/Avatar';
import PsychoName from '../PsychoName/PsychoName';
import { getTime, getMonthName } from '../../../utils/helpers';
import { DAYS_OF_WEEK, NOT_APPOINTMENT_MESSAGE } from '../../../constants/constants';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Button from '../Button/Button';
import EmptyCard from '../Cards/EmptyCard/EmptyCard';
import Paragraph from '../Paragraph/Paragraph';

export default function CardOfSession({ type, session, isFree }) {
  const { date, href } = session;
  const { name, lastName, img } = session[type];

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
      {!isFree ? (
        <>
          <div
            className={`session-card__header session-card__header_type_${type}`}
          >
            <Avatar size="s" src={img} />
            <div className="session-card__info">
              {type === 'client' ? (
                <PsychoName
                  description="Психолог"
                  name={`${name} ${lastName}`}
                />
              ) : (
                <Paragraph>{`${name} ${lastName}`}</Paragraph>
              )}
              <div className="session-card__date">
                {type === 'client' && <p>{`${date.getDate()} ${getMonthName(date)}, ${DAYS_OF_WEEK[date.getDay() + 1]}`}</p>}
                <p>{getTime(date)}</p>
              </div>
            </div>
          </div>
          <ButtonGroup size="m">
            <Button href={href}>
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
  isFree: PropTypes.bool,
};

CardOfSession.defaultProps = {
  type: 'psycho',
  isFree: false,
};
