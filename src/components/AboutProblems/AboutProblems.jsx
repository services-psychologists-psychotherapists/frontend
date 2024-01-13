import React from 'react';
import './AboutProblems.css';
import Title from '../generic/Title/Title';
import { CUSTOMER_PROBLEMS } from '../../constants/constants';

export default function AboutProblems() {
  return (
    <section className="about-problems">
      <div className="about-problems__container">
        <Title
          size="m"
          text="С чем помогают наши психологи?"
        />
        <ul className="about-problems__list">
          {CUSTOMER_PROBLEMS.map((el) => (
            <li className="about-problems__card" key={el.imgAlt}>
              <p className="about-problems__description">{el.problemName}</p>
              <img className="about-problems__img" src={el.imgPath} alt={el.imgAlt} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
