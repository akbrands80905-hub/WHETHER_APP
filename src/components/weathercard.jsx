function WeatherCard({ weather }) {

  if (!weather) {
    return (
      <div className="weather-card empty">
        <h3>🔍 Search a city to see weather</h3>
        <p>Get real-time weather updates worldwide</p>
      </div>
    );
  }


  const condition = weather.weather[0].main.toLowerCase();


  const icons = {

    clear: "☀️",

    clouds: "☁️",

    rain: "🌧️",

    drizzle: "🌦️",

    thunderstorm: "⛈️",

    snow: "❄️",

    mist: "🌫️",

    haze: "🌫️",

    fog: "🌫️"

  };


  const icon = icons[condition] || "🌤️";


  return (

    <div className="weather-card">


      <div className="location">

        <h2>
          📍 {weather.name}
        </h2>


        <img

          src={`https://flagcdn.com/w80/${weather.sys.country.toLowerCase()}.png`}

          alt={weather.sys.country}

          className="country-flag"

        />

      </div>



      <div className="weather-icon">

        {icon}

      </div>



      <h1>

        {Math.round(weather.main.temp)}°C

      </h1>



      <h3>

        {weather.weather[0].main}

      </h3>



      <p>

        {weather.weather[0].description}

      </p>



      <div className="temp-info">


        <div>

          <span>
            Feels Like
          </span>

          <h4>
            {Math.round(weather.main.feels_like)}°C
          </h4>

        </div>



        <div>

          <span>
            Humidity
          </span>

          <h4>
            💧 {weather.main.humidity}%
          </h4>

        </div>



        <div>

          <span>
            Wind
          </span>

          <h4>
            💨 {weather.wind.speed} m/s
          </h4>

        </div>


      </div>


    </div>

  );

}


export default WeatherCard;