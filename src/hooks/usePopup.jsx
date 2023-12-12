import React, { createContext, useState, useContext } from 'react';
import { node } from 'prop-types';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [value, setValue] = useState(null);
  const [onClick, setOnClick] = useState(null);

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <PopupContext.Provider value={{ value, setValue, onClick, setOnClick }}>
      {children}
    </PopupContext.Provider>
  );
}

PopupProvider.propTypes = {
  children: node.isRequired,
};

export const usePopup = () => useContext(PopupContext);
