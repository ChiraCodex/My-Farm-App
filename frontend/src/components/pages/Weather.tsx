
function Weather() {
  return (
    <div>
      <div className="mt-4">            
            <h2 className="font-bold text-4xl">Weather Watch</h2>
            <p className="font-semibold">Stay Weather Smart – 7-Day Forecast for Farmers</p>
            <p>
              Plan your planting, irrigation, and harvest with localized weather reports.
            </p>
            <p>Today’s Forecast (Example - Nakuru):</p>
            <ul>
              <li>🌤️ Morning: Sunny (21°C)</li>
              <li>🌧️ Afternoon: Light showers (25°C)</li>
              <li>🌙 Evening: Cloudy (17°C)</li>
            </ul>
            <p>Weekly Overview:
              <ul>
                <li>
                  Monday: Partly cloudy, no rain
                </li>
                <li>
                 Tuesday: 60% chance of rain – delay spraying 
                </li>
                <li>
                  Wednesday: Ideal for planting new seedlings
                </li>
              </ul>
            </p>

          </div>
    </div>
  )
}

export default Weather
