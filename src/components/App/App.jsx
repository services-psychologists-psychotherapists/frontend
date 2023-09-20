import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';
import CurrentUserContext from '../../Context/CurrentUserContext';
import { USER } from '../../constants/db';
import ButtonUp from '../generic/ButtonUp/ButtonUp';

export default function App() {
  return (
    <div className="page">
      <CurrentUserContext.Provider value={USER}>
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={false} />} />
          <Route path="/for_a_therapist" element={<PageForPsychologists />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </CurrentUserContext.Provider>
      <ButtonUp />
      <Footer />
    </div>
  );
}
