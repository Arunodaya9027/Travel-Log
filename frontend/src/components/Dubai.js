import "./DubaiStyle.css";
import Navbar from "../components/Navbar";
import Content from "./Content";
function Dubai() {
    return (
      <>
        <div className="dubai-cont">
          <Navbar />
          <div className="container-fluid">
            <Content
              country="Dubai"
              content1="Key Attraction:  Burj Khalifa, Dubai Miracle"
              content2="Garden, Global Village Dubai, Dubai Safari Park"
              content3="Best Time To Visit:  June-August"
              content4="Ideal Time:  3-5 days"
              content5="Currency:  Emirati Dirham"
              content6="Language:  Arabic"
            />
          </div>
        </div>
      </>
    );
}

export default Dubai;