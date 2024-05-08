import React from "react";
import "./Explore.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandScapeCard({ id,placeName,places,src,history,ticket,timing }) {

  const navigate = useNavigate();

  // export const BaseUrl ="http//localhost:5000"
  const handleSubClick = async (e) => {
    e.preventDefault();
    navigate("/subscription");
    // try {
    //   await axios.post(
    //     `${BaseUrl}/subscribe`,
    //     {},
    //     {
    //       headers: { "Content-Type": "application/json" },
    //     }
    //   );
    //   // setFormData()
    //   // console.log(formData)
    //   alert("Email sent successfully");
    // } catch (error) {
    //   console.error("Error sending email:", error);
    //   // alert("Error sending email");
      
    // }
    // alert("Feature Coming soon");
  };
  return (
    <div className="landScapeCard" key={id}>
      <span className="imgContainer">
        <img src={src} />
      </span>
      <div className="contentContainer">
        <div style={{ display: "flex",justifyContent:"space-between" }}>
          <h1>{placeName}</h1>
          <div style={{ display: "flex", flexDirection: "column", marginLeft: "5%" }}>
            <h5>visit places {places}</h5>
            <h3>{ticket}</h3>
          </div>
        </div>
        <p>
          {history}
        </p>
        <h5>Timing</h5>
        <h4>{timing}</h4>

        <h6> <a className="moreOption" onClick={handleSubClick}>For More Details</a></h6>
      </div>
    </div>
  );
}

export default LandScapeCard;
