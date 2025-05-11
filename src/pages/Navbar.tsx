
import Logo from "../assets/images/Makuyu_Ridge_logo.png";
import { Link } from "react-router-dom";



const Navbar = () => {

 






  return (
    <div>
     <nav>
        <div className=" bg-[Beige] grid  rounded-lg min-w-full grid-cols-3  h-20 fixed top-0 z-1000 mb-20   shadow-lg ">

          <div className="relative">
          <Link to='/home'><img className="w-[120px] h-[80px] py-2 ml-2 md:ml-8" src={Logo} alt="logo" /></Link> 
          </div>

          <div className=" hidden md:flex justify-center items-center gap-8 ">
            <p className="hover:font-bold "><Link to='/about' className=" text-[black] no-underline hover:text-[orange] focus:text-[orange] focus:font-bold">About Us</Link> </p>
            <p className="hover:font-bold hover:text-[#eb9c42] focus:text-[orange]"><Link to='/features' className="text-[black] no-underline hover:text-[orange] focus:text-[orange] focus:font-bold">Features</Link> </p>
            <p className="hover:font-bold hover:text-[orange] focus:text-[orange]"><Link to='/projects' className="text-[black] no-underline hover:text-[orange] focus:text-[orange] focus:font-bold">Project</Link></p>            
            <p className="hover:font-bold hover:text-[orange] focus:text-[orange]">Contact Us</p>
          </div>

          <div className="hidden md:flex items-center justify-end mr-12 gap-8 text-xl ">
           <button className="rounded-3xl px-8 h-10  relative bg-[#d28e0f] border-none cursor-pointer"><p className="text-[white] font-semibold text-lg flex relative bottom-3 tracking-widest">Get Started</p></button>
          </div>
        </div>
      </nav> 
    </div>
  )
}

export default Navbar
