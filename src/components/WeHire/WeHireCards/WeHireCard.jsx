import React, { useContext } from "react";
import { Context } from "../../../App";
import "../WeHireCards/WeHireCard.scss";

function WeHireCard() {
  const context = useContext(Context);
  return (
    <div className="weHire_cards">
      {context.hireData.map((hire) => {
        return (
          <div className="weHire_card">
            <span>{hire.icon}</span>
            <h1>{hire.head}</h1>
            <p>{hire.section}</p>
          </div>
        );
      })}
    </div>
  );
}

export default WeHireCard;
