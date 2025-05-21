import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        const response = await axios.get<MarketPrice[]>('/data/mock-market-prices.json');
        setPrices(response.data);
      } catch (err) {
        setError('Failed to load market prices from local file');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div className="p-4 bg-springBeige text-jungleGreen w-1/2  shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center">Market Prices</h2>
      {loading && <p>Loading prices...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {!loading && prices.length > 0 && (
        <table className="w-full table-auto text-sm ">
          <thead>
            <tr>
              <th>Commodity</th>
              <th>Market</th>
              <th>Wholesale (/kg)</th>
              <th>Retail (/kg)</th>
              <th className='bg-neonGreen'>Date</th>
            </tr>
          </thead>
          <tbody>
            {prices.slice(0, 10).map((price, idx) => (
              <tr key={idx} className="border-y border-x">
                <td className='flex justify-center'>{price.commodity}</td>
                <td className=' text-center'>{price.market}</td>
                <td className='text-center font-semibold'>{price.wholesale_price}</td>
                <td className='text-center font-semibold'>{price.retail_price}</td>
                <td className=' text-center font-semibold '>{price.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MarketPrices;
