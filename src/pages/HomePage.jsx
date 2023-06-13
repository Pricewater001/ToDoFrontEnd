import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/auth");
        }
      },[isLoggedIn]);
  return (
    <div>HomePage</div>
  )
}

export default HomePage