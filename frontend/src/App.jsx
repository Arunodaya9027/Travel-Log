import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../public/styles/App.css'
import {BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './views/Home';
import About from './views/About';
import Explore from './views/Explore';
import Cards from './views/Cards';
import NewTrip from './views/NewTrip';
import SignIn from './components/Authentication/SignIn/SignIn';
import SignUp from './components/Authentication/SignUp/SignUp';


function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={ <Home/>} />
              <Route path="/about" element={ <About/>} />
              <Route path="/login" element={ <SignIn/>} />
              <Route path="/register" element={ <SignUp/>} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/explore/:id" element={<Cards />} />
              <Route path="/new/*" element={<NewTrip/>} />
              {/* <Route path='*' element={<h1>404 - Page not found</h1>} /> */}
          </Routes>
      </BrowserRouter>
    </>
)
}

export default App;

