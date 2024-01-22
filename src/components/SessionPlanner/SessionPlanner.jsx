import React from 'react';
import './SessionPlanner.css';
import Button from '../generic/Button/Button';
import { TIMING_HOURS, TIMING_MINUTES } from '../../constants/db';
import { POPUP_DATA } from '../../constants/constants';
import TimePicker from '../generic/TimePicker/TimePicker';
import { usePopup } from '../../hooks/usePopup';
import { useResize } from '../../hooks/useResize';

export default function SessionPlanner() {
  const { setValue } = usePopup();
  const { isScreenMd } = useResize();

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
      <Button
        onClick={() => setValue(POPUP_DATA.ConfirmDeletePopup)}
        type="submit"
        className="session-planner__button-add"
        size={isScreenMd ? 'm' : 'l'}
      >
        + Добавить
      </Button>
    </div>
  );
}
