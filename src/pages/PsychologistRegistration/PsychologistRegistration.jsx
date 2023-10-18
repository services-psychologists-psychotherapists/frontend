import React from 'react';
import './PsychologistRegistration.css';
// import PageLayout from '../../components/templates/PageLayout/PageLayout';
import FileUpload from '../../components/Fieldset/FileUpload/FileUpload';

export default function PsychologistRegistration() {
  return (
    // <div>
    <FileUpload
      text="Прикрепить документ об образовании"
    />
    // </div>
  );
}
