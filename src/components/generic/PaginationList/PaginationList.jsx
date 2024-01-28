import React, { useState, useEffect } from 'react';
import { number, func } from 'prop-types';
import './PaginationList.css';
import usePagination from '../../../hooks/usePagination';
import { NUMBER_OF_PAGES_DISPLAYED } from '../../../constants/constants';

export default function PaginationList({
  pageCount, onPageClick, currentPage
}) {
  const pagesNumArray = usePagination(pageCount);

  const getPagesArrMatrix = (arr, arrSize) => {
    const res = [];

    for (let i = 0; i < Math.ceil(arr.length / arrSize); i += 1) {
      res[i] = arr.slice(i * arrSize, i * arrSize + arrSize);
    }

    return res;
  };

  const pagesArrMatrix = getPagesArrMatrix(pagesNumArray, NUMBER_OF_PAGES_DISPLAYED) || [];

  const [currentArrIndex, setCerrentArrIndex] = useState(0);

  const switchNextPage = () => {
    setCerrentArrIndex(currentArrIndex + 1);
  };

  const switchPrevPage = () => {
    setCerrentArrIndex(currentArrIndex - 1);
  };

  const getDisabledPrevSwitch = (curArrIndex) => (
    curArrIndex === 0 ? 'disabled-switch' : ''
  );

  const getDisabledNextSwitch = (curArrIndex) => (
    curArrIndex === pagesArrMatrix.length - 1 ? 'disabled-switch' : ''
  );

  useEffect(() => {
    if (currentPage === 1) {
      setCerrentArrIndex(0);
    }
  }, [pageCount]);

  return (
    <div className="pagination-list">
      <button
        className={`pagination-list__previous${
          ` ${getDisabledPrevSwitch(currentArrIndex)}`}`}
        onClick={() => switchPrevPage()}
        disabled={getDisabledPrevSwitch(currentArrIndex)}
      />
      <ul className="pagination-list__container">
        {pagesArrMatrix[currentArrIndex] && pagesArrMatrix[currentArrIndex].map((i) => (
          <li key={i}>
            <button
              className={`pagination-list__page-number${currentPage === i
                ? ' pagination-list__page-number_active' : ''}`}
              onClick={() => onPageClick(i)}
            >
              {i}
            </button>
          </li>
        ))}
      </ul>
      <button
        className={`pagination-list__next${
          ` ${getDisabledNextSwitch(currentArrIndex)}`}`}
        onClick={() => switchNextPage()}
        disabled={getDisabledNextSwitch(currentArrIndex)}
      />
    </div>
  );
}

PaginationList.propTypes = {
  pageCount: number.isRequired,
  onPageClick: func,
  currentPage: number.isRequired,
};

PaginationList.defaultProps = {
  onPageClick: () => {},
};
