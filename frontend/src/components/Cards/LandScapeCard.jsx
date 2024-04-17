import React from "react";
import "../../../public/styles/Cards.css"

function LandScapeCard({ placeName,src,history,ticket,timing }) {
  return (
    <div className="landScapeCard">
      <span className="imgContainer">
        <img src={src} />
      </span>
      <div className="contentContainer">
        <div style={{ display: "flex",justifyContent:"space-between" }}>
          <h1>{placeName}</h1>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h6>from</h6>
            <h3>{ticket}</h3>
          </div>
        </div>
        <p>
          {history}
        </p>
        <h5>Timing</h5>
        <h4>{timing}</h4>

        <h6>For More Details <a href="">Subscribe</a></h6>
      </div>
    </div>
  );
}

export default LandScapeCard;
