import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';
import './PsychologistCard.css';
import PropTypes from 'prop-types';
import Avatar from '../../generic/Avatar/Avatar';
import ProfileInfoBlock from '../../templates/ProfileInfoBlock/ProfileInfoBlock';
import Text from '../../generic/Text/Text';
import PsychoName from '../../generic/PsychoName/PsychoName';
import { DATE_FORMAT } from '../../../constants/constants';
import {
  getMonthName,
  getFormattedLocalTimeArr,
  getDurationOfYears,
} from '../../../utils/helpers';
import Button from '../../generic/Button/Button';
import TimeContainer from '../../generic/TimeBtn/TimeContainer/TimeContainer';

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
    id
  } = psychologist;

  const [timeCells, setTimeCells] = useState([]);
  const [sessionDate, setSessionDate] = useState('');
  const navigate = useNavigate();

  const getTheNearestDate = (slotsList) => {
    if (slotsList && slotsList.length > 0) {
      const day = moment(slotsList[0].datetime_from, DATE_FORMAT);

      return getMonthName(day);
    }

    return '';
  };

  useEffect(() => {
    const cells = getFormattedLocalTimeArr(slots);

    if (cells.length > 0) {
      setTimeCells(cells[0].cells);
      setSessionDate(cells[0].date);
    }
  }, [slots]);

  const getEducations = (educations) => (
    <ul className="psycho-card__list psycho-card__list-education">
      {educations.map((education) => (
        <li key={education.title} className="psycho-card__education">
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

  const handleTimeClick = (e) => {
    e.stopPropagation();
    navigate(
      `/client_account_session-registration/${id}/${sessionDate}/${e.target.innerText}/${e.target.id}`
    );
  };

  return (
    <div className={`psycho-card ${type ? 'psycho-card_type_full' : ''}`}>
      <Avatar size="l" src={avatar} />
      <PsychoName
        name={`${firstName} ${lastName}`}
        description={type === 'full' ? getDurationOfYears(age) : `Опыт ${getDurationOfYears(experience)}`}
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
          <Text>{getTheNearestDate(slots)}</Text>
          <TimeContainer
            timeCells={timeCells || []}
            containerClassName="psycho-card__time-container"
            onClick={handleTimeClick}
          />
          <Button variant="text" href={`/client_account_session-registration/${id}`}>
            Выбрать другое время
          </Button>
        </div>
        {type === 'full' && (
          <>
            {about && (
              <ProfileInfoBlock title="О себе">
                <Text>{about}</Text>
              </ProfileInfoBlock>
            )}
            {age && (
              <ProfileInfoBlock title="Опыт работы">
                <Text>{getDurationOfYears(experience)}</Text>
              </ProfileInfoBlock>
            )}
            {(themes && themes.length > 0) && (
              <ProfileInfoBlock title="С чем работает">{getTags(themes, 'tag')}</ProfileInfoBlock>
            )}
            {(approaches && approaches.length > 0) && (
              <ProfileInfoBlock title="Подход в работе">{getTags(approaches)}</ProfileInfoBlock>
            )}
            {(institutes && institutes.length > 0) && (
              <ProfileInfoBlock title="Высшее образование">
                <div className="psycho-card__list">{getEducations(institutes)}</div>
              </ProfileInfoBlock>
            )}
            {(courses && courses.length > 0) && (
              <ProfileInfoBlock title="Повышение квалификации">
                <div className="psycho-card__list">{getEducations(courses)}</div>
              </ProfileInfoBlock>
            )}
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
