import {React} from 'react';
import MainNav from '../components/Navbar/MainNav'
import '../../public/styles/Home.css';

function Home() {
  return (
    <>
      <div className="hero">
        <MainNav />
        <div className="hero-text">
            <h1>Get Ready To Explore The World With <br/> 
                <span>Travel Log</span>
            </h1>
            <p>“Life is either a daring adventure or nothing at all”</p>
            <br />
            <div className="search">
                <input type="text" className='search-destination' placeholder="Enter Your Destination..." />
                <button className="btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </div>
        </div>
        <a href="/explore" className="explore">Explore <i className="fa-solid fa-arrow-right"></i></a>
      </div>
    </>
  )
}

export default Home;