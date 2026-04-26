import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [city, setCity] = useState("Bangalore");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const API_KEY = "YOUR_API";

  const fetchWeather = async () => {
    try {
      setLoading(true);
      setError("");

      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );

      if (!res.ok) throw new Error("City not found");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3c72, #2a5298)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
        color: "white",
      }}
    >
      <div
        style={{
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.1)",
          padding: "30px",
          borderRadius: "20px",
          width: "350px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <h2>🌦 Weather Dashboard</h2>

        <div style={{ marginBottom: "15px" }}>
          <input
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
            style={{
              padding: "10px",
              width: "65%",
              borderRadius: "8px",
              border: "none",
              outline: "none",
            }}
          />

          <button
            onClick={fetchWeather}
            style={{
              marginLeft: "10px",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "#00c6ff",
              color: "white",
              cursor: "pointer",
            }}
          >
            Search
          </button>
        </div>

        {loading && <p>⏳ Fetching weather...</p>}
        {error && <p style={{ color: "#ff6b6b" }}>{error}</p>}

        {weather && !loading && (
          <div>
            <h2>{weather.name}</h2>

            <img
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="weather icon"
            />

            <h1>{weather.main.temp}°C</h1>
            <p>{weather.weather[0].description}</p>

            <div style={{ marginTop: "15px", fontSize: "14px" }}>
              <p>🌡 Feels like: {weather.main.feels_like}°C</p>
              <p>💧 Humidity: {weather.main.humidity}%</p>
              <p>🌬 Wind: {weather.wind.speed} m/s</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;