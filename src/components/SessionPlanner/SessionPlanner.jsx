import React, { useState } from 'react';
import './SessionPlanner.css';
import Button from '../generic/Button/Button';
import { TIMING_HOURS, TIMING_MINUTES } from '../../constants/db';
import TimePicker from '../generic/TimePicker/TimePicker';

export default function SessionPlanner() {
  const [isShowDropdown, setIsShowDropdown] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    if (!isShowDropdown) {
      setIsShowDropdown(true);
    } else {
      setIsShowDropdown(false);
    }
  };
  return (
    <div className="session-planner">
      <div className="session-planner__time-picker">
        <h2 className="session-planner__text">Время начала сессии</h2>
        <div className="session-planner__timing-box">
          <TimePicker
            onClick={handleButtonClick}
            timingList={TIMING_HOURS}
            isShow={isShowDropdown}
          />
          <p className="session-planner__time-colon">:</p>
          <TimePicker
            onClick={handleButtonClick}
            timingList={TIMING_MINUTES}
            isShow={isShowDropdown}
          />
        </div>
      </div>
      <Button type="submit" className="session-planner__button-add">
        + Добавить
      </Button>
    </div>
  );
}
