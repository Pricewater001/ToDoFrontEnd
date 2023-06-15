import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }else{
      setIsLoggedIn(false);
    }
  });

  const login = (data) => {
    console.log("context " , data);
    setIsLoggedIn(true);
    setUser(data)
    console.log(data);
    localStorage.setItem('token', data.token);
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
  };

  const contextValue = {
    isLoggedIn,
    login,
    logout,
    user,
    flag,
    setFlag
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
