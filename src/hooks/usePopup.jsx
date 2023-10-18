import React, { createContext, useState, useContext } from 'react';
import { node } from 'prop-types';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [value, setValue] = useState(null);

  return (
    // кстати у него еще странная анимация закрытия из-за null видимо
    // eslint-disable-next-line
    <PopupContext.Provider value={{ value, setValue }}>{children}</PopupContext.Provider>
  );
}

PopupProvider.propTypes = {
  children: node.isRequired,
};

export const usePopup = () => useContext(PopupContext);
