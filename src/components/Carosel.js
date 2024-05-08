import "./CaroselStyle.css";
import Navbar from "../components/Navbar";
import EmblaCarousel from "./EmblaCarousel";
import india from "../assets/India.png";
import dubai from "../assets/Dubai.png";
import paris from "../assets/Paris.png";
import newyork from "../assets/NewYork.png";
import switzerland from "../assets/Switzerland.png";
import MainNav from "../components/MainNav";
import {React, useState, useEffect} from "react";
import axios from 'axios';
const OPTIONS = { loop: true }
const SLIDES = [
    {
        text:"India",
        url: "/explore/india",
        link: india,
    },
    {
        text:"Dubai",
        url: "/explore/dubai",
        link: dubai,
    },
    {
        text:"Paris",
        url: "/explore/paris",
        link: paris,
    },
    {
        text:"NewYork",
        url: "/explore/newyork",
        link: newyork,
    },
    {
        text:"Switzerland",
        url: "/explore/switzerland",
        link: switzerland,
    },
]
function Carousel() {
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
            <div className="carousel">
                {session ? (
                    <MainNav />
                ) : (
                    <Navbar />
                )}
                <div className="carousel-text">
                    <h1>Discover The World With <br /><span>Travel Log</span></h1>
                    <br />
                    <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                    <br />
                    <p>“Life is either a daring adventure or nothing at all”</p>
                </div>

            </div>
        </>
    )
}

export default Carousel;