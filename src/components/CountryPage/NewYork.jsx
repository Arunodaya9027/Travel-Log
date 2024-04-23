import "./NewYorkStyle.css";
import Navbar from "../Navbar";
import Content from "../Content";
function NewYork() {
  return (
    <>
      <div className="newyork-cont">
        <Navbar />
        <div className="container-fluid">
          <Content
            country="New York City"
            content1="Key Attraction:  Burj Khalifa, Dubai Miracle"
            content2="Garden, Global Village Dubai, Dubai Safari Park"
            content3="Best Time To Visit:  June-September"
            content4="Ideal Time:  3-5 days"
            content5="Currency:  Dollar"
            content6="Language:  English"
          />
        </div>
      </div>
    </>
  );
}

export default NewYork;