import './PsychologistProfile.css';
import React from 'react';
import Header from '../Header/Header';

export default function PsychologistProfile() {
  return (
    <>
      <Header isLoggedIn={false} />
      <div className="psychologist-page" />
    </>
  );
}
