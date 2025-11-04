"use client";
import { useState, useEffect } from "react";

export default function UsersPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await res.json();
        setUsers(data);
      } catch (error) {
        console.error("Алдаа:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchUsers();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-800 via-blue-700 to-cyan-500">
        <p className="text-cyan-300 text-2xl font-semibold animate-pulse drop-shadow-[0_0_15px_#00eaff]">
          ⏳ Ачаалж байна...
        </p>
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-700">
      <h1 className="text-5xl font-extrabold mb-10 text-cyan-300 drop-shadow-[0_0_25px_#00eaff] animate-fadeIn">
        👥 Хэрэглэгчид
      </h1>

      <ul className="w-full max-w-3xl space-y-6">
        {users.map((u, i) => (
          <li
            key={u.id}
            className="
              p-6 rounded-2xl
              bg-white/10 backdrop-blur-xl 
              border border-cyan-300/20 
              shadow-[0_0_15px_rgba(0,255,255,0.25)]
              hover:shadow-[0_0_35px_rgba(0,255,255,0.55)]
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:scale-[1.03]
              animate-slideUp
            "
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <p className="text-2xl font-bold text-white drop-shadow-md">{u.name}</p>
            <p className="text-cyan-200">{u.email}</p>
            <p className="text-sm text-indigo-300 mt-1 font-medium flex items-center gap-1">
              📍 {u.address.city}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
