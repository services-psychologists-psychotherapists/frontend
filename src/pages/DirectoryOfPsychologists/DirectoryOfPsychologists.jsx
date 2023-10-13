import React from 'react';
import { bool } from 'prop-types';
import './DirectoryOfPsychologists.css';
import Header from '../../components/Header/Header';
import Title from '../../components/generic/Title/Title';
import PsychoFilters from './PsychoFilters/PsychoFilters';

export default function DirectoryOfPsychologists({ isLoggedIn }) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="directory-psychologists">
        <Title titleLvl="2" size="m" text="Каталог психологов" />
        <PsychoFilters />
      </section>
    </>
  );
}

DirectoryOfPsychologists.propTypes = {
  isLoggedIn: bool.isRequired,
};
