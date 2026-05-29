import React, { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [city, setCity] = useState("Hyderabad");
  const [weather, setWeather] = useState(null);

  const API_KEY = "8dfb3caf7f374891f5048fa82d3aee06";

  const getWeather = async () => {

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );

    const data = await response.json();

    setWeather(data);
  };

  useEffect(() => {
    getWeather();
  }, []);

  return (
    <div className="app">

      <div className="box">

        <h1>Weather App</h1>

        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <button onClick={getWeather}>Search</button>

        {weather ? (
          <div>

            <h2>{weather.name}</h2>

            <h3>{weather.main?.temp} °C</h3>

            <p>{weather.weather?.[0]?.main}</p>

            <p>Humidity: {weather.main?.humidity}%</p>

            <p>Wind Speed: {weather.wind?.speed} km/h</p>

          </div>
        ) : (
          <p>Loading...</p>
        )}

      </div>

    </div>
  );
}

export default App;