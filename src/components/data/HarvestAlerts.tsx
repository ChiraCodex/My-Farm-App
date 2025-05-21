import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

interface Crop {
  name: string;
  daysToHarvest: number;
}

interface ForecastDay {
  date: string;
  day: {
    daily_chance_of_rain: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

const crops: Crop[] = [
  { name: 'Maize', daysToHarvest: 90 },
  { name: 'Beans', daysToHarvest: 60 },
  { name: 'Tomatoes', daysToHarvest: 75 },
];

const HarvestAlerts: React.FC = () => {
  const [plantingDate, setPlantingDate] = useState<string>('');
  const [selectedCrop, setSelectedCrop] = useState<string>('Maize');
  const [location, setLocation] = useState<string>('Meru');
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const apiKey = import.meta.env.VITE_WEATHER_API_KEY || '18775102b91a44048cf165129252105';

  useEffect(() => {
    if (location) {
      fetchForecast(location);
    }
  }, [location]);

  const fetchForecast = async (loc: string) => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
        params: {
          key: apiKey,
          q: loc,
          days: 7,
        },
        timeout: 5000,
      });
      setForecast(res.data.forecast?.forecastday || []);
    } catch (err) {
      handleForecastError(err);
    } finally {
      setLoading(false);
    }
  };

  const handleForecastError = (err: unknown) => {
    if (axios.isAxiosError(err)) {
      if (err.response) {
        switch (err.response.status) {
          case 400:
            setError('Invalid location. Please try another.');
            break;
          case 401:
            setError('Invalid API key');
            break;
          case 404:
            setError('Location not found');
            break;
          default:
            setError('Failed to load forecast data');
        }
      } else if (err.request) {
        setError('Network error. Please check your connection.');
      } else {
        setError('Failed to fetch weather data');
      }
    } else {
      setError('An unexpected error occurred');
    }
    console.error('Forecast error:', err);
  };

  const getExpectedHarvestDate = (): Date | null => {
    if (!plantingDate) return null;
    const crop = crops.find((c) => c.name === selectedCrop);
    if (!crop) return null;
    const plantDate = new Date(plantingDate);
    plantDate.setDate(plantDate.getDate() + crop.daysToHarvest);
    return plantDate;
  };

  const isHarvestTime = (): boolean => {
    const harvestDate = getExpectedHarvestDate();
    if (!harvestDate) return false;
    const today = new Date();
    return today.toDateString() >= harvestDate.toDateString();
  };

  const isWeatherGood = (): boolean => {
    if (forecast.length === 0) return false;
    return forecast.slice(0, 3).every(day => day.day.daily_chance_of_rain < 30);
  };

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4 text-center">Harvest Alerts</h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Select Crop:</label>
        <select
          className="border p-2 rounded w-full"
          value={selectedCrop}
          onChange={(e) => setSelectedCrop(e.target.value)}
        >
          {crops.map((crop) => (
            <option key={crop.name} value={crop.name}>{crop.name}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Planting Date:</label>
        <input
          type="date"
          className="border p-2 rounded w-full"
          value={plantingDate}
          onChange={(e) => setPlantingDate(e.target.value)}
          max={new Date().toISOString().split('T')[0]}
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Location:</label>
        <input
          type="text"
          className="border p-2 rounded w-full"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter city name"
        />
      </div>

      {loading && <p className="text-center">Loading weather data...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {forecast.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2 text-center">🌧 Rain Forecast (Next 7 Days)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={forecast.map(day => ({
              date: day.date,
              rainChance: day.day.daily_chance_of_rain
            }))}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis unit="%" />
              <Tooltip />
              <Line type="monotone" dataKey="rainChance" stroke="#8884d8" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {isHarvestTime() && (
        <div className="bg-green-100 border-l-4 border-green-500 p-4 mt-4">
          <p className="text-green-700 font-bold">✅ It's harvest time for {selectedCrop}!</p>
          {forecast.length > 0 ? (
            isWeatherGood() ? (
              <p className="text-green-600">🌤️ Weather is favorable for harvest.</p>
            ) : (
              <p className="text-yellow-600">⚠️ Rain expected soon. Consider early harvest.</p>
            )
          ) : (
            <p className="text-gray-600">No weather data available for decision.</p>
          )}
          <p className="text-sm mt-2">
            Expected harvest date: {formatDate(getExpectedHarvestDate()!)}
          </p>
        </div>
      )}

      {!isHarvestTime() && plantingDate && (
        <div className="bg-blue-100 border-l-4 border-blue-500 p-4 mt-4">
          <p className="text-blue-700">
            Harvest expected around: {formatDate(getExpectedHarvestDate()!)}
          </p>
        </div>
      )}
    </div>
  );
};

export default HarvestAlerts;
