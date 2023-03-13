import React from "react";
import "./style.scss";

const Bookcar = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bookcar_container">
      <h4>Book a car</h4>
      <form class="box-form" onSubmit={formSubmitHandler}>
        <div class="box-form__car-type">
          <label>
            <i class="fa-solid fa-car"></i> &nbsp; Select Your Car Type <b>*</b>
          </label>
          <select>
            <option>Select your car type</option>
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Passat CC">VW Passat CC</option>
          </select>
        </div>
        <div class="box-form__car-type">
          <label>
            <i class="fa-solid fa-location-dot"></i> &nbsp; Pick-up <b>*</b>
          </label>
          <select>
            <option>Select pick up location</option>
            <option>Belgrade</option>
            <option>Novi Sad</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
        </div>
        <div class="box-form__car-type">
          <label>
            <i class="fa-solid fa-location-dot"></i> &nbsp; Drop-of <b>*</b>
          </label>
          <select>
            <option>Select drop off location</option>
            <option>Novi Sad</option>
            <option>Belgrade</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
        </div>
        <div class="box-form__car-time">
          <label for="picktime">
            <i class="fa-regular fa-calendar-days "></i> &nbsp; Pick-up <b>*</b>
          </label>
          <input id="picktime" type="date" value="" />
        </div>
        <div class="box-form__car-time">
          <label for="droptime">
            <i class="fa-regular fa-calendar-days "></i> &nbsp; Drop-of <b>*</b>
          </label>
          <input id="droptime" type="date" value="" />
        </div>
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Bookcar;
