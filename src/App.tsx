import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import About from './pages/about us/About'
import Footer from './pages/Footer'
import Home from './pages/home/Home'
import Navbar from './pages/Navbar'
import Features from "./pages/features/Features";
import Projects from "./pages/projects/Projects";

function App() {  

  return (

    
    <>
      
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/projects' element={<Projects/>} />
        </Routes>
        <Footer/>
        </BrowserRouter>
      

    </>
  )
}

export default App
