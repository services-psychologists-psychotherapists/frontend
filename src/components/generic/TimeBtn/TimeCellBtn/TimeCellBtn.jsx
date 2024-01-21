import React from 'react';
import { string, func, bool, number } from 'prop-types';
import './TimeCellBtn.css';

export default function TimeCellBtn({ time, onClick, active, id }) {
  return (
    // TODO: Нужна ли кнопка в отдельном компоненте или объединить с контейнером
    <button
      className={`time-cell${active ? ' time-cell_active' : ''}`}
      onClick={onClick}
      id={id}
    >
      {time}
    </button>
  );
}

TimeCellBtn.propTypes = {
  time: string.isRequired,
  onClick: func.isRequired,
  active: bool,
  id: number.isRequired,
};

TimeCellBtn.defaultProps = {
  active: false,
};
