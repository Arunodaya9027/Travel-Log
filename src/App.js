import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
//--------------------------------
// import Location from "./components/Location";
const App = ()=>{
    return (
        <div className="container">
            <Header/>
            <Body/>
            <Footer/>
            {/* <Location  cName="India" cP1="Ram Mandir, Taj Mahal, Golden Temple," cP2="Qutub Minar, Red Fort." bestTime="September - December" idealTime="5-10 days" cCurr="Rupees" cLang="English, Hindi"/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);