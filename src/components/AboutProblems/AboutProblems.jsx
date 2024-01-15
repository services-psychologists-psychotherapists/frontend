import React from 'react';
import './AboutProblems.css';
import { CUSTOMER_PROBLEMS } from '../../constants/constants';
import BlockWithTitle from '../templates/BlockWithTitle/BlockWithTitle';

export default function AboutProblems() {
  return (
    <section className="about-problems">
      <BlockWithTitle
        size="m"
        title="С чем помогают наши психологи?"
        constainerClasses="about-problems__container"
        titleLvl="2"
      >
        <ul className="about-problems__list">
          {CUSTOMER_PROBLEMS.map((el) => (
            <li className="about-problems__card" key={el.imgAlt}>
              <p className="about-problems__description">{el.problemName}</p>
              <img className="about-problems__img" src={el.imgPath} alt={el.imgAlt} />
            </li>
          ))}
        </ul>
      </BlockWithTitle>
    </section>
  );
}
