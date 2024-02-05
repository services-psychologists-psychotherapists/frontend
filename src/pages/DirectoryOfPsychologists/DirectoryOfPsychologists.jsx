import React, { useState, useEffect, useRef, useContext } from 'react';
import { bool, func } from 'prop-types';
import './DirectoryOfPsychologists.css';
import Title from '../../components/generic/Title/Title';
import PsychoFilters from './PsychoFilters/PsychoFilters';
import PsychologistCard from '../../components/Cards/PsychologistCard/PsychologistCard';
import { getPsychologists, getPsychologist } from '../../utils/services/Api';
import Button from '../../components/generic/Button/Button';
import useOutsideClick from '../../hooks/useOnClickOutside';
import PaginationList from '../../components/generic/PaginationList/PaginationList';
import { useForm } from '../../hooks/useForm';
import { NUMBER_OF_PSYCHO_DISPLAYED } from '../../constants/constants';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import Preloader from '../../components/generic/Preloader/Preloader';
import CurrentUserContext from '../../contexts/CurrentUserContext';

export default function DirectoryOfPsychologists({
  isLoggedIn, setIsLoading, isLoading
}) {
  // TODO: сделать анимацию переключения страниц
  const {
    values, handleChange, errors,
    resetForm, selectedDropdownItems,
    resetCustomValue, setCustomValue,
    dataForRequest,
  } = useForm();
  const [psychologistList, setPsychologistList] = useState([]);
  const [isOpenPopup, setOpenPopup] = useState(false);
  const [psychologistFullData, setPsychologistFullData] = useState({});
  const [totalPsychoCount, setTotalPsychoCount] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastAppliedFilters, setLastAppliedFilters] = useState({});
  const psychoRef = useRef(null);
  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
    if (!totalPsychoCount) {
      setTotalPsychoCount(1);
    }
  }, [totalPsychoCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getNumberOfPages = (psychoCount, psychoDisplayed) => {
    const pages = Math.ceil(
      psychoCount / psychoDisplayed
    );

    if (pages) {
      setNumberOfPages(pages);
    }
  };

  const handleClosePopup = (e) => {
    if (e && (e.target.className.includes('popup-visible')
      || e.target.className === 'popup__button-close')) {
      return;
    }

    setOpenPopup(false);
  };

  useOutsideClick(psychoRef, handleClosePopup);

  const getPsychologistData = async (id) => {
    try {
      const psychologist = await getPsychologist(id);

      setPsychologistFullData(psychologist);
      setOpenPopup(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOpenPsychoCard = (id, e) => {
    if (e.type === 'click' || e.key === 'Enter') {
      getPsychologistData(id);
    }
  };

  const getPsychologistList = async (data) => {
    setIsLoading(true);
    try {
      const psychologists = await getPsychologists(data);

      setPsychologistList(psychologists.results);
      setTotalPsychoCount(psychologists.count);
    } catch (err) {
      console.log(err);
      setPsychologistList([]);
      setTotalPsychoCount(1);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSwitchPage = (num) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setCurrentPage(num);
    getPsychologistList({
      page: num,
      limit: NUMBER_OF_PSYCHO_DISPLAYED,
      ...lastAppliedFilters
    });
  };

  const getFilteredPsycho = () => {
    setLastAppliedFilters(dataForRequest);
    setCurrentPage(1);
    getPsychologistList({
      page: 1,
      limit: NUMBER_OF_PSYCHO_DISPLAYED,
      ...dataForRequest
    });
  };

  useEffect(() => {
    getPsychologistList({
      page: 1,
      limit: NUMBER_OF_PSYCHO_DISPLAYED,
    });
  }, []);

  useEffect(() => {
    getNumberOfPages(totalPsychoCount, NUMBER_OF_PSYCHO_DISPLAYED);
  }, [totalPsychoCount]);

  return (
    <>
      <section className="directory-psychologists">
        <BlockWithTitle
          title="Каталог психологов"
          titleLvl="2"
          size="m"
          constainerClasses="directory-psychologists__template"
        >
          <div className="directory-psychologists__container">
            <PsychoFilters
              values={values}
              handleChange={handleChange}
              errors={errors}
              resetForm={resetForm}
              selectedDropdownItems={selectedDropdownItems}
              handleFilterSubmit={getFilteredPsycho}
              resetCustomValue={resetCustomValue}
              setCustomValue={setCustomValue}
            />
            <div className="directory-psychologists__psycho-list">
              {isLoading
                ? <Preloader preloaderClassName="directory-psychologists__preloader" /> : (
                  <ul className="directory-psychologists__psycho-list-container">
                    {psychologistList && psychologistList.length > 0 ? psychologistList.map((i) => (
                      <li key={i.id}>
                        <div
                          className="directory-psychologists__psycho-list-item"
                          onClick={(e) => handleOpenPsychoCard(i.id, e)}
                          role="button"
                          tabIndex="0"
                          onKeyDown={(e) => handleOpenPsychoCard(i.id, e)}
                        >
                          <PsychologistCard
                            psychologist={i}
                            isLoggedIn={isLoggedIn}
                            currentUser={currentUser}
                          />
                        </div>
                      </li>
                    )) : (
                      <li className="directory-psychologists__psycho-list_error">
                        <Title titleLvl="3" size="s" text="Психологи не найдены" />
                      </li>
                    )}
                  </ul>
                )}

            </div>
          </div>
          <PaginationList
            pageCount={numberOfPages}
            onPageClick={handleSwitchPage}
            currentPage={currentPage}
          />
        </BlockWithTitle>
      </section>
      <section className={`psychologists-popup ${isOpenPopup ? 'psychologists-popup_open' : ''}`}>
        {Object.values(psychologistFullData).length > 0 && (
          <div className="psychologists-popup__container">
            <Button
              variant="text-icon"
              onClick={() => handleClosePopup()}
              className="psychologists-popup__btn"
            >
              Назад
            </Button>
            <div className="psychologists-popup__content" ref={psychoRef}>
              <Title
                titleLvl="2"
                size="m"
                text={`${psychologistFullData.speciality} ${
                  psychologistFullData.first_name} ${psychologistFullData.last_name}`}
              />
              <PsychologistCard
                type="full"
                psychologist={psychologistFullData}
                isLoggedIn={isLoggedIn}
                currentUser={currentUser}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}

DirectoryOfPsychologists.propTypes = {
  isLoggedIn: bool.isRequired,
  setIsLoading: func.isRequired,
  isLoading: bool.isRequired,
};
