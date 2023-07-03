import React, { createContext, useState } from 'react';

// Creamos el contexto
export const LocacionesContext = createContext();

// Creamos el proveedor del contexto
export const LocacionesProvider = ({ children }) => {
  const [locacionesGuardadas, setLocacionesGuardadas] = useState([]);

  return (
    <LocacionesContext.Provider value={[locacionesGuardadas, setLocacionesGuardadas]}>
      {children}
    </LocacionesContext.Provider>
  );
};
