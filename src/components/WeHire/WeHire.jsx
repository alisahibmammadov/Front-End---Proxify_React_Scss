import React from "react";
import "../WeHire/WeHire.scss";
import HireButton from "./HireButton/HireButton";
import WeHireCard from "./WeHireCards/WeHireCard";

function WeHire() {
  return (
    <div className="weHire">
      <h1 className="weHire_head">We’re looking for</h1>
      <div className="weHire_cards">
        <WeHireCard />
      </div>
        <HireButton />
    </div>
  );
}

export default WeHire;
