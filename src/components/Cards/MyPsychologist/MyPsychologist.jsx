import React from 'react';
import './MyPsychologist.css';
import { string, number, shape } from 'prop-types';
import Avatar from '../../generic/Avatar/Avatar';
import PsychoName from '../../generic/PsychoName/PsychoName';
import Button from '../../generic/Button/Button';
import EmptyCard from '../EmptyCard/EmptyCard';
import { NO_PSYCHO_MESSAGE } from '../../../constants/constants';
import { useResize } from '../../../hooks/useResize';

export default function MyPsychologist({ psychologist, nextSession }) {
  const { isScreenSm } = useResize();
  return (
    <div className="your-psycho">
      {psychologist ? (
        <>
          <Avatar size="l" src={psychologist.avatar} />
          <div className="your-psycho__container">
            <PsychoName
              name={`${psychologist.first_name} ${psychologist.last_name}`}
              leftText={`Cессия ${psychologist.duration} мин.`}
              rightText={`${Number(psychologist.price).toLocaleString()} руб.`}
              description="Психолог"
            />
            <Button variant={nextSession ? 'secondary' : 'primary'} size={!isScreenSm ? 'm' : 'l'}>
              Записаться повторно
            </Button>
          </div>
        </>
      ) : (
        <EmptyCard
          type="psychologist"
          title={NO_PSYCHO_MESSAGE.title}
          paragraph={NO_PSYCHO_MESSAGE.description}
          textBtn={NO_PSYCHO_MESSAGE.textBtn}
          href={NO_PSYCHO_MESSAGE.href}
        />
      )}
    </div>
  );
}

MyPsychologist.propTypes = {
  psychologist: shape({
    first_name: string,
    last_name: string,
    id: string,
    avatar: string,
    price: number,
    duration: number,
  }).isRequired,
  nextSession: shape({ string }).isRequired,
};
