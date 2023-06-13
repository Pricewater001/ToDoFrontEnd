import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  });

  const login = () => {
    setIsLoggedIn(true);
    // localStorage.setItem('token', 'test');
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const contextValue = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
