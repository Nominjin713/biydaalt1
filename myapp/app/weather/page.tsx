"use client";
import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=081de78679683594546d9dfdd1215115&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>

      <form onSubmit={fetchWeather} className="flex gap-2 mb-4">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Хотын нэр..."
          className="border px-3 py-1 rounded"
        />
        <button className="bg-blue-500 text-white px-4 py-1 rounded">
          Хайх
        </button>
      </form>

      {weather && (
        <div className="p-4 border rounded text-center">
          <h2 className="text-xl font-semibold">{weather.name}</h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
