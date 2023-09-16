import React from 'react';
import './PageTemplate.css';
import { node, string, bool } from 'prop-types';
import Title from '../generic/Title/Title';
import Header from '../Header/Header';

export default function PageTemplate({
  children,
  title,
  isLoggedIn,
  nav,
  section
}) {
  return (
    <section className="page-template">
      <Header isLoggedIn={isLoggedIn} />
      <Title text={title} />
      <div className="page-template__nav">{nav}</div>
      <div className="page-template__children">{children}</div>
      {section && <div className="page-template__section">{section}</div>}
    </section>
  );
}

PageTemplate.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  isLoggedIn: bool.isRequired,
  nav: node,
  section: node,
};

PageTemplate.defaultProps = {
  nav: '',
  section: ''
};
