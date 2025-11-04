"use client";
import { useState } from "react";

export default function WeatherPage() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<any>(null);

  const fetchWeather = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
        city
      )}&appid=081de78679683594546d9dfdd1215115&units=metric`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 via-blue-700 to-cyan-500 p-6">
      <h1 className="text-5xl font-extrabold mb-10 text-cyan-300 drop-shadow-[0_0_20px_#00eaff] animate-fadeIn">
        🌤 Weather App
      </h1>

      <form
        onSubmit={fetchWeather}
        className="flex gap-3 mb-6 bg-white/20 backdrop-blur-xl p-4 rounded-2xl shadow-2xl border border-cyan-300/40 animate-slideUp"
      >
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Ulaanbaatar..."
          className="border border-cyan-300/40 px-4 py-2 rounded-lg shadow-inner text-white placeholder-cyan-200 focus:ring-2 focus:ring-cyan-300 outline-none bg-white/10"
        />
        <button className="bg-cyan-500 text-white font-bold px-6 py-2 rounded-xl shadow-lg hover:bg-cyan-400 hover:scale-110 active:scale-95 transition-all duration-200">
          Хайх
        </button>
      </form>

      {weather && (
        <div className="p-6 rounded-2xl text-center bg-white/20 backdrop-blur-2xl shadow-xl animate-fadeIn w-80 border border-cyan-300/50">
          <h2 className="text-3xl font-bold mb-2 text-cyan-200 drop-shadow-[0_0_15px_#00d5ff]">
            {weather.name}
          </h2>
          <p className="text-7xl font-extrabold text-white drop-shadow-[0_0_25px_#00eaff]">
            {weather.main.temp}°C
          </p>
          <p className="capitalize text-cyan-100 mt-2 text-lg font-medium">
            {weather.weather[0].description}
          </p>
        </div>
      )}
    </div>
  );
}
