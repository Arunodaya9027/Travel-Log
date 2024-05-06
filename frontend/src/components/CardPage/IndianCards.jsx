import React, { useEffect, useState } from 'react'
import "./IndianCardStyle.css"
import { Card, Button } from "react-bootstrap";
import CardMod from './CardMod';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../Navbar';
import axios from 'axios';

function IndianCards() {
    const [cards,setCards] = useState([]);

    const navigate = useNavigate()

    const handleSubmit = (id) => {
      console.log(id);
        navigate(`/explore/india/${id}`);
    }

    const handleMumbaiSubmit = () => {
      navigate("/explore/mumbai");
    }

    const handleAddTrip = () => {
      navigate("/new/trip")
    }

    
    const getCardList = async() => {
      try {
        const response = await axios.get("http://localhost:5000/journey");
        // const response = await axios.get(`http://localhost:5000/explore/${countryParam.country}/cards`);
        console.log(response.data);
        setCards(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
      // axios.get(`http://localhost:5000/explore/${country}/cards`)
      // .then((res)=>{
      //   console.log(res.data)
      //   setCards(res.data)
      // })
      // .catch(err=>console.log("err____",err));
    }

    useEffect(() => {
     getCardList();
    }, [])
    
  return (
    <div className="bg">
      <Navbar />
      <h1 className="heading">Welcome To India</h1>
      <button onClick={handleAddTrip}>Add Your New Journey </button>
      <br />
      <br />
      
      <div className="container-fluid card-container">
        {cards.slice().map(it => (
          <div key={it._id}>
            <CardMod
              title={it.city}
              state={it.state}
              src={
                "https://lp-cms-production.imgix.net/news/2018/01/taj-mahal-visitor-limits.jpg?auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&w=850&q=35&dpr=3"
              }
              content={it.description}
              handleSubmit={() => {handleSubmit(it._id)}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IndianCards