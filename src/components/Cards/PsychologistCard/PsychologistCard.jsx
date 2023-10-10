import React from 'react';
import moment from 'moment';
import './PsychologistCard.css';
import PropTypes from 'prop-types';
import Avatar from '../../generic/Avatar/Avatar';
import ProfileInfoBlock from '../../templates/ProfileInfoBlock/ProfileInfoBlock';
import Text from '../../generic/Text/Text';
import PsychoName from '../../generic/PsychoName/PsychoName';
import { DATE_FORMAT } from '../../../constants/constants';
import { getAge, getMonthName, getSessionTime } from '../../../utils/helpers';
import Button from '../../generic/Button/Button';

export default function PsychologistCard({ type, psychologist }) {
  const {
    first_name: firstName,
    avatar,
    last_name: lastName,
    experience,
    about,
    price,
    themes,
    approaches,
    institutes,
    courses,
    age,
    duration,
    slots,
  } = psychologist;

  const day = moment(slots[0].datetime_from, DATE_FORMAT);

  const getEducations = (educations) => (
    <ul className="psycho-card__list">
      {educations.map((education) => (
        <li key={education.id} className="psycho-card__education">
          <Text type="span">{education.graduation_year}</Text>
          <Text type="span">{education.title}</Text>
          <Text type="span">{`Направление: ${education.speciality}`}</Text>
          {education !== educations[courses.length - 1] && educations.length > 1 && (
            <span className="line" />
          )}
        </li>
      ))}
    </ul>
  );

  const getTags = (tags, tagType) => (
    <ul className="psycho-card__list">
      {tags.map((tag) => (
        <li key={tag.title}>
          <Text type={tagType}>{tag.title}</Text>
        </li>
      ))}
    </ul>
  );

  return (
    <div className={`psycho-card ${type ? 'psycho-card_type_full' : ''}`}>
      <Avatar size="l" src={avatar} />
      <PsychoName
        name={`${firstName} ${lastName}`}
        description={type === 'full' ? getAge(age) : `Опыт ${getAge(experience)}`}
        leftText={`Сессия ${duration} мин.`}
        rightText={`${Number(price).toLocaleString()} руб.`}
      />
      <div
        className={`psycho-card__content ${
          type === 'full' ? 'psycho-card__content_type_full' : ''
        }`}
      >
        {type !== 'full' && <Text>{about}</Text>}
        <div className="next-sessions">
          <h3 className="next-sessions__title">Ближайшее свободное время</h3>
          <Text>{getMonthName(day)}</Text>
          <ul className="psycho-card__list">
            {slots.map((slot) => (
              <li key={slot.id} className="next-session__slot">
                <Text>{getSessionTime(moment(slot.datetime_from, DATE_FORMAT))}</Text>
              </li>
            ))}
          </ul>
          <Button variant="text" href="/make_appointment">
            Выбрать другое время
          </Button>
        </div>
        {type === 'full' && (
          <>
            <ProfileInfoBlock title="О себе">
              <Text>{about}</Text>
            </ProfileInfoBlock>
            <ProfileInfoBlock title="Опыт работы">
              <Text>{getAge(experience)}</Text>
            </ProfileInfoBlock>
            <ProfileInfoBlock title="С чем работает">{getTags(themes, 'tag')}</ProfileInfoBlock>
            <ProfileInfoBlock title="Подход в работе">{getTags(approaches)}</ProfileInfoBlock>
            <ProfileInfoBlock title="Высшее образование">
              <ul className="psycho-card__list">{getEducations(institutes)}</ul>
            </ProfileInfoBlock>
            <ProfileInfoBlock title="Повышение квалификации">
              <ul className="psycho-card__list">{getEducations(courses)}</ul>
            </ProfileInfoBlock>
          </>
        )}
      </div>
    </div>
  );
}

PsychologistCard.propTypes = {
  type: PropTypes.string,
  psychologist: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    age: PropTypes.number,
    experience: PropTypes.number,
    about: PropTypes.string,
    price: PropTypes.number,
    themes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    approaches: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    institutes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        speciality: PropTypes.string,
        graduation_year: PropTypes.string,
      })
    ),
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        speciality: PropTypes.string,
        graduation_year: PropTypes.string,
      })
    ),
    id: PropTypes.string,
    avatar: PropTypes.string,
    duration: PropTypes.number,
    slots: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        datetime_from: PropTypes.string,
      })
    ),
  }).isRequired,
};

PsychologistCard.defaultProps = {
  type: '',
};
