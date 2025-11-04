"use client";
import { useState, useEffect } from "react";

interface Todo {
  text: string;
  done: boolean;
  due: string;
}

export default function TodoPage() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");
  const [due, setDue] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = localStorage.getItem("todos");
    if (saved) setTodos(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!task.trim()) return;
    setTodos([...todos, { text: task, done: false, due: due || "No due date" }]);
    setTask("");
    setDue("");
  };

  const removeTodo = (i: number) => setTodos(todos.filter((_, idx) => idx !== i));

  const toggleTodo = (i: number) => {
    const updated = [...todos];
    updated[i].done = !updated[i].done;
    setTodos(updated);
  };

  const filteredTodos = todos.filter((todo) =>
    filter === "done" ? todo.done : filter === "notdone" ? !todo.done : true
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-6">
      <div className="bg-white w-full max-w-lg shadow-2xl rounded-2xl p-8">

        <h1 className="text-3xl font-extrabold text-center text-indigo-600 mb-6">✅ Todo Tracker</h1>

        {/* Input Block */}
        <div className="bg-gray-50 p-4 rounded-xl shadow mb-5 flex flex-col gap-3">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="✍️ Task name..."
            className="border rounded-lg px-3 py-2 w-full focus:ring focus:ring-indigo-300"
          />
          <div className="flex items-center gap-2">
            <input
              type="date"
              value={due}
              onChange={(e) => setDue(e.target.value)}
              className="border rounded-lg px-3 py-2 w-full focus:ring focus:ring-indigo-300"
            />
            <button
              onClick={addTodo}
              className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Add
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-3 mb-6">
          {["all", "done", "notdone"].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1 rounded-full font-medium transition ${
                filter === f ? "bg-indigo-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              {f === "all" ? "All" : f === "done" ? "Done" : "Not Done"}
            </button>
          ))}
        </div>

        {/* List */}
        <ul className="space-y-3">
          {filteredTodos.map((todo, i) => (
            <li key={i} className="flex justify-between items-center bg-gray-50 border hover:bg-indigo-50 transition px-4 py-3 rounded-lg shadow-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(i)} />
                <span className={`${todo.done ? "line-through text-gray-500" : "font-medium"}`}>
                  {todo.text}
                </span>
              </label>
              <div className="text-right">
                <p className="text-xs text-gray-500">📅 {todo.due}</p>
                <button onClick={() => removeTodo(i)} className="text-red-500 hover:text-red-700 font-bold text-sm">
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
