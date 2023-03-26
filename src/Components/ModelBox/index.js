import React from "react";
import { CAR_DATA } from "../../data";
import "./style.scss";
console.log(CAR_DATA);
const ModelBox = () => {
  return (
    <div className="modelbox_container">
      {CAR_DATA.map((data, i) => {
        return (
          <div className="modelbox" key={i}>
            <img src={data.img} alt="" />
            <div className="modelbox_description">
              <div>
                <h5>{data.name}</h5>
              </div>
              <div>
                <h5>${data.price}</h5>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ModelBox;
