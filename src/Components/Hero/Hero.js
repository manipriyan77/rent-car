import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../images/hero/main-car.png";
import "./style.scss";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_content">
        <div className="left_hero_container">
          <h4>Plan your trip now</h4>
          <h1>Save big with our car rental</h1>
          <p>
            Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up
            options and much more.
          </p>
          <div className="hero_btn_container">
            <Link to="/">
              Book Ride
              <i className="fa-solid fa-circle-check"></i>
            </Link>
            <Link to="">
              Learn more<i className="fa-solid fa-angle-right"></i>
            </Link>
          </div>
        </div>
        <img src={heroImg} alt="" className="hero_img" />
      </div>
    </div>
  );
};

export default Hero;
