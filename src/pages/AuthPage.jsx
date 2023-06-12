import React, { useState } from "react";
import SignupComponent from "../components/SignupComponent";
import LoginComponent from "../components/LoginComponent";
import logo from "../assets/imgs/PwClogo.png";

const AuthPage = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);

  return (
    <div className="background">
      <img src={logo} alt="Logo" width={140} height={140} />
      {showLoginForm ? <LoginComponent setShowLoginForm={setShowLoginForm} /> : <SignupComponent  setShowLoginForm={setShowLoginForm}  />}
    </div>
  );
};

export default AuthPage;
