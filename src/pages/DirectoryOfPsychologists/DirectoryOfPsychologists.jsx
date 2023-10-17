import React from 'react';
import './DirectoryOfPsychologists.css';
import Title from '../../components/generic/Title/Title';
import PsychoFilters from './PsychoFilters/PsychoFilters';

export default function DirectoryOfPsychologists() {
  return (
    <section className="directory-psychologists">
      <Title titleLvl="2" size="m" text="Каталог психологов" />
      <PsychoFilters />
    </section>
  );
}
