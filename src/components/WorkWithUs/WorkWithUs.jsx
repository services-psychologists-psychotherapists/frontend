import React from 'react';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';
import './WorkWithUs.css';
import { WORK_WITH_US } from '../../constants/constants';

export default function WorkWithUs() {
  return (
    <section className="work-with-us">
      <BlockWithTitle size="m" title="Почему выгодно работать с нами?">
        <ul className="work-list list">
          {
            WORK_WITH_US.map((el) => (
              <li key={el.id} className="work-list__item">
                <p className="work-list__title">{el.title}</p>
                <img src={el.icon} alt={el.title} className="work-list__icon" />
              </li>
            ))
          }
        </ul>
      </BlockWithTitle>
    </section>
  );
}
