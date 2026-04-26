import React, { useState } from "react";

function MoodTracker() {
  const [mood, setMood] = useState("Neutral");

  const moods = {
    Happy: { emoji: "😄", gradient: "linear-gradient(135deg, #f6d365, #fda085)" },
    Sad: { emoji: "😢", gradient: "linear-gradient(135deg, #74ebd5, #ACB6E5)" },
    Angry: { emoji: "😡", gradient: "linear-gradient(135deg, #ff758c, #ff7eb3)" },
    Neutral: { emoji: "😐", gradient: "linear-gradient(135deg, #d3cce3, #e9e4f0)" },
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: moods[mood].gradient,
        transition: "0.5s ease",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
          textAlign: "center",
          width: "320px",
        }}
      >
        <h1 style={{ marginBottom: "10px" }}>Mood Tracker</h1>

        <div style={{ fontSize: "60px", margin: "20px 0" }}>
          {moods[mood].emoji}
        </div>

        <h2 style={{ marginBottom: "20px", color: "#333" }}>
          Feeling {mood}
        </h2>

        <div>
          {Object.keys(moods).map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              style={{
                margin: "8px",
                padding: "10px 16px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
                background: mood === m ? "#333" : "#eee",
                color: mood === m ? "white" : "#333",
                transition: "0.3s",
              }}
              onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MoodTracker;