function WeatherDetails({ weather }) {

  if (!weather) {
    return null;
  }


  function formatTime(timestamp){

    const date = new Date(timestamp * 1000);

    return date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });

  }



  return (

    <div className="details-section">


      <h2 className="details-title">
        🌍 Weather Details
      </h2>



      <div className="info-grid">


        <div className="info-box">

          <h3>
            💧 Humidity
          </h3>

          <p>
            {weather.main.humidity}%
          </p>

        </div>



        <div className="info-box">

          <h3>
            💨 Wind Speed
          </h3>

          <p>
            {weather.wind.speed} m/s
          </p>

        </div>



        <div className="info-box">

          <h3>
            🌡 Pressure
          </h3>

          <p>
            {weather.main.pressure} hPa
          </p>

        </div>



        <div className="info-box">

          <h3>
            👁 Visibility
          </h3>

          <p>
            {(weather.visibility / 1000).toFixed(1)} km
          </p>

        </div>



        <div className="info-box">

          <h3>
            🌅 Sunrise
          </h3>

          <p>
            {formatTime(weather.sys.sunrise)}
          </p>

        </div>



        <div className="info-box">

          <h3>
            🌇 Sunset
          </h3>

          <p>
            {formatTime(weather.sys.sunset)}
          </p>

        </div>


      </div>


    </div>

  );

}


export default WeatherDetails;