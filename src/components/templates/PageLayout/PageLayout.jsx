import React from 'react';
import './PageLayout.css';
import { node, string, bool } from 'prop-types';
import Title from '../../generic/Title/Title';
import Header from '../../Header/Header';

export default function PageLayout({
  children, title, isLoggedIn, nav, section
}) {
  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="page-layout">
        <Title text={title} />
        {nav && <div className="page-layout__nav">{nav}</div>}
        <div className="page-layout__children">{children}</div>
        {section && <div className="page-layout__section">{section}</div>}
      </section>
    </>
  );
}

PageLayout.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  isLoggedIn: bool.isRequired,
  nav: node,
  section: node,
};

PageLayout.defaultProps = {
  nav: '',
  section: '',
};
