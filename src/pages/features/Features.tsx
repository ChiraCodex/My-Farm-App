import golf from "../../assets/images/img-3.jpg";
import villa from "../../assets/images/spanish villa.jpeg";
import mtKenya from "../../assets/images/mt.-kenya.jpeg";
import ecolodge from "../../assets/images/eco-lodge.jpeg";
import connection from "../../assets/images/ict.jpeg";
import playground from "../../assets/images/playground.jpeg";
import dam from "../../assets/images/masinga.jpeg";
import mall from "../../assets/images/mall.jpeg";
import chapel from "../../assets/images/chapel.jpeg";

const Features = () => {
  return (
    <>
      <div className="m-4">
        <h1>Feautres</h1>
      </div>

      <div className="m-4">
        <p className="text-6xl font-black text-center capitalize text-white tracking-widest mb-8">
          The project offers:
        </p>

        {/* Flex container for the content */}
        <div className="flex flex-wrap gap-8 ">
          {/* Card 1 */}
          <div className="flex gap-8">
            <div className="relative">
              <img
                className="rounded-xl h-[440px] "
                src={villa}
                alt="spanish-villa"
              />
              <div className="absolute bottom-2 w-full rounded-b-xl bg-[beige]/70 border-MyOrange">
                <p className="text-center text-2xl font-bold capitalize px-4  text-MyBrown">
                  Scenic Spanish style Homes
                </p>
              </div>
            </div>

            <div>
              <div className="relative top-20">
                <img
                  className="rounded-xl w-[400px] "
                  src={chapel}
                  alt="chapel"
                />
                <div className="absolute bottom-2 w-full rounded-b-xl bg-[beige]/70 border-MyOrange">
                  <p className="text-center text-2xl font-bold capitalize px-4 text-MyBrown">
                    A community chapel
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                className="rounded-xl h-[440px] "
                src={mtKenya}
                alt="mt-kenya"
              />
              <div className="absolute bottom-2 w-full rounded-b-xl bg-[beige]/70 border-MyOrange">
                <p className="text-center text-2xl font-bold capitalize px-4 text-MyBrown">
                  Spectacular views of Mt. Kenya
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="  rounded-xl  relative">
              <img
                className="rounded-xl shadow-xl w-[600px]"
                src={ecolodge}
                alt="eco-lodge"
              />
              <div className="absolute top-0 w-full rounded-t-xl bg-[beige]/70 border-MyOrange">
                <p className="text-center text-2xl font-bold capitalize px-4 text-MyBrown">
                  Eco-lodges & Arboretums
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-MyBrown rounded-xl px-4">
              <p className="capitalize text-[white] font-bold text-4xl ">contact us for site visits, any and all enquiries at:</p>
              <div className="text-[beige] tracking-wider leading-2">
                <p > info@makuyuridge.co.ke</p>
              <p>+254 (0) 20 206 782</p>              
              <p>+254 (0) 113 342 473</p>
              <p>+254 (0) 739 999 066</p>
              </div>
            </div>

            {/*card 3 */}
            <div className=" relative ">
              <img
                src={connection}
                alt="connection"
                className=" rounded-xl w-[640px] h-[340px] "
              />
              <div className="absolute top-0 w-full  rounded-b-xl bg-[beige]/40 border-MyOrange">
                <p className="text-center text-2xl font-bold capitalize px-4 text-MyBrown">
                  ICT connection
                </p>
              </div>
            </div>
          </div>

          {/* Additional Cards */}

          <div className="flex justify-between gap-20">
            <div className="rounded-xl w-1/2 shadow-xl relative px-4">
              <div className="flex gap-20">
                <img className=" rounded-xl" src={villa} alt="gardens" />
                
              </div>
              <div className="absolute bottom-0 rounded-b-xl  w-full bg-[beige]/70 py-1">
                <p className="text-center text-xl font-bold capitalize px-4 text-MyBrown">
                  beautiful landscaped gardens
                </p>
              </div>
            </div>

            <div className="relative ">
              <img src={dam} alt="dam" className="rounded-xl" />
              <div className="absolute bottom-2 w-full rounded-b-xl bg-[beige]/70 py-1">
                <p className="text-center text-xl font-bold capitalize px-4 text-MyBrown">
                  scenic view of masinga dam
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <div className=" relative">
              <img src={mall} alt="mall" className="h-[340px] rounded-xl" />
              <div className="absolute bottom-0 rounded-br-xl rounded-bl-xl  bg-[beige]/70 py-1">
                <p className="text-center text-xl font-bold capitalize px-4 text-MyBrown">
                  modern mall with convinient stores
                </p>
              </div>
            </div>
            <div className="relative ">
              <img className="rounded-xl w-[600px]" src={golf} alt="golf" />
              <p className="text-center flex absolute bottom-0">
                An 18 hole golf course designed by world’s renowned golf
                architect
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
