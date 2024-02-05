import React, { useState, useContext, useEffect } from 'react';
import { object, string, func, bool } from 'prop-types';
import moment from 'moment';
import './PsychologistAccount.css';
import PageLayout from '../../components/templates/PageLayout/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import {
  PSYCHOLOGIST_ACCOUNT_LINKS,
  PSYCHOLOGIST_ACCOUNT_TITLES,
  POPUP_DATA,
} from '../../constants/constants';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import Calendar from '../../components/Сalendar/Сalendar';
import CardOfSession from '../../components/Cards/CardOfSession/CardOfSession';
import SessionPlanner from '../../components/SessionPlanner/SessionPlanner';
import SlotsList from '../../components/SlotsList/SlotsList';
import UserProfileData from '../../components/UserProfileData/UserProfileData';
import CurrentUserContext from '../../contexts/CurrentUserContext';
import {
  createSession, getSlots, deleteSlot,
} from '../../utils/services/psychologistService';
import { deleteSession } from '../../utils/services/Api';
import { usePopup } from '../../hooks/usePopup';
import { useResize } from '../../hooks/useResize';
import { useForm } from '../../hooks/useForm';
import {
  convertLocalToUtc, showPopupWithValue,
  getSessionTime, today, formattedToday,
} from '../../utils/helpers';

