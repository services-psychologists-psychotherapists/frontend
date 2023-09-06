import React from 'react';
import './AboutProblems.css';
import Title from '../generic/Title/Title';
import { CUSTOMER_PROBLEMS } from '../../constants/constants';

export default function AboutProblems() {
  return (
    <section className="about-problems">
      <Title size="m" text="С чем помогают наши психологи?" />
      <ul className="about-problems__cards">
        {CUSTOMER_PROBLEMS.map((el) => (
          <li className="about-problems__card" key={el.problemNumber}>
            <p className="about-problems__description">{el.problemName}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
