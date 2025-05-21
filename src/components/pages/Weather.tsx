import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface ForecastDay {
  date: string;
  day: {
    avgtemp_c: number;
    maxtemp_c: number;
    mintemp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
}

interface WeatherData {
  location: {
    name: string;
    region: string;
    country: string;
  };
  current: {
    temp_c: number;
    humidity: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: ForecastDay[];
  };
}

const Weather: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [input, setInput] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.WEATHER_API_KEY || '3b5e473b1e7c4918920161419252105';

  const fetchWeather = async (query: string) => {
    try {
      setLoading(true);
      setError(null);

      const res = await axios.get(`https://api.weatherapi.com/v1/forecast.json`, {
        params: {
          key: apiKey,
          q: query,
          days: 7,
          aqi: 'no',
          alerts: 'no',
        },
      });

      setWeather(res.data);
    } catch (err) {
      console.error(err);
      setError('Failed to fetch weather data. Try a valid location.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          fetchWeather(`${position.coords.latitude},${position.coords.longitude}`);
        },
        () => {
          setLoading(false);
          setError('Location access denied. Please search manually.');
        }
      );
    } else {
      setLoading(false);
      setError('Geolocation not supported. Please search manually.');
    }
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      fetchWeather(input.trim());
      setInput('');
    }
  };

  return (
    <div className="p-4 max-w-lg mx-auto bg-white rounded shadow mt-4">
      <h2 className="text-xl font-bold text-center mb-4"> Weather Forecast</h2>

      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          className="border p-2 rounded flex-1"
          placeholder="Search by city or coordinates (e.g. Meru, 0.23,37.89)"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 rounded disabled:opacity-50"
          disabled={loading || !input.trim()}
        >
          {loading ? '...' : 'Search'}
        </button>
      </form>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : weather ? (
        <>
          <div className="text-center mb-6">
            <h3 className="text-lg font-semibold">
              Today in {weather.location.name}, {weather.location.country}
            </h3>
            <img
              src={weather.current.condition.icon}
              alt={weather.current.condition.text}
              className="mx-auto"
            />
            <p className="text-2xl font-bold">{Math.round(weather.current.temp_c)}°C</p>
            <p className="capitalize">{weather.current.condition.text}</p>
            <p className="text-sm text-gray-600">Humidity: {weather.current.humidity}%</p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-2">7-Day Forecast</h3>
            <ul className="grid gap-2">
              {weather.forecast.forecastday.map((day) => (
                <li key={day.date} className="flex justify-between items-center border p-2 rounded">
                  <span>{new Date(day.date).toDateString()}</span>
                  <img src={day.day.condition.icon} alt={day.day.condition.text} className="h-8 w-8" />
                  <span>
                    {Math.round(day.day.mintemp_c)}° / {Math.round(day.day.maxtemp_c)}°
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <p className="text-center">No weather data available</p>
      )}
    </div>
  );
};

export default Weather;
