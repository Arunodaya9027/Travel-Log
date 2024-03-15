import "./Location.css";
import Header from "./Header";
const Location = (props) => {
    return (
        <div className="Main">

            <Header/>
            <div className="Main-inner">
                <h1>{props.cName}</h1><br /><br />
                <h3>Key Attraction: {props.cP1}</h3>
                <h3>{props.cP2}</h3><br/><br/>
                <h3>Best Time To Visit: {props.bestTime}</h3>
                <h3>Ideal Time: {props.idealTime}</h3>
                <h3>Currency: {props.cCurr}</h3>
                <h3>Language: {props.cLang}</h3>
                <div className="Main-book"><a href="#book">Book Now</a></div>
            </div>
        </div>
    )
}

export default Location;