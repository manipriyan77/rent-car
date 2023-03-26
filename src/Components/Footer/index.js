import React from "react";
import "./style.scss";
const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_about">
        <h4>
          <span>car</span>Rental
        </h4>
        <p>
          We offers a big range of vehicles for all your driving needs. We have the perfect car to
          meet your needs.
        </p>
        <a href="tel:+  (123) -456-789"> (123) -456-789</a>
        <a href="mailto:  carrental@gmail.com"> carrental@gmail.com</a>
      </div>
      <div className="footer_company">
        <h4>company</h4>
        <ul>
          <li>New york</li>
          <li>careers</li>
          <li>Mobile</li>
          <li>Blog</li>
          <li>how we work</li>
        </ul>
      </div>
      <div className="footer_working_hours">
        <h4>working hours</h4>
        <p>Mon - Fri: 9:00AM - 9:00PM</p>
        <p>Sat: 9:00AM - 10:00PM</p>
        <p>Sun: Closed</p>
      </div>
      <div className="footer_subscription">
        <h4>subscription</h4>
        <p>Subscribe your Email address for latest news & updates.</p>
        <form action="">
          <input type="email" name="" id="" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Footer;
