import {React, useState, useEffect} from "react";
import Navbar from "../Navbar";
import LandScapeCard from "./LandScapeCard";
import "./Explore.css";
import RightBar from "./RightBar";
import {useNavigate, useParams} from 'react-router-dom';
import axios from "axios";

function IndiaExplore() {
  const { id } = useParams();
  const [cards, setCards] = useState([]);
  const navigate= useNavigate()

  function handleClickAddPlace(){
    navigate("/new/place")
  }

  const getData = async(id) => {
    try {
      console.log(id);
      const response = await fetch(`http://127.0.0.1:5000/explore/india/${id}`, {
        method: 'GET',
      });
      console.log(response);
      const data = await response.json();
      setCards(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData(id);
  }, [id]);

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
          {cards.slice().reverse().map(card => (
            <LandScapeCard
              key={card._id}
              placeName={card.city}
              src={card.images[0]}
              history={card.description}
              ticket={card.expenditure}
              timing={card.timings}
            />
          ))}
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
