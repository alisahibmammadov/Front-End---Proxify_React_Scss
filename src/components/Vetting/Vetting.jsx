import React from "react";
import "../Vetting/Vetting.scss";
import VettingButton from "./VettingButton/VettingButton";
import VettingCard from "./VettingCard/VettingCard";

function Vetting() {
  return (
    <div className="vetting">
      <div className="vetting_head">
        <h1>Our vetting process</h1>
        <p>
          Every project has its own requirements and in order to make sure that
          we match the best talents to our projects, we ask our candidates to go
          through a comprehensive yet straightforward vetting process.
        </p>
      </div>

      <VettingCard />

      <VettingButton />
    </div>
  );
}

export default Vetting;
