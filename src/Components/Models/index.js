import React, { useState } from "react";
import "./style.scss";
import toyotacamry from "../../images/cars-big/toyotacamry.jpg";
import audiA1 from "../../images/cars-big/audia1.jpg";
import vwGolf from "../../images/cars-big/golf6.jpg";
import bmw320 from "../../images/cars-big/bmw320.jpg";
import mercedes from "../../images/cars-big/benz.jpg";
import { CAR_DATA } from "../../data";

const modlesName = [
  "Audi A1 S-Line",
  "VW Golf 6",
  "Toyota Camry",
  "BMW 320 ModernLine",
  "Mercedes-Benz GLK",
  "VW Passat CC",
];
const Models = () => {
  const [image, setImage] = useState(audiA1);
  const [modelName, setModelName] = useState("Audi A1 S-Line");
  const handleModelSelect = (car_type) => {
    setModelName(car_type);
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
  return (
    <div className="models_container">
      <div className="models_heading_container">
        <h4>Vehicle Models</h4>
        <h3>Our rental fleet</h3>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next adventure or business
          trip
        </p>
      </div>
      <div className="models_select_container">
        <div className="models_select_btn_container">
          {modlesName.map((models, i) => {
            return (
              <button key={i} onClick={(e) => handleModelSelect(e.target.innerText)}>
                {models}
              </button>
            );
          })}
        </div>
        <div className="models_select_img_container">
          <img src={image} alt="" />
        </div>
        <div className="models_select_table_container">
          {CAR_DATA.map((data, i) => {
            if (modelName === data.name) {
              return (
                <table key={i}>
                  <thead>
                    <tr>
                      <th>${data.price} /rent per day</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Model</td>
                      <td>{data.model}</td>
                    </tr>
                    <tr>
                      <td>Mark</td>
                      <td>{data.mark}</td>
                    </tr>
                    <tr>
                      <td>Year</td>
                      <td>{data.year}</td>
                    </tr>
                    <tr>
                      <td>Doors</td>
                      <td>{data.doors}</td>
                    </tr>
                    <tr>
                      <td>AC</td>
                      <td>{data.air}</td>
                    </tr>
                    <tr>
                      <td>Transmission</td>
                      <td>{data.transmission}</td>
                    </tr>
                    <tr>
                      <td>Fuel</td>
                      <td>{data.fuel}</td>
                    </tr>
                  </tbody>
                </table>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Models;
