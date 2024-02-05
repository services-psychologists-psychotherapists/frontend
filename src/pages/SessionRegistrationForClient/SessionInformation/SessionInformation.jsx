import React from 'react';
import { number, string, func, bool } from 'prop-types';
import './SessionInformation.css';
import Button from '../../../components/generic/Button/Button';
import { getPriceWithSpace, formattedToday } from '../../../utils/helpers';

export default function SessionInformation({
  selectedTime, isLoading,
  selectedDay, sessionDuration,
  sessionPrice, onClick,
  className,
}) {
  return (
    <div className={`session-information${className ? ` ${className}` : ''}`}>
      <p className="session-information__title">Информация о сессии</p>
      <p className="session-information__description">{`Онлайн, ${sessionDuration} минут`}</p>
      <div className="session-information__cell">
        <span>Дата</span>
        <span>{selectedDay}</span>
      </div>
      <div className="session-information__cell session-information__cell_type_time">
        <span>Время</span>
        <span>{selectedTime}</span>
      </div>
      <div className="session-information__cell session-information__cell_type_price">
        <span>Стоимость</span>
        <span className="session-information__cell_type_price-item">
          {`${getPriceWithSpace(sessionPrice)} руб.`}
        </span>
      </div>
      <Button
        type="button"
        size="l"
        variant="primary"
        disabled={isLoading || !selectedTime}
        onClick={() => onClick()}
      >
        {isLoading ? 'Оплата...' : 'Оплатить'}
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
  className: string,
  isLoading: bool.isRequired,
};

SessionInformation.defaultProps = {
  selectedDay: formattedToday,
  selectedTime: '',
  sessionDuration: 0,
  sessionPrice: 0,
  onClick: () => {},
  className: '',
};
