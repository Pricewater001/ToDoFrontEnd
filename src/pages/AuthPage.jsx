import React, { useContext, useEffect, useState  } from "react";
import SignupComponent from "../components/SignupComponent";
import LoginComponent from "../components/LoginComponent";
import logo from "../assets/imgs/PwClogo.png";
import {  useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";


const AuthPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false); 
   const { isLoggedIn } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
    }
  },[isLoggedIn]);

  

  return (
    <div className="background">
      <img src={logo} alt="Logo" width={140} height={140} />
      {showLoginForm ? <LoginComponent setShowLoginForm={setShowLoginForm} /> : <SignupComponent  setShowLoginForm={setShowLoginForm}  />}
    </div>
  );
};

export default AuthPage;
