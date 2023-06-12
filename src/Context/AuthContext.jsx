import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); // Set isLoggedIn based on the presence of token
  }, []);

  const login = () => {
    setIsLoggedIn(true);
    history.push('/'); // Redirect to home page after successful login
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token'); // Remove token from storage on logout
    history.push('/Auth'); // Redirect to Auth page after logout
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
