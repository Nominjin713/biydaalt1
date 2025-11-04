"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) return setError("Имэйл буруу байна!");
    if (password.length < 6) return setError("Нууц үг хамгийн багадаа 6 тэмдэгт!");
    if (password !== confirm) return setError("Нууц үг таарахгүй байна!");

    setError("");
    localStorage.setItem("user", JSON.stringify({ name, email }));
    alert("✅ Бүртгэл амжилттай!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700 p-6">
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl border border-cyan-300/30 shadow-[0_0_25px_rgba(0,255,255,0.25)] rounded-2xl p-8 animate-fadeIn">
        
        <h1 className="text-4xl font-extrabold text-center text-cyan-300 drop-shadow-[0_0_15px_#00eaff] mb-8">
          ✨ Register
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Нэр"
            className="bg-white/20 border border-cyan-300/30 rounded-xl px-4 py-2 text-white placeholder-cyan-200 focus:ring focus:ring-cyan-400/50 outline-none"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          
          <input
            type="email"
            placeholder="Имэйл"
            className="bg-white/20 border border-cyan-300/30 rounded-xl px-4 py-2 text-white placeholder-cyan-200 focus:ring focus:ring-cyan-400/50 outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Нууц үг"
            className="bg-white/20 border border-cyan-300/30 rounded-xl px-4 py-2 text-white placeholder-cyan-200 focus:ring focus:ring-cyan-400/50 outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          
          <input
            type="password"
            placeholder="Нууц үг давтах"
            className="bg-white/20 border border-cyan-300/30 rounded-xl px-4 py-2 text-white placeholder-cyan-200 focus:ring focus:ring-cyan-400/50 outline-none"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />

          {error && (
            <p className="text-red-400 font-medium text-center animate-pulse">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="bg-cyan-500/80 hover:bg-cyan-400 text-white font-bold py-2 rounded-xl shadow-[0_0_12px_#00eaff] hover:shadow-[0_0_25px_#00eaff] transition-all"
          >
            ✅ Бүртгүүлэх
          </button>
        </form>
      </div>
    </div>
  );
}
