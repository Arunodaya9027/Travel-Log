import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

import "./CountryStyle.css";
import Navbar from "./Navbar";
import {Button} from "react-bootstrap"
import Content from "./Content";
function Country() {
  const country = useParams();
  const [content, setContent] = useState([]);
  const [img, setImg] = useState("");
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    navigate("cards")
  }
  
  const fetchData = async (country) => {
    try {
      const response = await axios.get(`http://localhost:5000/explore/${country.country}`);
      setContent(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const fetchStyle = (country) => {
    setImg("../assets/hero"+country+".jpg");
    console.log(img);
  }

  useEffect(() => {
    fetchData(country);
    fetchStyle(country.country);
  }, [country]);
  
  return (
    <>
      <div className={`india-cont cont-${country.country}`}>
        <Navbar />

        <div className="Main">
        {content.map(card => (
          <Content
            key={card.id}
            country={card.country}
            content1={card.content1}
            content2={card.content2}
            content3={card.content3}
            content4={card.content4}
            content5={card.content5}
            content6={card.content6}
          />
          ))}
        </div>
        
          <button className="book-btn" type="button" onClick={handleSubmit}>Book Now</button>
        
      </div>
    </>
  );
}

export default Country;
