import "./HeroStyle.css";
import Navbar from "./Navbar";
function Hero() {
    return (
        <>
            <div className="hero">
                <Navbar />
                <div className="hero-text">
                    <h1 style={{ cursor: "default" }}>Get Ready To Explore The World With <br/> <span>Travel Log</span></h1>
                    <p style={{ cursor: "default" }}>“Life is either a daring adventure or nothing at all”</p><br />
                    <div style={{ marginLeft: "20%", height: "40px", fontSize: "15px", width: "60%", backgroundColor: "white", display: "flex", justifyContent: "space-between" }} class="search">
                        <input type="text" placeholder="Enter Your Destination..." />
                        <button style={{ marginTop: "4px", height: "100%" }} class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
                <a href="/explore" className="explore">Explore <i class="fa-solid fa-arrow-right"></i></a>
            </div>
        </>
    )
}

export default Hero;