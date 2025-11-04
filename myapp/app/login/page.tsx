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
    alert(`Нэвтэрлээ: ${email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-80 border hover:shadow-xl transition">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          🔐 Login
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Имэйл"
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Нууц үг"
            className="border p-2 rounded-md focus:ring-2 focus:ring-blue-400 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && (
            <p className="text-red-500 text-sm font-medium text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-md font-medium shadow hover:bg-blue-700 transition"
          >
            Нэвтрэх
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Бүртгэлгүй юу?{" "}
          <a className="text-blue-600 font-medium hover:underline" href="/register">
            Бүртгүүлэх
          </a>
        </p>
      </div>
    </div>
  );
}
