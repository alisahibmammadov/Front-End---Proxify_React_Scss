import React, { useContext } from "react";
import { Context } from "../../../App";
import AliceCarousel from 'react-alice-carousel';
import '../VettingCard/VettingCard.scss'




function VettingCard() {
  const context = useContext(Context);
  console.log(context.vettingData);

  const responsive =  {
    0: {
        items: 1,
    },
    1080: {
        items: 3
    }
  }
  
  return (
    <div className="vetting_card">
      <AliceCarousel responsive={responsive} autoPlay={true} mouseTracking={true} touchTracking={true}>
        {context.vettingData.map(vetting=>{
          return(
            
              <div className="card">
                <span>{vetting.step}</span>
                <h1>{vetting.head}</h1>
                <p>{vetting.section}</p>
              </div>
            
          )
        })}
        
        
      </AliceCarousel>
      
    </div>
  );
}

export default VettingCard;
