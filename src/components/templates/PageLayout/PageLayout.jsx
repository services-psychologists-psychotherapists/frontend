import React from 'react';
import './PageLayout.css';
import { node, string } from 'prop-types';
import Title from '../../generic/Title/Title';

export default function PageLayout({
  children,
  title,
  nav,
  section,
  type,
  classes
}) {
  return (
    <section
      className="page-layout__container"
    >
      <div className={
        `page-layout ${type === 'psychologist' ? `page-layout_type_${type}` : ''}${
          classes ? ` ${classes}` : ''}`
        }
      >
        {nav && <div className="page-layout__nav">{nav}</div>}
        <Title text={title} />
        <div className="page-layout__children">{children}</div>
        {section && <div className="page-layout__section">{section}</div>}
      </div>
    </section>
  );
}

PageLayout.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  nav: node,
  section: node,
  type: string,
  classes: string,
};

PageLayout.defaultProps = {
  nav: '',
  section: '',
  type: '',
  classes: '',
};
