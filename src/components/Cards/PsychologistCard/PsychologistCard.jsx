import React, { useEffect, useState } from 'react';
import moment from 'moment';
import './PsychologistCard.css';
import {
  bool, string, shape, number, arrayOf, object,
} from 'prop-types';
import Avatar from '../../generic/Avatar/Avatar';
import InfoBlock from './InfoBlock/InfoBlock';
import Text from '../../generic/Text/Text';
import PsychoName from '../../generic/PsychoName/PsychoName';
import { DATE_FORMAT } from '../../../constants/constants';
import {
  getMonthName,
  getFormattedLocalTimeArr,
  getDurationOfYears,
  showPopupWithValue,
} from '../../../utils/helpers';
import Button from '../../generic/Button/Button';
import TimeContainer from '../../generic/TimeBtn/TimeContainer/TimeContainer';
import { usePopup } from '../../../hooks/usePopup';
import useVerticalScroll from '../../../hooks/useVerticalScroll';

export default function PsychologistCard({
  type, psychologist, isLoggedIn, currentUser,
}) {
  const scrollOnClick = useVerticalScroll();
  const {
    first_name: firstName,
    last_name: lastName,
    avatar, experience,
    about, price, themes,
    approaches, institutes, courses,
    age, duration, slots, id
  } = psychologist;
  const { setValue } = usePopup();

  const [timeCells, setTimeCells] = useState([]);
  const [sessionDate, setSessionDate] = useState('');

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
    } else {
      setTimeCells([]);
      setSessionDate('');
    }
  }, [slots]);

  const getEducations = (educations) => (
    <ul className="psycho-card__list psycho-card__list_type_education">
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

  const getPath = (e, loginStatus, curUser, path) => {
    e.stopPropagation();

    if (loginStatus) {
      if (curUser.role === 'client') {
        return window.open(path, '_blank');
      }
      return showPopupWithValue(setValue, 'Для записи на сессию необходимо быть клиентом');
    }

    return window.open('/signin', '_blank');
  };

  const handleTimeClick = (e) => {
    getPath(
      e,
      isLoggedIn,
      currentUser,
      `/client_account_session-registration/${
        id}/${sessionDate}/${e.target.innerText}/${e.target.id}`
    );
  };

  return (
    <div className="psycho-card scrollbar" {...scrollOnClick}>
      <div className="psycho-card__header">
        <Avatar size="l" src={avatar} />
        <PsychoName
          name={`${firstName} ${lastName}`}
          description={type === 'full' ? getDurationOfYears(age) : `Опыт ${getDurationOfYears(experience)}`}
          leftText={`Сессия ${duration} мин`}
          rightText={`${Number(price).toLocaleString()} руб`}
        />
      </div>
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
          <Button
            className="psycho-card__btn"
            variant="text"
            onClick={(e) => getPath(
              e,
              isLoggedIn,
              currentUser,
              `/client_account_session-registration/${id}`
            )}
          >
            Выбрать другое время
          </Button>
        </div>
        {type === 'full' && (
          <>
            {about && (
              <InfoBlock title="О себе">
                <Text>{about}</Text>
              </InfoBlock>
            )}
            {age && (
              <InfoBlock title="Опыт работы">
                <Text>{getDurationOfYears(experience)}</Text>
              </InfoBlock>
            )}
            {(themes && themes.length > 0) && (
              <InfoBlock title="С чем работает">{getTags(themes, 'tag')}</InfoBlock>
            )}
            {(approaches && approaches.length > 0) && (
              <InfoBlock title="Подход в работе">{getTags(approaches)}</InfoBlock>
            )}
            {(institutes && institutes.length > 0) && (
              <InfoBlock title="Высшее образование">
                <div className="psycho-card__list">{getEducations(institutes)}</div>
              </InfoBlock>
            )}
            {(courses && courses.length > 0) && (
              <InfoBlock title="Повышение квалификации">
                <div className="psycho-card__list">{getEducations(courses)}</div>
              </InfoBlock>
            )}
          </>
        )}
      </div>
    </div>
  );
}

PsychologistCard.propTypes = {
  isLoggedIn: bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  currentUser: object.isRequired,
  type: string,
  psychologist: shape({
    first_name: string,
    last_name: string,
    age: number,
    experience: number,
    about: string,
    price: number,
    themes: arrayOf(
      shape({
        id: number,
        title: string,
      })
    ),
    approaches: arrayOf(
      shape({
        id: number,
        title: string,
      })
    ),
    institutes: arrayOf(
      shape({
        title: string,
        speciality: string,
        graduation_year: string,
      })
    ),
    courses: arrayOf(
      shape({
        title: string,
        speciality: string,
        graduation_year: string,
      })
    ),
    id: string,
    avatar: string,
    duration: number,
    slots: arrayOf(
      shape({
        id: number,
        datetime_from: string,
      })
    ),
  }).isRequired,
};

PsychologistCard.defaultProps = {
  type: '',
};
