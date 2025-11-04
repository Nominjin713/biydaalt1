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
      <p className="text-gray-500 text-center mt-10 text-lg animate-pulse">
        Ачаалж байна...
      </p>
    );

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">
        👤 Хэрэглэгчдийн жагсаалт
      </h1>

      <ul className="w-full max-w-2xl space-y-4">
        {users.map((u) => (
          <li
            key={u.id}
            className="p-4 bg-white rounded-xl border shadow-md hover:shadow-lg hover:-translate-y-1 transition"
          >
            <p className="text-xl font-semibold text-gray-800">{u.name}</p>
            <p className="text-gray-600">{u.email}</p>
            <p className="text-sm text-blue-500 font-medium">{u.address.city}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
