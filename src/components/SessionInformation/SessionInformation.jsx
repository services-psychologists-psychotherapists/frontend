import React from 'react';
import { number, string, func } from 'prop-types';
import './SessionInformation.css';
import Button from '../generic/Button/Button';
import { getPriceWithSpace, formattedToday } from '../../utils/helpers';

export default function SessionInformation({
  selectedTime,
  selectedDay,
  sessionDuration,
  sessionPrice,
  onClick,
}) {
  return (
    <div className="session-information">
      {/* TODO: использовать компоненты?
      на текущем этапе нет возможности т.к. компонентам нельзя задать доп. классы
      */}
      <p className="session-information__title">Информация о сессии</p>
      {/* TODO: получать инф. из карточки психолога
      онлайн/оффлайн? */}
      <p className="session-information__description">{`Онлайн, ${sessionDuration} минут`}</p>
      <div className="session-information__cell">
        <span>Дата</span>
        <span>{selectedDay}</span>
      </div>
      <div className="session-information__cell session-information__cell_time">
        <span>Время</span>
        <span>{selectedTime}</span>
      </div>
      <div className="session-information__cell session-information__cell_price">
        <span>Стоимость</span>
        <span className="session-information__cell_price-item">
          {`${getPriceWithSpace(sessionPrice)} руб.`}
        </span>
      </div>
      <Button
        type="button"
        size="l"
        variant="primary"
        onClick={() => onClick()}
      >
        Оплатить
      </Button>
    </div>
  );
}

SessionInformation.propTypes = {
  selectedDay: string,
  selectedTime: string,
  sessionDuration: number,
  sessionPrice: number,
  onClick: func,
};

SessionInformation.defaultProps = {
  selectedDay: formattedToday,
  selectedTime: '',
  sessionDuration: 0,
  sessionPrice: 0,
  onClick: () => {},
};
