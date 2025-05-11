import {
  FaBuilding,
  FaChurch,
  FaHospital,
  FaHotel,
  FaSchool,
} from "react-icons/fa6";
import bgImage from "../../assets/images/bgImage.jpg";
import { GiClubs, GiShop } from "react-icons/gi";
import golfBall from "../../assets/images/golfBall.jpg";
import "../SiteMap";
import { Link } from "react-router-dom";

const Home = () => {
  const handleClick = () => {};

  return (
    <>
      <div className="bg-orange-500 m-2 rounded-xl mt-20 ml-4 ">
        <div className="flex justify-center ">
          <img
            className="flex h-[50vh] md:h-[84vh] relative z-999 w-full m-2 rounded-xl  "
            src={bgImage}
            alt="bgImage"
          />
        </div>
        <div className="absolute top-28 md:top-40  md:ml-12">
          <h1 className="text-4xl md:text-8xl z-999">
            Welcome to <br />
            Makuyu Ridge.
          </h1>
          <div className="flex  justify-between">
            <div className="  ">
              <p className="font-light text-sm px-2 text-[white]  leading-1 w-[400px] tracking-wider">
                Makuyu Ridge is a new holiday Golf Resort located in Makuyu,
                Murang’a County, covering 1,000 acres of land. It features ¼
                acre residential plots, commercial sites, and an 18-hole leisure
                and championship golf course with a modern clubhouse. The resort
                is designed to offer a peaceful retreat for holiday, leisure,
                golf, and conference guests.The project is located 72km from
                Nairobi in Makuyu, near Kakuzi off the Nairobi – Thika - Sagana
                highway. The resort is 8km off the main road on the rolling
                ridges amongst scenic coffee estates. The location is one hour
                away from Nairobi after Thika and Makutano.
              </p>

              <button className="py-2 bg-[#d28e0f] border-[white]/60 border-4  text-bold rounded-lg cursor-pointer tracking-widest absolute right-0  ">
                <Link
                  className="no-underline text-bold text- sm:md:text-lg  text-[white]"
                  to="/about"
                >
                  Explore More{">>"}{" "}
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className=" text-[#fce6c3] m-2 rounded-xl mx-4">
        <h3 className="text-center text-[#85472a] font-semibold tracking-tight md:tracking-wider">
          We have intergrated commercial and socio-economic amenities that
          include:
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-8 gap-4 justify-between items-center px-8 relative">
          <div className="block text-center -space-y-2">
            <FaSchool className="text-6xl pt-2 bg-MyBrown px-4 rounded-t-xl " />
            <p className="text-[#85472a] tracking-tighter">A school</p>
          </div>
          <div className="block text-center  -space-y-2">
            <FaHospital className="text-6xl pt-2 bg-MyBrown px-4 rounded-t-xl" />
            <p className="text-[#85472a] tracking-tighter">A hospital</p>
          </div>
          <div className="block text-center -space-y-2">
            <FaBuilding className="text-6xl pt-2 bg-MyBrown px-4 rounded-t-xl" />
            <p className="text-[#85472a] tracking-tighter">An office park</p>
          </div>
          <div className="block text-center -space-y-2">
            <GiShop className="text-6xl pt-2 bg-MyBrown px-4 rounded-t-xl" />
            <p className="text-[#85472a] tracking-tighter">
              A shopping mall
            </p>
          </div>
          <div className="block text-center -space-y-2">
            <FaChurch className="text-6xl pt-2 bg-MyBrown px-4 rounded-t-xl" />
            <p className="text-[#85472a] tracking-tighter">
              A community chapel
            </p>
          </div>
         
          <div className="block text-center -space-y-2">
            <FaHotel className="text-6xl py-2 bg-MyBrown px-4 rounded-t-xl " />
            <p className="text-[#85472a] tracking-tighter leading-4 mt-8">
              A hotel and convention center
            </p>
          </div>
        </div>
      </div>
      <div className="flex mt-4">
        <img
          className=" hidden md:flex max-h-[60vh] rounded-xl ml-2 relative"
          src={golfBall}
          alt="golfBall"
        />
        <div className="bg-[#414541] mx-4">
          <p className="sm:text-lg md:text-5xl  font-bold md:text-[white]  mb-0 ">
            {" "}
            An 18 hole golf course designed by world’s renowned golf architect
          </p>
          <button
            onClick={handleClick}
            className="flex justify-center text-xl tracking-wider rounded-3xl px-4 text-[white] font-semibold bg-[#e3711f] border-spacing-2 border-[white] cursor-pointer py-2"
          >
            View Site Map
          </button>
        </div>
      </div>
      <div className="container">
        <h1 className="text-center">Recent News</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 mx-4 gap-8">
          <div className="rounded-xl p-2 bg-[orange]/50 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo doloremque illo perferendis quisquam! Quam quidem quaerat atque molestiae quos ut, unde sapiente a totam, omnis veritatis laborum provident rem dolore? </div>
          <div className=" rounded-xl p-2 bg-[orange]/50 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic libero unde commodi quas iste repellat ad impedit atque debitis laboriosam itaque quis eos ullam autem, quibusdam error ex adipisci corrupti?</div>
          <div className=" rounded-xl p-2 bg-[orange]/50 ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, numquam! Sit, deserunt harum cupiditate placeat distinctio autem minus aut velit culpa odio voluptatem architecto itaque voluptates dolorum sequi molestiae saepe!</div>
          <div className=" rounded-xl p-2 bg-[orange]/50 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio rerum illo magni deleniti odit quae sit accusantium neque voluptate qui nesciunt beatae vero earum dolores, eaque sapiente officiis ratione est.</div>
        </div>
      </div>
    </>
  );
};

export default Home;
