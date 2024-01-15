import React from 'react';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';
import './WorkWithUs.css';
import { WORK_WITH_US } from '../../constants/constants';

export default function WorkWithUs() {
  return (
    <section className="work-with-us">
      <BlockWithTitle
        size="m"
        title="Почему выгодно работать с нами?"
        constainerClasses="work-with-us__container"
        titleLvl="2"
      >
        <ul className="work-with-us__list list">
          {WORK_WITH_US.map((el) => (
            <li key={el.id} className="work-with-us__list-item">
              <p className="work-with-us__list-text">{el.title}</p>
              <img src={el.icon} alt={el.title} className="work-with-us__list-icon" />
            </li>
          ))}
        </ul>
      </BlockWithTitle>
    </section>
  );
}
