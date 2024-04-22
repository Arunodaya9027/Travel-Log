import "./style.css";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Explore from "./routes/Explore";
import Page1 from "./routes/Page1";
import Page2 from "./routes/Page2";
import Page3 from "./routes/Page3";
import Page4 from "./routes/Page4";
import Page5 from "./routes/Page5";
import IndianCards from "./components/CardPage/IndianCards";
import IndiaExplore from "./components/Explore Pages/IndiaExplore";
import NewTripForm from "./components/NewTripForm";
const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/india" element={<Page1 />} />
            <Route path="/dubai" element={<Page2 />} />
            <Route path="/newyork" element={<Page3 />} />
            <Route path="/paris" element={<Page4 />} />
            <Route path="/switzerland" element={<Page5 />} />
            <Route path="/india/cards" element={<IndianCards />} />
            <Route path="/explore/india" element={<IndiaExplore />} />
            <Route path="/new/*" element={<NewTripForm/>} />

          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;