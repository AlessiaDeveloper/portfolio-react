import React, { createContext, useContext, useState } from "react";

const CaroselloContext = createContext();

export const useCaroselloContext = () => useContext(CaroselloContext);

export const CaroselloProvider = ({ children }) => {
  const [showCarosello1, setShowCarosello1] = useState(true);

  const toggleCarosello = () => {
    setShowCarosello1((prevShowCarosello1) => !prevShowCarosello1);
  };

  const value = {
    showCarosello1,
    toggleCarosello,
  };

  return (
    <CaroselloContext.Provider value={value}>
      {children}
    </CaroselloContext.Provider>
  );
};
