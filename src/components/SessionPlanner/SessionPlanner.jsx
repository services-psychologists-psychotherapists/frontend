import React from 'react';
import './SessionPlanner.css';
import Button from '../generic/Button/Button';
import { TIMING_HOURS, TIMING_MINUTES, POPUP_DATA } from '../../constants/db';
import TimePicker from '../generic/TimePicker/TimePicker';
import Popup from '../generic/Popup/Popup';
import PopupProvider, { usePopup } from '../../hooks/useOpenPopup';

export default function SessionPlanner() {
  const { setValue } = usePopup();
  return (
    <div className="session-planner">
      <PopupProvider>
        <div className="session-planner__time-picker">
          <h2 className="session-planner__text">Время начала сессии</h2>

          <Popup buttonsQuantity={2} buttonText="Отменить" buttonTextAdd="Вернуться назад" />

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
        >
          + Добавить
        </Button>
      </PopupProvider>
    </div>
  );
}
