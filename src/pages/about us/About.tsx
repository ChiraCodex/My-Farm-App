import { FaRoad, FaWater } from "react-icons/fa";
import { FaSatelliteDish } from "react-icons/fa6";
import { GiElectric } from "react-icons/gi";
import img9 from '../../assets/images/img-9.jpg'
import guard from '../../assets/images/guard.svg'
import trash from '../../assets/images/trash.svg'

const About = () => {
  return (
    <>
      <div>
        <h1>About us</h1>
      </div>
      <div>
        <p>
          Makuyu Ridge is an integrated country golf resort currently under
          construction on 1000 acres of land in Makuyu, Murang’a County.
          Comprising of residential, retirement and holiday homes, the project
          will be fully serviced with, among other amenities:
        </p>
      </div>
      <div className="grid grid-cols-6 mb-20 h-40 gap-4 items-center ml-32 justify-center">
        <div className="bg-[#e2e2a3] rounded-xl w-60 h-60  ">
          <div className="flex justify-center text-8xl mt-10  ">
            <FaWater />
            <GiElectric />
          </div>

          <h1 className="text-center text-2xl">Water & Electricity</h1>
        </div>
        <div className="bg-[#e2e2a3] rounded-xl w-60 h-60 ">
          <div className="text-8xl flex justify-center mt-10">
            <FaRoad />
          </div>
          <h1 className="text-center text-2xl">Modern Paved Road Network</h1>
        </div>
        <div className="bg-[#e2e2a3] rounded-xl w-60 h-60 ">
          <img className="w-36 h-36 flex ml-10" src={trash} alt="trash" />
          <h1 className="text-center text-2xl">
            A comprehensive Disposal System
          </h1>
        </div>
        <div className="bg-[#e2e2a3] rounded-xl w-60 h-60 ">
          <div className="flex justify-center text-8xl mt-10">
            <FaSatelliteDish/>
          </div>
          <h1 className="text-center text-2xl">Internet Connectivity</h1>
        </div>
        <div className="bg-[#e2e2a3] rounded-xl w-60 h-60 ">
          <div className="flex justify-center text-8xl">
            <img className="w-40 h-40 mt-4" src={guard} alt="guard" />
          </div>
          <h1 className="text-center text-2xl">All Round Security</h1>
        </div>
      </div>
      <div className="py-4">
        <p>
          The project landscaping will be beautiful and creative. There will be
          an 18-hole golf course with a well-equipped clubhouse within the
          resort city. There will be various socio-economic facilities to
          enhance the dwellers’ lifestyles. These will include a residents’
          clubhouse, a shopping mall, a school, children’s play areas and
          pleasant arboretums. The project will offer the residents a
          comfortable lifestyle that is close to nature, and it will be a
          flagship economic zone in Murang’a County.
        </p>
      </div>

      <div>
        <p>
          We currently have a special offer on 1/4 acre plots in Mvuli Ridge
          suburb running from 1st January 2021 to 31st April 2021. 25% discount
          from KES. 6M on fully serviced ¼ acre plots to KES.4.5Million. We
          encourage interested parties to take advantage of this limited offer.
        </p>
      </div>

      <h1>Investment & Economic Attractions</h1>

      <div className=" grid-cols-4 w-[60vw]  ml-0 md:ml-80 md:flex justify-center gap-4">
        <div className="rounded-xl bg-[#1a941a] text-[white] w-full h-20 md:w-60 md:h-60">
          <h1 className="text-center items-center justify-center mb- relative top-12 z-40">Dual Carriageway</h1>
          <img className=" hidden md:flex w-60 h-60 relative bottom-36 rounded-xl mt-1 z-30" src={img9} alt="" />
        </div>
        <div className="rounded-xl  bg-[#1a941a] text-[white] w-60 h-60">
          <h1 className="text-center">Farming</h1>
        </div>
        <div className="rounded-xl  bg-[#1a941a] text-[white] w-60 h-60">
          <h1 className="text-center">Horticulture</h1>
        </div>
        <div className="rounded-xl  bg-[#1a941a] text-[white] w-60 h-60">
          <h1 className="text-center">Neibouring Kakuzi Farm</h1>
        </div>
      </div>
    </>
  );
};

export default About;
