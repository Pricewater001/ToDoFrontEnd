import React, { useContext, useEffect } from "react";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Hero from '../components/Hero Section/Hero'
import Footer from '../components/footer/Footer'
import Header from "../components/header/Header"
import MainContent from '../components/main/MainContent'

const HomePage = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/auth");
    }
  }, [isLoggedIn]);
  return (
    <div>
      <Header />
      <Hero />
      <MainContent />
      <Footer />
    </div>
  );
};

export default HomePage;
