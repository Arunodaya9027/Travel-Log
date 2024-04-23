import React from "react";
import Navbar from "../Navbar";
import LandScapeCard from "./LandScapeCard";
import "./Explore.css";
import RightBar from "./RightBar";
import {useNavigate} from 'react-router-dom';

function IndiaExplore() {

  const navigate= useNavigate()

  function handleClickAddPlace(){
    navigate("/new/place")
  }

  return (
    <div className="bg explore">
      <Navbar />
      <div className="container">
        <h6 style={{ color: "white", textAlign: "left" }}>
          *Please note that ticket prices and timings are subject to change, and
          it's advisable to check the official website or contact local
          authorities for the most up-to-date information before planning your
          visit
        </h6>
        <button onClick={handleClickAddPlace}>Add New Place</button>
        <div style={{ display: "flex" }}>
          <div style={{ gap: "10px" }}>
            <LandScapeCard
              placeName="Sikandra"
              src="https://www.hoteldekho.com/storage/img/tourattraction/1651043113Sikandra%20Fort.jpg"
              history="Sikandra was chosen by Emperor Akbar as the location for his mausoleum
                      during his reign in the late 16th century. Construction of the tomb
                      began during Akbar's lifetime and was completed by his son, Jahangir,
                      after his death in 1605."
              ticket="₹40"
              timing="Open mostly whole day from sunrise to sunset"
            />
            <LandScapeCard
              placeName="Sikandra"
              src="https://www.maharajatrails.com/public/images/attractions/Agra_Fort.jpg"
              history="The Agra Fort was built by the Mughal Emperor Akbar in the 16th century and later expanded by his successors, including Shah Jahan, who built the Taj Mahal"
              ticket="₹50 - ₹100"
              timing="Open mostly whole day from sunrise to sunset"
            />
            <LandScapeCard
              placeName="Sikandra"
              src="https://www.maharajatrails.com/public/images/attractions/Agra_Fort.jpg"
              history="The Agra Fort was built by the Mughal Emperor Akbar in the 16th century and later expanded by his successors, including Shah Jahan, who built the Taj Mahal"
              ticket="₹50 - ₹100"
              timing="Open mostly whole day from sunrise to sunset"
            />
          </div>
          <div>
            <RightBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndiaExplore;