export default function PsychologistAccount({
  curPath, docIdForRequest,
  uploadDocuments, setDocIdForRequest,
  changePsychoAvatar, changePsychologistData,
  isLoading, setIsLoading,
}) {
  const { isScreenMd } = useResize();
  const {
    values, setSelectedDropdownItems,
    handleChange,
    selectedDropdownItems,
    errors,
  } = useForm();
  const { setValue, setOnClick } = usePopup();
  const currentUser = useContext(CurrentUserContext);
  const [isListLoading, setIsListLoading] = useState(false);
  const [selectedDay, setSelectedDay] = useState(today);
  const [slots, setSlots] = useState([]);
  const [curSlots, setCurSlots] = useState([]);
  const [nextSession, setNextSession] = useState({});
  const [selectedSlot, setSelectedSlot] = useState({});
  const path = curPath.pathname.split('_').pop();
  const jwt = localStorage.getItem('jwt');

  const getSlotsForCurDay = (dates, curDay) => {
    let isNextSession = false;

    const curSlotsData = dates.filter((date) => {
      const isSameDay = moment(date).isSame(moment(curDay), 'day');

      if (isSameDay && date.is_free === false && !isNextSession) {
        isNextSession = true;
        setNextSession(date);
      }

      return isSameDay;
    });

    if (!isNextSession) {
      setNextSession({});
    }

    setCurSlots(curSlotsData);
  };

  const convertDatesToLocale = (dates) => {
    const slotsData = [];

    dates.forEach((curDate) => {
      const newDate = { ...curDate };
      const dateFrom = getSessionTime(moment(newDate.datetime_from, 'DD.MM.YYYY HH:mm'));
      const dateTo = getSessionTime(moment(newDate.datetime_to, 'DD.MM.YYYY HH:mm'));
      const [date] = dateFrom.split(' ');

      newDate.datetime_from = dateFrom;
      newDate.datetime_to = dateTo;
      newDate.date = date;

      slotsData.push(newDate);
    });

    if (slotsData.length > 0) {
      getSlotsForCurDay(slotsData, selectedDay);
      setSlots(slotsData);
    }
  };

  const getSlotsData = async (date) => {
    try {
      const sessions = await getSlots(date, jwt);

      convertDatesToLocale(sessions);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteSession = async () => {
    setIsListLoading(true);
    try {
      await deleteSession(selectedSlot.session_id, jwt);

      getSlotsData(formattedToday);
      showPopupWithValue(
        setValue,
        'Сессия отменена успешно!',
      );
    } catch (err) {
      console.log(err);
      showPopupWithValue(
        setValue,
        'При отмене сессии произошла ошибка',
      );
    } finally {
      setIsListLoading(false);
    }
  };

  const handleDeleteSessionClick = () => {
    setOnClick(() => handleDeleteSession);
    setValue(POPUP_DATA.deleteSession);
  };

  const deleteCurrentSlot = async () => {
    setIsListLoading(true);
    try {
      await deleteSlot(selectedSlot.id, jwt);

      getSlotsData(formattedToday);
      showPopupWithValue(
        setValue,
        'Окно успешно удалено',
      );
    } catch (err) {
      console.log(err);

      showPopupWithValue(
        setValue,
        'Произошла ошибка при удалении окна',
      );
    } finally {
      setIsListLoading(false);
    }
  };

  const handleDeleteSlotClick = () => {
    setOnClick(() => deleteCurrentSlot);
    setValue(POPUP_DATA.deleteSlot);
  };

  const cancelSessionForClient = async () => {
    setIsListLoading(true);
    try {
      await deleteSession(nextSession.session_id, jwt);

      setNextSession({});
      getSlotsData(formattedToday);
      showPopupWithValue(
        setValue,
        'Сессия отменена успешно!',
      );
    } catch (err) {
      console.log(err);
      showPopupWithValue(
        setValue,
        'При отмене сессии произошла ошибка',
      );
    } finally {
      setIsListLoading(false);
    }
  };

  const handleCancelSession = () => {
    setOnClick(() => cancelSessionForClient);
    setValue(POPUP_DATA.deleteSession);
  };

  const createNewSession = async (data, token) => {
    setIsLoading(true);
    try {
      await createSession(data, token);

      showPopupWithValue(
        setValue,
        'Сессия успешно создана',
      );
      getSlotsData(formattedToday);
    } catch (err) {
      console.log(err);

      showPopupWithValue(
        setValue,
        'Произошла ошибка при создании сессии',
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getSlotsData(formattedToday);
  }, []);

  useEffect(() => {
    getSlotsForCurDay(slots, selectedDay);
  }, [selectedDay, slots]);

  return (
    <PageLayout
      layoutClassName="psychologist-account__layout"
      childrenClassname="psychologist-account__content"
      title={PSYCHOLOGIST_ACCOUNT_TITLES[path].pageTitle}
      nav={(
        <NavLinksList
          list={PSYCHOLOGIST_ACCOUNT_LINKS}
          isList
          variant="menu"
        />
      )}
    >
      {path !== 'profile' ? (
        <section className="psychologist-account">
          <div className="psychologist-account__content-block">
            <Calendar
              titleText={PSYCHOLOGIST_ACCOUNT_TITLES[path].calendarTitle}
              onDateCellClick={setSelectedDay}
              selectedDate={selectedDay.format('DD.MM.YYYY')}
            />
            <BlockWithTitle
              title={PSYCHOLOGIST_ACCOUNT_TITLES[path].reminderTitle}
            >
              {path !== 'schedule' ? (
                <CardOfSession
                  session={nextSession}
                  type="client"
                  handleDeleteSessionClick={handleCancelSession}
                />
              ) : (
                <SessionPlanner
                  createNewSession={createNewSession}
                  values={values}
                  setSelectedDropdownItems={setSelectedDropdownItems}
                  handleChange={handleChange}
                  selectedDropdownItems={selectedDropdownItems}
                  errors={errors}
                  setValue={setValue}
                  isScreenMd={isScreenMd}
                  jwt={jwt}
                  selectedDay={selectedDay}
                  isLoading={isLoading}
                  convertLocalToUtc={convertLocalToUtc}
                />
              )}
            </BlockWithTitle>
          </div>
          <SlotsList
            sessions={curSlots}
            selectedDay={selectedDay}
            curPath={curPath}
            handleDeleteSessionClick={handleDeleteSessionClick}
            handleDeleteSlotClick={handleDeleteSlotClick}
            setSelectedSlot={setSelectedSlot}
            selectedSlot={selectedSlot}
            isListLoading={isListLoading}
          />
        </section>
      ) : null}
      {path === 'profile' ? (
        <UserProfileData
          currentUser={currentUser}
          docIdForRequest={docIdForRequest}
          uploadDocuments={uploadDocuments}
          setDocIdForRequest={setDocIdForRequest}
          changePsychoAvatar={changePsychoAvatar}
          changePsychologistData={changePsychologistData}
          curPath={curPath}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      ) : null}
    </PageLayout>
  );
}

PsychologistAccount.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  curPath: object.isRequired,
  docIdForRequest: string.isRequired,
  uploadDocuments: func.isRequired,
  setDocIdForRequest: func.isRequired,
  changePsychoAvatar: func.isRequired,
  changePsychologistData: func.isRequired,
  isLoading: bool.isRequired,
  setIsLoading: func.isRequired,
};
