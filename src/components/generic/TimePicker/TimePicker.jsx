import React, { useState } from 'react';
import './TimePicker.css';
import PropTypes from 'prop-types';
import vectorOpened from './vector_opened.svg';
import vectorClosed from './vector_closed.svg';

export default function TimePicker({ timingList }) {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const classesItems = `session-planner__timing-list  ${
    isShowDropdown ? 'session-planner__list_visible' : ''
  }`;
  const [isValueTime, setIsValueTime] = useState('');

  const classOpen = `${isShowDropdown ? 'session-planner_style_open' : ''}`;

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!isShowDropdown) {
      setIsShowDropdown(true);
    } else {
      setIsShowDropdown(false);
    }
  };

  function changeSelect(e) {
    setIsValueTime(e.target.value);
    setIsShowDropdown(false);
  }

  const titleValue = isValueTime || timingList[0];

  return (
    <div className={`session-planner__select ${classOpen}`}>
      <p className={`session-planner__number ${classOpen}`}>{titleValue}</p>
      <button className="session-planner__button-drop" type="submit" onClick={handleButtonClick}>
        {!isShowDropdown ? (
          <img className="session-planner__vector-icon" src={vectorClosed} alt="arrow" />
        ) : (
          <img className="session-planner__vector-icon" src={vectorOpened} alt="arrow" />
        )}
      </button>
      <div className={classesItems}>
        {timingList.map((el) => (
          <input
            onClick={changeSelect}
            type="button"
            value={el}
            className="session-planner__timing-item"
            key={el}
          />
        ))}
      </div>
    </div>
  );
}

TimePicker.propTypes = {
  timingList: PropTypes.arrayOf(PropTypes.string).isRequired,
};
