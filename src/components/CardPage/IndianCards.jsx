import React, { useEffect, useState } from 'react'
import "./IndianCardStyle.css"
import { Card, Button } from "react-bootstrap";
import CardMod from './CardMod';
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Navbar from '../Navbar';
import MainNav from "../MainNav";
import axios from 'axios';

function IndianCards() {
  const location = useLocation();
  const [cards,setCards] = useState([]);
  const [country, setCountry] = useState("");

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
      if(location.pathname.startsWith("/explore/india/cards")) {
          try {
          const response = await axios.get("http://localhost:5000/journey/india");
          // const response = await axios.get(`http://localhost:5000/explore/${countryParam.country}/cards`);
          console.log(response.data);
          setCards(response.data);
          setCountry("India");
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
        // axios.get(`http://localhost:5000/explore/${country}/cards`)
        // .then((res)=>{
        //   console.log(res.data)
        //   setCards(res.data)
        // })
        // .catch(err=>console.log("err____",err));
      } else if(location.pathname.startsWith("/explore/dubai/cards")) {
        try {
          const response = await axios.get("http://localhost:5000/journey/dubai");
          // const response = await axios.get(`http://localhost:5000/explore/${countryParam.country}/cards`);
          console.log(response.data);
          setCards(response.data);
          setCountry("Dubai");
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      } else if(location.pathname.startsWith("/explore/paris/cards")) {
        try {
          const response = await axios.get("http://localhost:5000/journey/paris");
          // const response = await axios.get(`http://localhost:5000/explore/${countryParam.country}/cards`);
          console.log(response.data);
          setCards(response.data);
          setCountry("Paris");
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      } else if(location.pathname.startsWith("/explore/switzerland/cards")) {
        try {
          const response = await axios.get("http://localhost:5000/journey/switzerland");
          // const response = await axios.get(`http://localhost:5000/explore/${countryParam.country}/cards`);
          console.log(response.data);
          setCards(response.data);
          setCountry("Switzerland");
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      } else if(location.pathname.startsWith("/explore/newyork/cards")) {
        try {
          const response = await axios.get("http://localhost:5000/journey/newyork");
          // const response = await axios.get(`http://localhost:5000/explore/${countryParam.country}/cards`);
          console.log(response.data);
          setCards(response.data);
          setCountry("New York City");
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      }
  };

  const [session, setSession] = useState();
    const [details, setDetails] = useState();

    const loadData = (session) => {
        if (session != null) {
            console.log(session);
            const id = session;
            console.log(id);
            axios.get(`http://localhost:5000/session/${id}`)
            .then((res) => {
                console.log(res.data);
                setDetails(res.data);
                console.log(details);
            })
            .catch((err) => {
                console.log(err);
            })
        }
    }
      
  useEffect(() => {
    const retrievedSession = localStorage.getItem('session');
    setSession(retrievedSession || null); // Set default empty string if not found
    loadData(session);
    getCardList();
  }, [session])
    
  return (
    <div className="bg">
      {session ? (
                    <MainNav />
                ) : (
                    <Navbar />
                )}
      <h1 className="heading">Welcome To {country}</h1>
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