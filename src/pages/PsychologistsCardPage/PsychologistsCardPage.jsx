import React from 'react';
import PropTypes from 'prop-types';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import PsychologistCard from '../../components/Cards/PsychologistCard/PsychologistCard';
import Button from '../../components/generic/Button/Button';

export default function PsychologistCardPage({ psychologist, isLoggedIn, navigate }) {
  const { first_name: firstName, last_name: lastName } = psychologist;

  const goBack = () => {
    navigate(-1);
  };

  return (
    <PageLayout
      section={<Button variant="text-icon" onClick={goBack}>Назад</Button>}
      title={`Психолог ${firstName} ${lastName}`}
      isLoggedIn={isLoggedIn}
      type="psychologist"
    >
      <PsychologistCard psychologist={psychologist} type="full" />
    </PageLayout>
  );
}

PsychologistCardPage.propTypes = {
  psychologist: PropTypes.shape({
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    age: PropTypes.number,
    experience: PropTypes.number,
    about: PropTypes.string,
    price: PropTypes.number,
    themes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    approaches: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
      })
    ),
    institutes: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        speciality: PropTypes.string,
        graduation_year: PropTypes.string,
        document: PropTypes.string,
      })
    ),
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        speciality: PropTypes.string,
        graduation_year: PropTypes.string,
        document: PropTypes.string,
      })
    ),
    id: PropTypes.string,
    avatar: PropTypes.string,
    duration: PropTypes.number,
    slots: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        datetime_from: PropTypes.string,
      })
    ),
  }).isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  navigate: PropTypes.func.isRequired,
};
