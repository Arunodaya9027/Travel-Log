import React, { useEffect, useState } from 'react'
import "./IndianCardStyle.css"
import { Card, Button } from "react-bootstrap";
import CardMod from './CardMod';
import { useNavigate } from "react-router-dom";
import Navbar from '../Navbar';
import axios from 'axios';




function IndianCards() {
    const [cards,setCards] = useState([]);

    const navigate = useNavigate()

    function handleSubmit(){
        navigate("/explore/india")
    }

    function handleMumbaiSubmit(){
      navigate("/explore/mumbai");
    }

    function handleAddTrip(){
      navigate("/new/trip")
    }

    useEffect(() => {
     getCardList();
    }, [])
    

    function getCardList(){
      axios.get("http://localhost:5000/journey")
      .then((res)=>{
        console.log(res.data)
        setCards(res.data)
      })
      .catch(err=>console.log("err____",err));
    }


  return (
    <div className="bg">
      <Navbar />
      <h1 className="heading">Welcome To India</h1>
      <button onClick={handleAddTrip}>Add Your New Journey </button>
      <br />
      <br />
      
        {/* <CardMod
          title={"Agra"}
          src={
            "https://lp-cms-production.imgix.net/news/2018/01/taj-mahal-visitor-limits.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3"
          }
          content={
            "Agra, located in Uttar Pradesh, India, is renowned for the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World. It also houses Agra Fort, another UNESCO site, and Fatehpur Sikri, a historical city nearby. Agra is steeped in Mughal history and architectural marvels."
          }
          handleSubmit={handleIndiaSubmit}
        />
        <CardMod
          title={"Mumbai"}
          src={"https://wallpaperaccess.com/full/1180008.jpg"}
          content={
            "Mumbai, India's financial capital and most populous city, is a bustling metropolis on the country's western coast. It's renowned for the Gateway of India, vibrant street markets, Bollywood film industry, and Marine Drive's scenic promenade. With diverse cultures, iconic landmarks, and a fast-paced lifestyle, Mumbai is a city of dreams."
          }
          handleSubmit={handleMumbaiSubmit}
        /> */}
      
      <div className="container-fluid card-container">
        {cards.map((it, idx) => {
          <div key={idx}>
            <CardMod
              title={it.city}
              src={
                "https://lp-cms-production.imgix.net/news/2018/01/taj-mahal-visitor-limits.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3"
              }
              content={it.description}
              handleSubmit={handleSubmit}
            />
          </div>;
        })}
      </div>
    </div>
  );
}

export default IndianCards