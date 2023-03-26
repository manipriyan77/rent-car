import React, { useState } from "react";
import "./style.scss";
const Accordion = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="accordion_container">
      <div className="question_container" onClick={() => setIsShown((prev) => !prev)}>
        1. What is special about comparing rental car deals?
      </div>
      {isShown && (
        <div className="answer_container">
          Comparing rental car deals is important as it helps find the best deal that fits your
          budget and requirements, ensuring you get the most value for your money. By comparing
          various options, you can find deals that offer lower prices, additional services, or
          better car models. You can find car rental deals by researching online and comparing
          prices from different rental companies.
        </div>
      )}
    </div>
  );
};

export default Accordion;
