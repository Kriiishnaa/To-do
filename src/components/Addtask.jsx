import { useState } from "react";

const PRIORITIES = [
  { value: "high", label: "High", color: "#ef4444", bg: "#fee2e2" },
  { value: "medium", label: "Medium", color: "#d97706", bg: "#fef3c7" },
  { value: "low", label: "Low", color: "#10b981", bg: "#d1fae5" },
];

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleAdd = () => {
    const trimmed = title.trim();
    if (!trimmed) return;
    onAdd(trimmed, priority);
    setTitle("");
    setPriority("medium");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="add-task">
      <h2>Add New Task</h2>

      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          width: "100%",
          padding: "10px 14px",
          border: "2px solid #e2e8f0",
          borderRadius: "8px",
          fontSize: "0.95rem",
          outline: "none",
          marginBottom: "14px",
          background: "#f0f4f8",
          color: "#1e293b",
        }}
      />

      {/* Priority Toggle Buttons */}
      <div style={{ display: "flex", gap: "8px", marginBottom: "14px" }}>
        <span style={{ fontSize: "0.8rem", color: "#64748b", fontWeight: "600", alignSelf: "center", marginRight: "4px" }}>
          PRIORITY:
        </span>
        {PRIORITIES.map((p) => (
          <button
            key={p.value}
            onClick={() => setPriority(p.value)}
            style={{
              padding: "6px 16px",
              borderRadius: "999px",
              border: `2px solid ${priority === p.value ? p.color : "#e2e8f0"}`,
              background: priority === p.value ? p.bg : "white",
              color: priority === p.value ? p.color : "#94a3b8",
              fontWeight: "600",
              fontSize: "0.85rem",
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {p.label}
          </button>
        ))}
      </div>

      <button className="btn-add" onClick={handleAdd} style={{ width: "100%" }}>
        + Add Task
      </button>
    </div>
  );
};

export default AddTask;