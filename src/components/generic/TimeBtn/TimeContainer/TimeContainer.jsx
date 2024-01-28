import React, { useEffect, useState } from 'react';
import { arrayOf, string, func, number, shape } from 'prop-types';
import './TimeContainer.css';
import TimeCellBtn from '../TimeCellBtn/TimeCellBtn';
import useHorizontalScroll from '../../../../hooks/useHorizontalScroll';
import { LENGTH_TO_START_SCROLLING } from '../../../../constants/constants';

export default function TimeContainer({
  timeCells, containerClassName, onClick, selectedTime
}) {
  const [isScrollStatus, setIsScrollStatus] = useState(false);
  const scrollOnClick = useHorizontalScroll();

  const getScrollAttributes = () => {
    if (isScrollStatus) {
      return { ...scrollOnClick };
    }
    return {};
  };

  const getSelectedTimeCell = (time) => selectedTime === time;

  useEffect(() => {
    const getScrollStatus = () => {
      if (timeCells.length > LENGTH_TO_START_SCROLLING) {
        setIsScrollStatus(true);
      } else {
        setIsScrollStatus(false);
      }
    };

    getScrollStatus();
  }, [isScrollStatus, timeCells.length]);

  return (
    <ul
      className={
        `time-container scrollbar${containerClassName ? ` ${containerClassName}` : ''}`
      }
      {...getScrollAttributes()}
    >
      {timeCells.length > 0 ? (
        timeCells.map((el) => (
          <li key={el.id}>
            <TimeCellBtn
              time={el.time}
              onClick={onClick}
              active={getSelectedTimeCell(el.time)}
              id={el.id}
            />
          </li>
        ))
      ) : (
        // TODO: При перезагрузке стр. сначала появляется not-found
        <li className="time-container__not-found">Свободное время для записи отсутствует</li>
      )}
    </ul>
  );
}

TimeContainer.propTypes = {
  timeCells: arrayOf(
    shape({
      id: number.isRequired,
      time: string.isRequired,
    })
  ).isRequired,
  containerClassName: string,
  onClick: func.isRequired,
  selectedTime: string,
};

TimeContainer.defaultProps = {
  containerClassName: '',
  selectedTime: '',
};
