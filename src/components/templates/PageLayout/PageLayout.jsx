import React, { useRef, useState } from 'react';
import './PageLayout.css';
import { node, string, bool } from 'prop-types';
import Title from '../../generic/Title/Title';
import Header from '../../Header/Header';
import useOutsideClick from '../../../hooks/useOnClickOutside';

// prettier-ignore
export default function PageLayout({
  children,
  title,
  isLoggedIn,
  nav,
  section
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const ref = useRef();

  const handleClickMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  useOutsideClick(ref, () => setIsNavOpen(false));

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <section className="page-layout">
        <Title text={title} />
        {nav && (
          <>
            <button className="burger" onClick={handleClickMenu} />
            <div ref={ref} className={`page-layout__nav ${isNavOpen ? 'page-layout__nav_opened' : ''}`}>{nav}</div>
          </>
        )}
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
