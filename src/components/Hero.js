import {React, useState, useEffect} from "react";
import axios from 'axios';
import "./HeroStyle.css";
import Navbar from "../components/Navbar";
import MainNav from "../components/MainNav";
// import HeroImage from "../assets/HeroImage.jpg";
function Hero() {
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
    }, [session])
    return (
        <>
            <div className="hero">
                {session ? (
                    <MainNav />
                ) : (
                    <Navbar />
                )}
                
                <div className="hero-text">
                    <h1 style={{ cursor: "default" }}>Get Ready To Explore The World With <br/> <span>Travel Log</span></h1>
                    <p style={{ cursor: "default" }}>“Life is either a daring adventure or nothing at all”</p><br />
                    <div style={{ marginLeft: "20%", height: "40px", fontSize: "15px", width: "60%", backgroundColor: "white", display: "flex", justifyContent: "space-between" }} className="search">
                        <input type="text" placeholder="Enter Your Destination..." />
                        <button style={{ marginTop: "4px", height: "100%" }} className="btn"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <a href="/explore" className="explore">Explore <i className="fa-solid fa-arrow-right"></i></a>
            </div>
        </>
    )
}

export default Hero;