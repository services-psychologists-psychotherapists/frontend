import React, { useState } from 'react';
import './TimePicker.css';
import PropTypes from 'prop-types';
import vectorOpened from './vector_opened.svg';
import vectorClosed from './vector_closed.svg';

export default function TimePicker({ onClick, timingList, isShow }) {
  const classesItems = `session-planner__timing-item  ${
    isShow ? 'session-planner__item_visible' : ''
  }`;
  const [isValueTime, setIsValueTime] = useState('');

  function changeSelect(e) {
    setIsValueTime(e.target.value);
  }

  const titleValue = isValueTime || timingList[0];

  return (
    <div className="session-planner__select">
      <p className="session-planner__number">{titleValue}</p>
      <button
        className="session-planner__button-drop"
        type="button"
        onClick={onClick}
      >
        {!isShow ? (
          <img
            className="session-planner__vector-icon"
            src={vectorClosed}
            alt="arrow"
          />
        ) : (
          <img
            className="session-planner__vector-icon"
            src={vectorOpened}
            alt="arrow"
          />
        )}
      </button>
      <div className="session-planner__timing-list">
        {timingList.map((el) => (
          <input
            onClick={changeSelect}
            type="button"
            value={el}
            className={classesItems}
            key={el}
          />
        ))}
      </div>
    </div>
  );
}

TimePicker.propTypes = {
  onClick: PropTypes.func,
  timingList: PropTypes.arrayOf(PropTypes.string).isRequired,
  isShow: PropTypes.bool.isRequired,
};

TimePicker.defaultProps = {
  onClick: () => {},
};
