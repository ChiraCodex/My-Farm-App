import {Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/pages/Home"
import Markets from "./components/pages/Markets"
import Harvests from "./components/pages/Harvests"
import Weather from "./components/pages/Weather"
import About from "./components/pages/About"

function App() {  

  return (    
    <>
     <Navbar/> 
     
     
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about-us" element={<About/>}/>
        <Route path="/markets" element={<Markets/>}/>
        <Route path="/harvests" element={<Harvests/>}/>
        <Route path="/weather" element={<Weather/>}/>
      </Routes>
    
    </>
  )
}

export default App
