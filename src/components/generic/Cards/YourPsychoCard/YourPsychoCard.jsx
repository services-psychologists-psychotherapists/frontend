import React from 'react';
import './YourPsychoCard.css';
import PropTypes from 'prop-types';
import Avatar from '../../Avatar/Avatar';
import PsychoName from '../../PsychoName/PsychoName';
import Button from '../../Button/Button';
import EmptyCard from '../EmptyCard/EmptyCard';
import { NO_PSYCHO_MESSAGE } from '../../../../constants/constants';

export default function YourPsychoCard({ user }) {
  return (
    <div className="your-psycho">
      {user.psycho ? (
        <>
          <Avatar size="l" src={user.psycho.img} />
          <div className="your-psycho__container">
            <PsychoName
              name={`${user.psycho.name} ${user.psycho.lastName}`}
              leftText={`Cессия ${user.psycho.timeOfSession} мин.`}
              rightText={`${Number(user.psycho.price).toLocaleString()} руб.`}
              description="Психолог"
            />
            <Button
              variant={user.sessions.length <= 0 ? 'primary' : 'secondary'}
            >
              Записаться повторно
            </Button>
          </div>
        </>
      ) : (
        <EmptyCard
          type="client"
          title={NO_PSYCHO_MESSAGE.title}
          paragraph={NO_PSYCHO_MESSAGE.description}
          textBtn={NO_PSYCHO_MESSAGE.textBtn}
          href={NO_PSYCHO_MESSAGE.href}
        />
      )}
    </div>
  );
}

YourPsychoCard.propTypes = {
  user: PropTypes.shape({
    psycho: PropTypes.shape({
      name: PropTypes.string,
      lastName: PropTypes.string,
      id: PropTypes.string,
      img: PropTypes.string,
      price: PropTypes.number,
      timeOfSession: PropTypes.number,
    }),
    sessions: PropTypes.arrayOf(
      PropTypes.shape({
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
      })
    ),
  }).isRequired,
};
