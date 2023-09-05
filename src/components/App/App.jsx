import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../../pages/HomePage';

export default function App() {
  return (
    <div className="page">
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={false} />} />
      </Routes>
    </div>
  );
}
