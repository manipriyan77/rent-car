import React, { useState } from "react";
import Reservation from "../Reservation";
import "./style.scss";

const Bookcar = () => {
  const [formSubmitValues, setFormSubmitValues] = useState({
    car_type: "",
    pickup_location: "",
    drop_location: "",
    pickup_date: "",
    drop_date: "",
  });
  const [errors, setErrors] = useState({});
  const [showReservation, setShowReservation] = useState(false);

  const formErrors = () => {
    const { car_type, pickup_location, drop_location, drop_date, pickup_date } = formSubmitValues;
    if (car_type === "" || car_type === null || car_type === undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          car_type: "Please enter car type",
        };
      });
    } else if (car_type !== "" || car_type !== null || car_type !== undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          car_type: "",
        };
      });
    }
    if (pickup_location === "" || pickup_location === null || pickup_location === undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          pickup_location: "Please enter pickup location",
        };
      });
    } else if (
      pickup_location !== "" ||
      pickup_location !== null ||
      pickup_location !== undefined
    ) {
      setErrors((prev) => {
        return {
          ...prev,
          pickup_location: "",
        };
      });
    }
    if (drop_location === "" || drop_location === null || drop_location === undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          drop_location: "Please enter drop Location",
        };
      });
    } else if (drop_location !== "" || drop_location !== null || drop_location !== undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          drop_location: "",
        };
      });
    }
    if (drop_date === "" || drop_date === null || drop_date === undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          drop_date: "Please enter drop date",
        };
      });
    } else if (drop_date !== "" || drop_date !== null || drop_date !== undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          drop_date: "",
        };
      });
    }
    if (pickup_date === "" || pickup_date === null || pickup_date === undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          pickup_date: "Please enter pick up date",
        };
      });
    } else if (pickup_date !== "" || pickup_date !== null || pickup_date !== undefined) {
      setErrors((prev) => {
        return {
          ...prev,
          pickup_date: "",
        };
      });
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    formErrors();
    if (
      formSubmitValues.car_type === "" ||
      null ||
      formSubmitValues.drop_date === "" ||
      null ||
      formSubmitValues.pickup_date === "" ||
      null ||
      formSubmitValues.pickup_location === "" ||
      null ||
      formSubmitValues.drop_location === "" ||
      null
    ) {
      setShowReservation(false);
    } else {
      setShowReservation(true);
    }
  };

  const inputChangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setFormSubmitValues((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  let date = new Date().toISOString().substring(0, 10);

  const closeReservation = () => {
    setShowReservation(false);
  };

  return (
    <div className="bookcar_container">
      <h4>Book a car</h4>
      <form className="box-form" onSubmit={formSubmitHandler}>
        <div className="box-form__car-type">
          <label>
            <i className="fa-solid fa-car"></i> &nbsp; Select Your Car Type <b>*</b>
          </label>
          <select onChange={inputChangeHandler} name="car_type">
            <option>Select your car type</option>
            <option value="Audi A1 S-Line">Audi A1 S-Line</option>
            <option value="VW Golf 6">VW Golf 6</option>
            <option value="Toyota Camry">Toyota Camry</option>
            <option value="BMW 320 ModernLine">BMW 320 ModernLine</option>
            <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
            <option value="VW Passat CC">VW Passat CC</option>
          </select>
          {errors.car_type && <p>{errors.car_type}</p>}
        </div>
        <div className="box-form__car-type">
          <label>
            <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up <b>*</b>
          </label>
          <select name="pickup_location" onChange={inputChangeHandler}>
            <option>Select pick up location</option>
            <option>Belgrade</option>
            <option>Novi Sad</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
          {errors.pickup_location && <p>{errors.pickup_location}</p>}
        </div>
        <div className="box-form__car-type">
          <label>
            <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of <b>*</b>
          </label>
          <select name="drop_location" onChange={inputChangeHandler}>
            <option>Select drop off location</option>
            <option>Novi Sad</option>
            <option>Belgrade</option>
            <option>Nis</option>
            <option>Kragujevac</option>
            <option>Subotica</option>
          </select>
          {errors.drop_location && <p>{errors.drop_location}</p>}
        </div>
        <div className="box-form__car-time">
          <label htmlFor="picktime">
            <i className="fa-regular fa-calendar-days "></i> &nbsp; Pick-up <b>*</b>
          </label>
          {/* {console.log(date, "date")}
          {console.log(typeof date)} */}
          <input
            id="picktime"
            type="date"
            placeholder="dd-mm-yyyy"
            value={formSubmitValues.pickup_date}
            name="pickup_date"
            onChange={inputChangeHandler}
            min={date}
          />
          {errors.pickup_date && <p>{errors.pickup_date}</p>}
        </div>
        <div className="box-form__car-time">
          <label htmlFor="droptime">
            <i className="fa-regular fa-calendar-days "></i> &nbsp; Drop-of <b>*</b>
          </label>
          <input
            id="droptime"
            type="date"
            name="drop_date"
            onChange={inputChangeHandler}
            value={formSubmitValues.drop_date}
            min={date}
          />
          {errors.drop_date && <p>{errors.drop_date}</p>}
        </div>
        <button type="submit">Search</button>
      </form>
      {showReservation && (
        <Reservation reservationDetails={formSubmitValues} showReservation={closeReservation} />
      )}
    </div>
  );
};

export default Bookcar;
