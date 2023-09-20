import React from 'react';
import './SessionPlanner.css';
import Button from '../generic/Button/Button';
import { TIMING_HOURS, TIMING_MINUTES } from '../../constants/db';
import TimePicker from '../generic/TimePicker/TimePicker';

export default function SessionPlanner() {
  return (
    <div className="session-planner">
      <div className="session-planner__time-picker">
        <h2 className="session-planner__text">Время начала сессии</h2>

        <div className="session-planner__timing-box">
          <TimePicker id={1} timingList={TIMING_HOURS} />
          :
          <TimePicker id={2} timingList={TIMING_MINUTES} />
        </div>
      </div>

      <Button type="submit" className="session-planner__button-add">
        + Добавить
      </Button>
    </div>
  );
}
