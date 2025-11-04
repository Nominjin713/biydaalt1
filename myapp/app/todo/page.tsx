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
    const newTodo: Todo = { text: task, done: false, due: due || "No due date" };
    setTodos([...todos, newTodo]);
    setTask("");
    setDue("");
  };

  const removeTodo = (i: number) => setTodos(todos.filter((_, x) => x !== i));
  const toggleTodo = (i: number) => {
    const t = [...todos];
    t[i].done = !t[i].done;
    setTodos(t);
  };

  const filtered = todos.filter((t) =>
    filter === "done" ? t.done : filter === "notdone" ? !t.done : true
  );

  return (
    <div className="min-h-screen flex flex-col items-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">✅ Todo App</h1>

      <div className="bg-white p-6 rounded-2xl shadow-lg border w-full max-w-md">
        {/* Input Row */}
        <div className="flex gap-2 mb-4">
          <input
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Task..."
            className="border px-3 py-2 rounded-md w-full focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="date"
            value={due}
            onChange={(e) => setDue(e.target.value)}
            className="border px-3 py-2 rounded-md focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTodo}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
          >
            Add
          </button>
        </div>

        {/* Filters */}
        <div className="flex justify-center gap-2 mb-4">
          {[
            { key: "all", label: "All" },
            { key: "done", label: "Done" },
            { key: "notdone", label: "Not Done" },
          ].map((b) => (
            <button
              key={b.key}
              onClick={() => setFilter(b.key)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                filter === b.key
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-600 hover:bg-gray-300"
              }`}
            >
              {b.label}
            </button>
          ))}
        </div>

        {/* Todo List */}
        <ul className="space-y-2">
          {filtered.length === 0 && (
            <p className="text-gray-500 text-center py-4">No tasks ✨</p>
          )}

          {filtered.map((todo, i) => (
            <li
              key={i}
              className="flex justify-between items-center bg-gray-50 border p-3 rounded-lg hover:shadow transition"
            >
              <div>
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={todo.done}
                    onChange={() => toggleTodo(i)}
                  />
                  <span
                    className={`font-medium ${
                      todo.done ? "line-through text-gray-500" : "text-gray-800"
                    }`}
                  >
                    {todo.text}
                  </span>
                </label>
                <div className="text-xs text-gray-500 mt-1">
                  📅 {todo.due}
                </div>
              </div>

              <button
                onClick={() => removeTodo(i)}
                className="text-red-500 text-sm font-medium hover:underline"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
