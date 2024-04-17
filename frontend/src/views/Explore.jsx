import React, { useEffect, useState } from 'react'
import "../../public/styles/Explore.css"
import { Card, Button } from "react-bootstrap";
import CardMod from '../components/Explore/CardMod';
import { useNavigate } from "react-router-dom";
import MainNav from '../components/Navbar/MainNav';

function Explore() {
    const [cards,setCards] = useState([]);

    const navigate = useNavigate()

    const handleAgraSubmit = () => {
      navigate('/explore/agra');
    };
  
    const handleMumbaiSubmit = () => {
      navigate('/explore/mumbai');
    };
  
    const handleAddTrip = () => {
      navigate('/new/trip');
    };

    const getData = async() => {
      try {
        const response = await fetch("http://127.0.0.1:5000/explore", {
          method: 'GET',
        });
        const data = await response.json();
        setCards(data);
      } catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      getData();
    }, []);

  return (
    <div className="bg">
      <MainNav />
      <h1 className="heading">Welcome To India</h1>
      <button onClick={handleAddTrip}>Add Your New Journey </button>
      <br />
      <br />
      <div className="container-fluid card-container">
        {cards.slice().map(card => (
          <CardMod
            title={card.title}
            src={card.image}
            content={card.description}
            handleSubmit={(e) => {navigate(card._id)}}
          />
        ))}
        {/* <CardMod
          title={"Agra"}
          src={
            "https://lp-cms-production.imgix.net/news/2018/01/taj-mahal-visitor-limits.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3"
          }
          content={
            "Agra, located in Uttar Pradesh, India, is renowned for the iconic Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World. It also houses Agra Fort, another UNESCO site, and Fatehpur Sikri, a historical city nearby. Agra is steeped in Mughal history and architectural marvels."
          }
          handleSubmit={(e) => {navigate('/explore/agra')}}
        />
        <CardMod
          title={"Mumbai"}
          src={"https://wallpaperaccess.com/full/1180008.jpg"}
          content={
            "Mumbai, India's financial capital and most populous city, is a bustling metropolis on the country's western coast. It's renowned for the Gateway of India, vibrant street markets, Bollywood film industry, and Marine Drive's scenic promenade. With diverse cultures, iconic landmarks, and a fast-paced lifestyle, Mumbai is a city of dreams."
          }
          handleSubmit={handleMumbaiSubmit}
        /> */}
      </div>
      {/* <div>
            {cards.map((it,idx)=>{
                <div key={idx}>
                    <CardMod/>
                </div>
            })}
        </div> */}
    </div>
  );
}

export default Explore