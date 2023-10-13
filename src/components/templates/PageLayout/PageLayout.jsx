import React, { useRef, useState } from 'react';
import './PageLayout.css';
import { node, string } from 'prop-types';
import Title from '../../generic/Title/Title';
import useOutsideClick from '../../../hooks/useOnClickOutside';

// prettier-ignore
export default function PageLayout({
  children,
  title,
  nav,
  section,
  type
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ref = useRef();

  const handleClickMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useOutsideClick(ref, () => setIsNavOpen(false));

  return (
    <section
      className={`page-layout ${type === 'psychologist' ? `page-layout_type_${type}` : ''}`}
    >
      <Title text={title} />
      {nav && <div className="page-layout__nav">{nav}</div>}
      <div className="page-layout__children">{children}</div>
      {section && <div className="page-layout__section">{section}</div>}
    </section>
  );
}

PageLayout.propTypes = {
  children: node.isRequired,
  title: string.isRequired,
  nav: node,
  section: node,
  type: string,
};

PageLayout.defaultProps = {
  nav: '',
  section: '',
  type: '',
};
