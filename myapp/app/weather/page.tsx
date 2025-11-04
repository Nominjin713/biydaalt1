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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-300 to-blue-100 p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-700">🌤 Weather App</h1>

      <form onSubmit={fetchWeather} className="flex gap-3 mb-6">
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ulaanbaatar..."
          className="border px-4 py-2 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700 transition">
          Хайх
        </button>
      </form>

      {weather && (
        <div className="p-6 border rounded-2xl text-center bg-white shadow-xl animate-fadeIn w-72">
          <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
          <p className="text-5xl font-bold text-blue-600">{weather.main.temp}°C</p>
          <p className="capitalize text-gray-600 mt-2">{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
