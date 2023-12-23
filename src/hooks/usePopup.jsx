import React, { createContext, useState, useContext, useMemo } from 'react';
import { node } from 'prop-types';

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [value, setValue] = useState(null);
  const [onClick, setOnClick] = useState(null);

  const contextValue = useMemo(() => ({ value, setValue, onClick, setOnClick }), [value, onClick]);

  return (
    <PopupContext.Provider value={contextValue}>
      {children}
    </PopupContext.Provider>
  );
}

PopupProvider.propTypes = {
  children: node.isRequired,
};

export const usePopup = () => useContext(PopupContext);
