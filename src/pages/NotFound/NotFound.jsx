import React from 'react';
import './NotFound.css';
import Button from '../../components/generic/Button/Button';

export default function NotFound() {
  return (
    <section className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <Button href="/" variant="secondary">
        На главную
      </Button>
    </section>
  );
}
