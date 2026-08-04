import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState("");

  function taskValue(e) {
    setTask(e.target.value);
  }

  function addTask() {
    if (task.trim() === "") {
      alert("Pls set a task");
      return;
    }
    setTasks((t) => [...t, task]);
    setTask(""); // Resets input field after adding
  }

  function removeTask(index) {
    setTasks((t) => t.filter((c, i) => index !== i));
  }

  function editTask(index) {
    setEdit(index);
    setEditText(tasks[index]);
  }

  function setNewEdit(index) {
    setTasks((t) => t.map((item, i) => (i === index ? editText : item)));
    setEdit(null);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-slate-800 border border-slate-700 rounded-2xl shadow-xl p-6">
        <h1 className="text-2xl font-bold tracking-wide text-center text-slate-200 mb-6">
          TO DO LIST
        </h1>

        {/* Add Task Input Group */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={task}
            onChange={taskValue}
            placeholder="Enter a new task..."
            className="flex-1 bg-slate-900 border border-slate-700 rounded-xl px-4 py-2 text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-500"
          />
          <button
            onClick={addTask}
            className="bg-blue-600 hover:bg-blue-500 active:scale-95 transition rounded-xl px-4 py-2 font-semibold text-white shadow"
          >
            Add Task
          </button>
        </div>
        <ul className="space-y-3">
          {tasks.map((c, i) => (
            <li
              key={i}
              className="bg-slate-900 border border-slate-700/60 rounded-xl p-3 flex items-center justify-between gap-2 shadow-sm"
            >
              {edit === i ? (
                <div className="flex items-center gap-2 w-full">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 bg-slate-800 border border-slate-600 rounded-lg px-3 py-1 text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    onClick={() => setNewEdit(i)}
                    className="bg-emerald-600 hover:bg-emerald-500 active:scale-95 transition rounded-lg px-3 py-1 text-xs font-semibold text-white"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEdit(null)}
                    className="bg-slate-700 hover:bg-slate-600 active:scale-95 transition rounded-lg px-3 py-1 text-xs font-semibold text-slate-300"
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <>
                  <span className="text-slate-200 break-all flex-1">{c}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => editTask(i)}
                      className="bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/30 active:scale-95 transition rounded-lg px-2.5 py-1 text-xs font-medium"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => removeTask(i)}
                      className="bg-rose-600/20 hover:bg-rose-600/40 text-rose-400 border border-rose-500/30 active:scale-95 transition rounded-lg px-2.5 py-1 text-xs font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Todo;