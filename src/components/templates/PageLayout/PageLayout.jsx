import React from 'react';
import './PageLayout.css';
import { node, string } from 'prop-types';
import Title from '../../generic/Title/Title';

export default function PageLayout({
  children, title,
  nav, section,
  type, layoutClassName,
  childrenClassname,
}) {
  return (
    <section
      className="page-layout-container"
    >
      <div className={
        `page-layout${type === 'psychologist' ? ` page-layout_type_${type}` : ''}${
          layoutClassName ? ` ${layoutClassName}` : ''}`
        }
      >
        {nav && <div className="page-layout__nav">{nav}</div>}
        {section && <div className="page-layout__section">{section}</div>}
        <Title text={title} />
        <div
          className={`page-layout__children${childrenClassname ? ` ${childrenClassname}` : ''}`}
        >
          {children}
        </div>
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
  layoutClassName: string,
  childrenClassname: string,
};

PageLayout.defaultProps = {
  nav: '',
  section: '',
  type: '',
  layoutClassName: '',
  childrenClassname: '',
};
