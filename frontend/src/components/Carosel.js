import "./CaroselStyle.css";
import Navbar from "../components/Navbar";
import EmblaCarousel from "./EmblaCarousel";
import india from "../assets/India.png";
import dubai from "../assets/Dubai.png";
import paris from "../assets/Paris.png";
import newyork from "../assets/NewYork.png";
import switzerland from "../assets/Switzerland.png";
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
    return (
        <>
            <div className="carousel">
                <Navbar />
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