import React, { useEffect, useState } from "react";
import "./style.scss";
import toyotacamry from "../../images/cars-big/toyotacamry.jpg";
import audiA1 from "../../images/cars-big/audia1.jpg";
import vwGolf from "../../images/cars-big/golf6.jpg";
import bmw320 from "../../images/cars-big/bmw320.jpg";
import mercedes from "../../images/cars-big/benz.jpg";

const Reservation = ({ reservationDetails, showReservation }) => {
  const [image, setImage] = useState("");
  const [reservationFormDetails, setReservationFormDetails] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    address: "",
    age: "",
    city: "",
    zip_code: "",
  });
  const [errors, setErrors] = useState({});
  // const [showModal, setShowModal] = useState(true);

  const { car_type, pickup_location, drop_location, pickup_date, drop_date } = reservationDetails;

  const imageSet = () => {
    if (car_type === "Audi A1 S-Line") {
      setImage(audiA1);
    }
    if (car_type === "VW Golf 6") {
      setImage(vwGolf);
    }
    if (car_type === "Toyota Camry") {
      setImage(toyotacamry);
    }
    if (car_type === "BMW 320 ModernLine") {
      setImage(bmw320);
    }
    if (car_type === "VW Passat CC") {
      setImage(vwGolf);
    }
    if (car_type === "Mercedes-Benz GLK") {
      setImage(mercedes);
    }
  };
  useEffect(() => {
    imageSet();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [car_type]);

  const inputChangeHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setReservationFormDetails((prev) => {
      return {
        ...prev,
        [inputName]: value,
      };
    });
  };
  console.log(reservationFormDetails);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e);
    // const form = new FormData(e.target);
    // const name = e.target.name;
    // console.log(name);
    // const firstName = form.get("fname");
    // setReservationFormDetails((prev) => {
    //   return {
    //     ...prev,
    //     first_name: firstName,
    //   };
    // });
    if (reservationFormDetails.first_name === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          first_name: "Please enter first name",
        };
      });
    }
    if (reservationFormDetails.last_name === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          last_name: "Please enter last name",
        };
      });
    }
    if (reservationFormDetails.email === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          email: "Please enter email",
        };
      });
    }
    if (reservationFormDetails.age === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          age: "Please enter age",
        };
      });
    }
    if (reservationFormDetails.address === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          address: "Please enter address",
        };
      });
    }
    if (reservationFormDetails.city === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          city: "Please enter city",
        };
      });
    }
    if (reservationFormDetails.zip_code === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          zip_code: "Please enter zip code",
        };
      });
    }
    if (reservationFormDetails.phone_number === "" || null) {
      setErrors((prev) => {
        return {
          ...prev,
          phone_number: "Please enter Phone number",
        };
      });
    }
  };
  console.log(errors);

  return (
    <div className="reservation_container">
      <div className="reservation_header">complete reservation</div>
      <div className="reservation_container__message">
        <h4>
          <i className="fa-solid fa-circle-info"></i> Upon completing this reservation enquiry, you
          will receive:
        </h4>
        <p>
          Your rental voucher to produce on arrival at the rental desk and a toll-free customer
          support number.
        </p>
      </div>
      <div className="reservation_container__car-info">
        <div className="dates-div">
          <div className="reservation_container__car-info__dates">
            <h5>Location &amp; Date</h5>
            <span>
              <div className="times_heading">
                <i className="fa-solid fa-location-dot"></i>
                <h6>Pick-Up Date &amp; Time</h6>
              </div>
              <div>
                <p>
                  {pickup_date} / <input type="time" className="input-time" />
                </p>
              </div>
            </span>
          </div>
          <div className="reservation_container__car-info__dates">
            <span>
              <div className="times_heading">
                <i className="fa-solid fa-location-dot"></i>
                <h6>Drop-Off Date &amp; Time</h6>
              </div>
              <div>
                <p>
                  {drop_date} / <input type="time" className="input-time" />
                </p>
              </div>
            </span>
          </div>
          <div className="reservation_container__car-info__dates">
            <span>
              <div className="times_heading">
                <i className="fa-solid fa-calendar-days"></i>

                <h6>Pick-Up Location</h6>
              </div>
              <div>
                <p>{pickup_location}</p>
              </div>
            </span>
          </div>
          <div className="reservation_container__car-info__dates">
            <span>
              <div className="times_heading">
                <i className="fa-solid fa-calendar-days"></i>
                <h6>Drop-Off Location</h6>
              </div>
              <div>
                <p>{drop_location}</p>
              </div>
            </span>
          </div>
        </div>
        <div className="reservation_container__car-info__model">
          <h5>
            <span>Car -</span> {car_type}
          </h5>
          <img src={image} alt="car_img" />
        </div>
      </div>
      <div className="reservation_container__person-info">
        <h4>Personal Information</h4>
        <form className="info-form" onSubmit={formSubmitHandler}>
          <div className="info-form__2col">
            <span>
              <label>
                First Name <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your first name"
                onChange={inputChangeHandler}
                value={reservationFormDetails.first_name}
                name="first_name"
              />
              {errors.first_name && <p className="error-modal">{errors.first_name}.</p>}
            </span>
            <span>
              <label>
                Last Name <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your last name"
                onChange={inputChangeHandler}
                value={reservationFormDetails.last_name}
                name="last_name"
              />
              {errors.last_name && <p className="error-modal ">{errors.last_name}.</p>}
            </span>
            <span>
              <label>
                Phone Number <b>*</b>
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                onChange={inputChangeHandler}
                value={reservationFormDetails.phone_number}
                name="phone_number"
              />
              {errors.phone_number && <p className="error-modal">{errors.phone_number}.</p>}
            </span>
            <span>
              <label>
                Age <b>*</b>
              </label>
              <input
                type="number"
                placeholder="18"
                onChange={inputChangeHandler}
                value={reservationFormDetails.age}
                name="age"
              />
              {errors.age && <p className="error-modal ">{errors.age}.</p>}
            </span>
          </div>
          <div className="info-form__1col">
            <span>
              <label>
                Email <b>*</b>
              </label>
              <input
                type="email"
                placeholder="Enter your email address"
                onChange={inputChangeHandler}
                value={reservationFormDetails.email}
                name="email"
              />
              {errors.email && <p className="error-modal">{errors.email}.</p>}
            </span>
            <span>
              <label>
                Address <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your street address"
                onChange={inputChangeHandler}
                value={reservationFormDetails.address}
                name="address"
              />
              {errors.address && <p className="error-modal ">{errors.address}.</p>}
            </span>
          </div>
          <div className="info-form__2col">
            <span>
              <label>
                City <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your city"
                onChange={inputChangeHandler}
                value={reservationFormDetails.city}
                name="city"
              />
              {errors.city && <p className="error-modal">{errors.city}.</p>}
            </span>
            <span>
              <label>
                Zip Code <b>*</b>
              </label>
              <input
                type="text"
                placeholder="Enter your zip code"
                onChange={inputChangeHandler}
                value={reservationFormDetails.zip_code}
                name="zip_code"
              />
              {errors.zip_code && <p className="error-modal ">{errors.zip_code}.</p>}
            </span>
          </div>
          {/* <span className="info-form__checkbox">
          <input type="checkbox" />
          <p>Please send me latest news and updates</p>
        </span> */}
          <div className="reserve-button">
            <button>Reserve Now</button>
          </div>
        </form>
      </div>
    </div>
    // <div className="reservation_container">
    //   <div className="reservation_header">complete reservation</div>
    //   <div className="reservation_container__message">
    //     <h4>
    //       <i className="fa-solid fa-circle-info"></i> Upon completing this reservation enquiry, you
    //       will receive:
    //     </h4>
    //     <p>
    //       Your rental voucher to produce on arrival at the rental desk and a toll-free customer
    //       support number.
    //     </p>
    //   </div>
    //   <div className="reservation_container__car-info">
    //     <div className="dates-div">
    //       <div className="reservation_container__car-info__dates">
    //         <h5>Location &amp; Date</h5>
    //         <span>
    //           <div className="times_heading">
    //             <i className="fa-solid fa-location-dot"></i>
    //             <h6>Pick-Up Date &amp; Time</h6>
    //           </div>
    //           <div>
    //             <p>
    //               {pickup_date} / <input type="time" className="input-time" />
    //             </p>
    //           </div>
    //         </span>
    //       </div>
    //       <div className="reservation_container__car-info__dates">
    //         <span>
    //           <div className="times_heading">
    //             <i className="fa-solid fa-location-dot"></i>
    //             <h6>Drop-Off Date &amp; Time</h6>
    //           </div>
    //           <div>
    //             <p>
    //               {drop_date} / <input type="time" className="input-time" />
    //             </p>
    //           </div>
    //         </span>
    //       </div>
    //       <div className="reservation_container__car-info__dates">
    //         <span>
    //           <div className="times_heading">
    //             <i className="fa-solid fa-calendar-days"></i>

    //             <h6>Pick-Up Location</h6>
    //           </div>
    //           <div>
    //             <p>{pickup_location}</p>
    //           </div>
    //         </span>
    //       </div>
    //       <div className="reservation_container__car-info__dates">
    //         <span>
    //           <div className="times_heading">
    //             <i className="fa-solid fa-calendar-days"></i>
    //             <h6>Drop-Off Location</h6>
    //           </div>
    //           <div>
    //             <p>{drop_location}</p>
    //           </div>
    //         </span>
    //       </div>
    //     </div>
    //     <div className="reservation_container__car-info__model">
    //       <h5>
    //         <span>Car -</span> {car_type}
    //       </h5>
    //       <img src={image} alt="car_img" />
    //     </div>
    //   </div>
    //   <div className="reservation_container__person-info">
    //     <h4>Personal Information</h4>
    //     <form className="info-form" onSubmit={formSubmitHandler}>
    //       <div className="info-form__2col">
    //         <span>
    //           <label>
    //             First Name <b>*</b>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter your first name"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.first_name}
    //             name="first_name"
    //           />
    //           {errors.first_name && <p className="error-modal">{errors.first_name}.</p>}
    //         </span>
    //         <span>
    //           <label>
    //             Last Name <b>*</b>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter your last name"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.last_name}
    //             name="last_name"
    //           />
    //           {errors.last_name && <p className="error-modal ">{errors.last_name}.</p>}
    //         </span>
    //         <span>
    //           <label>
    //             Phone Number <b>*</b>
    //           </label>
    //           <input
    //             type="tel"
    //             placeholder="Enter your phone number"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.phone_number}
    //             name="phone_number"
    //           />
    //           {errors.phone_number && <p className="error-modal">{errors.phone_number}.</p>}
    //         </span>
    //         <span>
    //           <label>
    //             Age <b>*</b>
    //           </label>
    //           <input
    //             type="number"
    //             placeholder="18"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.age}
    //             name="age"
    //           />
    //           {errors.age && <p className="error-modal ">{errors.age}.</p>}
    //         </span>
    //       </div>
    //       <div className="info-form__1col">
    //         <span>
    //           <label>
    //             Email <b>*</b>
    //           </label>
    //           <input
    //             type="email"
    //             placeholder="Enter your email address"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.email}
    //             name="email"
    //           />
    //           {errors.email && <p className="error-modal">{errors.email}.</p>}
    //         </span>
    //         <span>
    //           <label>
    //             Address <b>*</b>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter your street address"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.address}
    //             name="address"
    //           />
    //           {errors.address && <p className="error-modal ">{errors.address}.</p>}
    //         </span>
    //       </div>
    //       <div className="info-form__2col">
    //         <span>
    //           <label>
    //             City <b>*</b>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter your city"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.city}
    //             name="city"
    //           />
    //           {errors.city && <p className="error-modal">{errors.city}.</p>}
    //         </span>
    //         <span>
    //           <label>
    //             Zip Code <b>*</b>
    //           </label>
    //           <input
    //             type="text"
    //             placeholder="Enter your zip code"
    //             onChange={inputChangeHandler}
    //             value={reservationFormDetails.zip_code}
    //             name="zip_code"
    //           />
    //           {errors.zip_code && <p className="error-modal ">{errors.zip_code}.</p>}
    //         </span>
    //       </div>
    //       {/* <span className="info-form__checkbox">
    //         <input type="checkbox" />
    //         <p>Please send me latest news and updates</p>
    //       </span> */}
    //       <div className="reserve-button">
    //         <button onClick={showReservation}>Reserve Now</button>
    //       </div>
    //     </form>
    //   </div>
    // </div>
  );
};

export default Reservation;
