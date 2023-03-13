import React from "react";
import { Link } from "react-router-dom";
import Bookcar from "../../Components/BookCar/Bookcar";
import Hero from "../../Components/Hero/Hero";
import "./style.scss";

const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <Bookcar />
    </div>
  );
};

export default Home;