import React, { useState, useEffect, useRef } from 'react';
import './DirectoryOfPsychologists.css';
import Title from '../../components/generic/Title/Title';
import PsychoFilters from './PsychoFilters/PsychoFilters';
import PsychologistCard from '../../components/Cards/PsychologistCard/PsychologistCard';
import { getPsychologists, getPsychologist } from '../../utils/auth';
import Button from '../../components/generic/Button/Button';
import useOutsideClick from '../../hooks/useOnClickOutside';
import PaginationList from '../../components/generic/PaginationList/PaginationList';
import { useForm } from '../../hooks/useForm';

export default function DirectoryOfPsychologists() {
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

  useEffect(() => {
    if (!totalPsychoCount) {
      setTotalPsychoCount(1);
    }
  }, [totalPsychoCount]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // TODO: Переделать на стейт?
  const numberOfPsychoDisplayed = 7;

  const getNumberOfPages = (psychoCount, psychoDisplayed) => {
    const pages = Math.ceil(
      psychoCount / psychoDisplayed
    );

    if (pages) {
      setNumberOfPages(pages);
    }
  };

  const handleClosePopup = () => {
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
    try {
      const psychologists = await getPsychologists(data);

      setPsychologistList(psychologists.results);
      setTotalPsychoCount(psychologists.count);
    } catch (err) {
      console.log(err);
      setPsychologistList([]);
      setTotalPsychoCount(1);
    }
  };

  const handleSwitchPage = (num) => {
    setCurrentPage(num);
    getPsychologistList({
      page: num,
      limit: numberOfPsychoDisplayed,
      ...lastAppliedFilters
    });
  };

  const getFilteredPsycho = () => {
    setLastAppliedFilters(dataForRequest);
    setCurrentPage(1);
    getPsychologistList({
      page: 1,
      limit: numberOfPsychoDisplayed,
      ...dataForRequest
    });
  };

  useEffect(() => {
    getPsychologistList({
      page: 1,
      limit: numberOfPsychoDisplayed,
    });
  }, []);

  useEffect(() => {
    getNumberOfPages(totalPsychoCount, numberOfPsychoDisplayed);
  }, [totalPsychoCount]);

  return (
    <>
      <section className="directory-psychologists">
        <Title
          titleLvl="2"
          size="m"
          text="Каталог психологов"
          className="directory-psychologists__title"
        />
        <div className="directory-psychologists__container">
          <div className="directory-psychologists__filter">
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
          </div>
          <div className="directory-psychologists__psycho-list">
            <ul className="directory-psychologists__psycho-list_container">
              {psychologistList && psychologistList.length > 0 ? psychologistList.map((i) => (
                <li key={i.id}>
                  <div
                    className="directory-psychologists__psycho-list_item"
                    onClick={(e) => handleOpenPsychoCard(i.id, e)}
                    role="button"
                    tabIndex="0"
                    onKeyDown={(e) => handleOpenPsychoCard(i.id, e)}
                  >
                    <PsychologistCard
                      psychologist={i}
                    />
                  </div>
                </li>
              ))
                : (
                  <li className="directory-psychologists__psycho-list_error">
                    <Title titleLvl="3" size="s" text="Психологи не найдены" />
                  </li>
                )}
            </ul>
          </div>
        </div>
        <PaginationList
          pageCount={numberOfPages}
          onPageClick={handleSwitchPage}
          currentPage={currentPage}
        />
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
              <PsychologistCard type="full" psychologist={psychologistFullData} />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
