import { useState } from "react";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import DateTime from "./components/DateTime";

import { getWeather } from "./services/weatherApi";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  async function handleSearch(city) {
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(city);

      if (!data || (data.cod && Number(data.cod) !== 200)) {
        setWeatherData(null);
        setError("❌ City not found");
      } else {
        setWeatherData(data);
      }
    } catch (err) {
      console.log(err);
      setError("⚠ Unable to fetch weather data");
    }

    setLoading(false);
  }

  const weatherType =
    weatherData?.weather?.[0]?.main?.toLowerCase() || "default";

  return (
    <div className={`app ${weatherType} ${darkMode ? "dark" : ""}`}>

      {/* Weather Animation */}
      <div className="weather-animation">
        {weatherType === "rain" && (
          <>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </>
        )}

        {weatherType === "snow" && (
          <>
            <span>❄</span>
            <span>❄</span>
            <span>❄</span>
            <span>❄</span>
            <span>❄</span>
          </>
        )}

        {weatherType === "clear" && (
          <div className="sun"></div>
        )}
      </div>

      <main className="container">

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

        <h1>🌤 Weather App</h1>

        <p className="subtitle">
          Real-time Weather Information Worldwide 🌍
        </p>

        <SearchBar onSearch={handleSearch} />

        <DateTime />

        {loading && <div className="spinner"></div>}

        {error && <p className="error">{error}</p>}

        {weatherData && (
          <>
            <WeatherCard weather={weatherData} />
            <WeatherDetails weather={weatherData} />
          </>
        )}

        <footer className="footer">
          <p>Powered by OpenWeather API</p>
          <p>Made with ❤️ by M Abdullah</p>
        </footer>

      </main>

    </div>
  );
}

export default App;