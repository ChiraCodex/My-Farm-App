import {Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Weather from "./components/pages/Weather"
import About from "./components/pages/About"
import SignUp from "./components/pages/SignUp"
import Login from "./components/pages/login"
import HarvestAlerts from "./components/data/HarvestAlerts"
import MarketPrices from "./components/data/MarketPrices"
import Solutions from "./components/pages/Solutions"

function App() {  

  return (    
    <>
     <Navbar/> 
     
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/markets" element={<MarketPrices/>}/>
        <Route path="/harvests" element={<HarvestAlerts/>}/>
        <Route path="/weather" element={<Weather/>}/>
        <Route path="/sign-up" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/solutions" element={<Solutions/>}/>
      </Routes>
    
    </>
  )
}

export default App
