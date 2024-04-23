import "./SwitzerlandStyle.css";
import Navbar from "../Navbar";
import Content from "../Content";
function Switzerland() {
  return (
    <>
      <div className="switzerland-cont">
        <Navbar />
        <div className="container-fluid">
          <Content
            country="Switzerland"
            content1="Key Attraction:  Matterhorn, The Rhine Falls,"
            content2="Aletsch- the largest Alphine glacier, Cruex Du Van."
            content3="Best Time To Visit:  April- October"
            content4="Ideal Time:  5-6 days"
            content5="Currency:  Swiss Franc"
            content6="Language:  German"
          />
        </div>
      </div>
    </>
  );
}

export default Switzerland;
