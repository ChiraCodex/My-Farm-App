import React, { useEffect, useState } from "react";
import axios from "axios";
import bg from '../../assets/images/market-bg.png'
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

interface MarketPrice {
  commodity: string;
  market: string;
  wholesale_price: number;
  retail_price: number;
  unit: string;
  date: string;
}

const MarketPrices: React.FC = () => {
  const [prices, setPrices] = useState<MarketPrice[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPrices = async () => {
      setLoading(true);
      setError(null);
      try {
        // Load from local JSON file placed in public/data/mock-market-prices.json
        const response = await axios.get<MarketPrice[]>(
          "/data/mock-market-prices.json"
        );
        setPrices(response.data);
      } catch (err) {
        setError("Failed to load market prices from local file");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <>
    <div>
            <h1>Latest Market Prices Near You</h1>
            <p>
              We provide up-to-date prices from major local and regional markets
              to help you make informed selling decisions.
              </p>
              <br/>
            <ul>
              <li>Maize: KSH 4,200 per 90kg bag – Nairobi market</li>
              <li>Tomatoes: KSH 3,000 per crate – Eldoret Market</li>
              <li>Beans: KSH 6,500 per 90kg bag – Kisumu Market</li>
            </ul>
    </div>
    <br/>
      <img className="hidden lg:flex relative w-full h-[90vh] opacity-50" src={bg} alt="" />
      
      <div className="absolute top-[50vh] lg:left-[25vw] p-4 bg-someBrown/50 text-springBeige lg:w-1/2 w-11/12 px-2 backdrop-blur ml-3 shadow rounded">
      <div className="absolute -top-6 hover:font-bold">
        <Link className="" to={'/'}>{"<"}Go Back</Link>
      </div>
        <h2 className="text-xl font-bold mb-4 text-center">Market Prices</h2>
        {loading && <p>Loading prices...</p>}
        {error && <p className="text-[red]">{error}</p>}
        {!loading && prices.length > 0 && (
          <table className="w-full table-auto text-sm ">
            <thead>
              <tr className="border">
                <th>Commodity</th>
                <th className="bg-neonGreen/50 border">Market</th>
                <th>Wholesale (/kg)</th>
                <th className="bg-neonGreen/50 border">Retail (/kg)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {prices.slice(0, 10).map((price, idx) => (
                <tr key={idx} className="border-y border-x">
                  <td className="flex justify-center">{price.commodity}</td>
                  <td className=" text-center  bg-neonGreen/50 px-2 border-x ">{price.market}</td>
                  <td className="text-center font-light">
                    {price.wholesale_price}
                  </td>
                  <td className="text-center bg-neonGreen/50 font-semibold border-x">
                    {price.retail_price}
                  </td>
                  <td className=" text-center font-light px-2 text-sm">{price.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
     <div className="absolute -bottom-60">
       <Footer/>
     </div>
    </>
  );
};

export default MarketPrices;
