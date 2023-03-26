import React from "react";
import { Link } from "react-router-dom";
import Accordion from "../../Components/Accordion";
import Bookcar from "../../Components/BookCar/Bookcar";
import Hero from "../../Components/Hero/Hero";
import Models from "../../Components/Models";
import "./style.scss";

const Home = () => {
  return (
    <div className="home_container">
      <Hero />
      <Bookcar />
      <Models />
      <Accordion />
    </div>
  );
};

export default Home;
