import React from "react";
import { useNavigate } from "react-router-dom";

import "./IndiaStyle.css";
import Navbar from "../Navbar";
import { Button } from "react-bootstrap"
import Content from "../Content";
function India() {

  const navigate = useNavigate()

  function handleSubmit() {
    navigate("/india/cards")
  }
  return (
    <>
      <div className="india-cont">
        <Navbar />

        <div className="Main">
          <Content
            country="India"
            content1="Key Attraction: Ram Mandir, Taj Mahal, Golden Temple,"
            content2="Qutub Minar, Red Fort."
            content3="Best Time To Visit: September - December"
            content4="Ideal Time: 5-10 days"
            content5="Currency: Rupees"
            content6="Language: English, Hindi"
          />
        </div>

        <button className="book-btn" type="button" onClick={handleSubmit}>Book Now</button>

      </div>
    </>
  );
}

export default India;
