import React from 'react';
import { string, number, oneOfType } from 'prop-types';
import './MiniPsychoCard.css';
import BlockWithTitle from '../../templates/BlockWithTitle/BlockWithTitle';
import Avatar from '../../generic/Avatar/Avatar';
import PsychoName from '../../generic/PsychoName/PsychoName';
import { getDurationOfYears } from '../../../utils/helpers';
import noAvatar from '../../../images/no-avatar.svg';

export default function MiniPsychoCard({
  cardClasses, experience,
  avatar, firstName,
  lastName, speciality,
}) {
  return (
    <BlockWithTitle title={speciality} size="xs">
      <div className={`mini-psycho-card ${cardClasses}`}>
        <Avatar size="m" src={avatar} />
        <PsychoName
          name={`${firstName} ${lastName}`}
          leftText={speciality}
          rightText={`Опыт ${getDurationOfYears(experience)}`}
        />
      </div>
    </BlockWithTitle>
  );
}

MiniPsychoCard.propTypes = {
  avatar: string,
  cardClasses: string,
  firstName: string,
  lastName: string,
  experience: oneOfType([string, number]),
  speciality: string,
};

MiniPsychoCard.defaultProps = {
  cardClasses: '',
  avatar: noAvatar,
  firstName: '',
  lastName: '',
  experience: '',
  speciality: 'Психолог',
};
