import React, { useState } from 'react';
import moment from 'moment';
import './PsychologistAccount.css';
import { useLocation } from 'react-router-dom';
import PageLayout from '../../components/templates/PageTemplate/PageLayout';
import NavLinksList from '../../components/NavLinksList/NavLinksList';
import {
  PSYCHOLOGIST_ACCOUNT_LINKS,
  PSYCHOLOGIST_ACCOUNT_TEXT,
  SLOTS,
} from '../../constants/db';
import BlockWithTitle from '../../components/templates/BlockWithTitle/BlockWithTitle';
import Calendar from '../../components/Сalendar/Сalendar';
import CardOfSession from '../../components/generic/CardOfSession/CardOfSession';
import SessionPlanner from '../../components/SessionPlanner/SessionPlanner';
import ScrollerBlock from '../../components/generic/ScrollerBlock/ScrollerBlock';
import Title from '../../components/generic/Title/Title';
import Popup from '../../components/generic/Popup/Popup';

export default function PsychologistAccountTemplate() {
  const { pathname } = useLocation();

  // prettier-ignore
  const text = {
    calendarText: `${pathname === '/psychologist_account_schedule' ? PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInShedule : PSYCHOLOGIST_ACCOUNT_TEXT.txtCalendarInMain}`,
    reminderText: `${pathname === '/psychologist_account_schedule' ? PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInShedule : PSYCHOLOGIST_ACCOUNT_TEXT.txtReminderInMain}`,
    titleText: `${(pathname === '/psychologist_account' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitleInMain)
      || (pathname === '/psychologist_account_schedule' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitlenShedule)
      || (pathname === '/psychologist_account_profile' && PSYCHOLOGIST_ACCOUNT_TEXT.txtTitleInProfile)}`,
  };

  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const openPopup = () => {
    setIsOpenPopup(true);
  };

  const closePopup = () => {
    setIsOpenPopup(false);
  };

  return (
    // prettier-ignore
    <PageLayout
      title={text.titleText}
      isLoggedIn
      nav={<NavLinksList list={PSYCHOLOGIST_ACCOUNT_LINKS} direction="column" variant="violet" />}
    >
      <section className="psychologist-account">
        {pathname !== '/psychologist_account_profile'
          ? (
            <>
              <Popup
                isOpen={isOpenPopup}
                onClose={closePopup}
                buttonsQuantity={2}
                titleText="Вы уверены, что хотите отменить сессию?"
                buttonText="Отменить"
                buttonTextAdd="Вернуться назад"
              />

              <BlockWithTitle size="xs" title={text.calendarText}>
                <Calendar />
              </BlockWithTitle>

              <BlockWithTitle size="xs" title={text.reminderText}>
                {pathname !== '/psychologist_account_schedule' ? <CardOfSession session={SLOTS[0]} /> : <SessionPlanner onClick={openPopup} />}
              </BlockWithTitle>
            </>
          ) : null}

        {pathname !== '/psychologist_account_profile' ? (<ScrollerBlock slots={SLOTS} selectedDay={moment()} />) : (<Title text="ПРОФИЛЬ ЗДЕСЬ" />)}

      </section>
    </PageLayout>
  );
}
