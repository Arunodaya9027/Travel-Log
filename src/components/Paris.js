import "./ParisStyle.css";
import Navbar from "../components/Navbar";
import Content from "./Content";
function Paris() {
    return (
      <>
        <div className="paris-cont">
          <Navbar />
          <div className="container-fluid">
            <Content
              country="Paris"
              content1="Key Attraction:  Eiffel Tower (Tour Eiffel), Louvre"
              content2="Museum (Musée du Louvre), Versailles Palace"
              content3="Best Time To Visit:  June-August"
              content4="Ideal Time:  3-5 days"
              content5="Currency:  The Euro"
              content6="Language:  French"
            />
          </div>
        </div>
      </>
    );
}

export default Paris;