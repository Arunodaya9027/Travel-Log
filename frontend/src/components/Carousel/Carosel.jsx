import "./styles/CaroselStyle.css";
import EmblaCarousel from "./EmblaCarousel";
import india from "../../assets/head/India.png";
import dubai from "../../assets/head/Dubai.png";
import paris from "../../assets/head/Paris.png";
import newyork from "../../assets/head/NewYork.png";
import switzerland from "../../assets/head/Switzerland.png";
const OPTIONS = { loop: true }
const SLIDES = [
    {
        text:"India",
        url: "/india",
        link: india,
    },
    {
        text:"Dubai",
        url: "/dubai",
        link: dubai,
    },
    {
        text:"Paris",
        url: "/paris",
        link: paris,
    },
    {
        text:"NewYork",
        url: "/newyork",
        link: newyork,
    },
    {
        text:"Switzerland",
        url: "/switzerland",
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