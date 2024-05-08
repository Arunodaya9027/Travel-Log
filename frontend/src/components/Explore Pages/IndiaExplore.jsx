import {React, useState, useEffect} from "react";
import Navbar from "../Navbar";
import LandScapeCard from "./LandScapeCard";
import "./Explore.css";
import RightBar from "./RightBar";
import {useNavigate, useLocation, useParams} from 'react-router-dom';
import axios from "axios";
import MainNav from "../MainNav";

function IndiaExplore() {
  const id = useParams().id;
  const [cards, setCards] = useState([]);
  const navigate= useNavigate()

  function handleClickAddPlace(){
    navigate("/new/place")
  }

  const getData = async(id) => {
    try {
      console.log(id);
      // axios.get(`http://127.0.0.1:5000/explore/${id}`)
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
    getData(id);
  }, [id, session]);

  return (
    <div className="bg explore">
      {session ? (
                    <MainNav />
                ) : (
                    <Navbar />
                )}
      <div className="container" style={{marginLeft: "4%", marginRight: "4%"}}>
        <h6 style={{ color: "white", textAlign: "left" }}>
          *Please note that ticket prices and timings are subject to change, and
          it's advisable to check the official website or contact local
          authorities for the most up-to-date information before planning your
          visit
        </h6>
        <button onClick={handleClickAddPlace}>Add New Place</button>
        <div style={{ display: "flex" }}>
          <div style={{ gap: "10px", minWidth: "70%" }}>
            {cards.slice().reverse().map(card => (
              <LandScapeCard
                key={card._id}
                placeName={card.city}
                places={card.places}
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
