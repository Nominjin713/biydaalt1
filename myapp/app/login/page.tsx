"use client";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Имэйл буруу байна!");
      return;
    }
    if (password.length < 6) {
      setError("Нууц үг хамгийн багадаа 6 тэмдэгт байх ёстой!");
      return;
    }

    setError("");
    alert(`✅ Амжилттай нэвтэрлээ: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 p-6">
      <div className="bg-white/50 backdrop-blur-xl p-8 rounded-2xl shadow-xl w-96 border border-white/40 animate-fadeIn">
        <h1 className="text-4xl font-extrabold text-center text-indigo-800 drop-shadow mb-6 animate-fadeIn">
          🔐 Нэвтрэх
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Имэйл"
            className="w-full bg-white/70 border border-indigo-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Нууц үг"
            className="w-full bg-white/70 border border-indigo-200 p-3 rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none shadow-sm"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm font-semibold text-center animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-0.5 transition"
          >
            Нэвтрэх
          </button>
        </form>

        <p className="text-center text-gray-700 mt-5 text-sm">
          Бүртгэлгүй юу?{" "}
          <a href="/register" className="text-indigo-700 font-semibold hover:underline">
            Бүртгүүлэх
          </a>
        </p>
      </div>
    </div>
  );
}
