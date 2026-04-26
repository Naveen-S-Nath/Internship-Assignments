import React, { useState } from "react";

function TaskApp() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea, #764ba2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "350px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Task Manager</h2>

        <div style={{ display: "flex", marginBottom: "15px" }}>
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />

          <button
            onClick={addTask}
            style={{
              marginLeft: "10px",
              padding: "10px",
              border: "none",
              borderRadius: "8px",
              background: "#667eea",
              color: "white",
              cursor: "pointer",
            }}
          >
            Add
          </button>
        </div>

        <ul style={{ listStyle: "none", padding: 0 }}>
          {tasks.map((t, index) => (
            <li
              key={index}
              style={{
                background: "#f1f3f5",
                marginBottom: "10px",
                padding: "10px",
                borderRadius: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {t}

              <button
                onClick={() => deleteTask(index)}
                style={{
                  background: "#ff6b6b",
                  border: "none",
                  color: "white",
                  padding: "5px 10px",
                  borderRadius: "6px",
                  cursor: "pointer",
                }}
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

export default TaskApp;