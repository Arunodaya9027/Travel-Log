import "./style.css";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Blog from "./routes/Blog";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Explore from "./routes/Explore";
import Page1 from "./routes/Page1";
import IndianCards from "./components/CardPage/IndianCards";
import IndiaExplore from "./components/Explore Pages/IndiaExplore";
import NewTripForm from "./components/NewTripForm";
import ProfileScreen from "./components/ProfileScreen/ProfileScreen";
import ProfileSetup from "./components/ProfileSetup/ProfileSetup";
import News from "./routes/About";
import User from "./components/LOGIN_UI/User";
import Subscription from "./components/Subscription/Subscription";
import Logout from './components/Logout/Logout';

const App = () => {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/blog" element={<Blog />} /> */}
            <Route path="/news" element={<News/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/explore/:country" element={<Page1 />} />
            <Route path="/explore/:country/cards" element={<IndianCards />} />
            <Route path="/explore/:country/:id" element={<IndiaExplore />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/setup-profile/:id" element={<ProfileSetup />} />
            <Route path="/new/*" element={<NewTripForm/>} />
            <Route path="/signup" element={<User/>} />
            <Route path="/subscription" element={<Subscription/>} />
            <Route path="/logout" element={<Logout/>} />

          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;