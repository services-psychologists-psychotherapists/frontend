import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage/HomePage';
import PageForPsychologists from '../../pages/PageForPsychologists/PageForPsychologists';
import Footer from '../Footer/Footer';
import NotFound from '../../pages/NotFound/NotFound';

export default function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={false} />} />
        <Route path="/for_a_therapist" element={<PageForPsychologists />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}
