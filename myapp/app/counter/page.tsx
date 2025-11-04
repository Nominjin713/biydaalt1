 "use client";

import { useState } from "react";

export default function CounterPage() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const double = () => setCount(count * 2);
  const halve = () => count > 1 && setCount(Math.floor(count / 2));
  const reset = () => setCount(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 p-6">
      <div className="bg-white/50 backdrop-blur-xl p-10 rounded-2xl shadow-2xl border border-white/40 text-center w-[380px] animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-6 drop-shadow">
          🔢 Тоолуур
        </h1>

        <h2 className="text-6xl font-bold text-gray-800 mb-8 animate-pulse">
          {count}
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={decrement}
            className="px-5 py-3 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xl shadow hover:shadow-lg transition active:scale-90"
          >
            −
          </button>

          <button
            onClick={increment}
            className="px-5 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-xl shadow hover:shadow-lg transition active:scale-90"
          >
            +
          </button>

          <button
            onClick={double}
            className="px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-xl shadow hover:shadow-lg transition active:scale-90"
          >
            ×2
          </button>

          <button
            onClick={halve}
            className="px-5 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl text-xl shadow hover:shadow-lg transition active:scale-90"
          >
            ÷2
          </button>

          <button
            onClick={reset}
            className="px-5 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-xl text-xl shadow hover:shadow-lg transition active:scale-90"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}
