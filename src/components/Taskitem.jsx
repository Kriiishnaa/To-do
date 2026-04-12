import { useState } from "react";

const TaskItem = ({ task, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);
  const [hovered, setHovered] = useState(false);

  const handleEditSave = () => {
    if (editValue.trim()) onEdit(task.id, editValue.trim());
    setIsEditing(false);
  };

  return (
    <div
      className={`task-item priority-${task.priority} ${task.completed ? "completed" : ""}`}
      onMouseEnter={() => setHovered(true)}   // Event Handling
      onMouseLeave={() => setHovered(false)}  // Event Handling
      style={{ opacity: hovered ? 1 : 0.92, transition: "all 0.2s" }}
    >
      <div
        className={`task-checkbox ${task.completed ? "checked" : ""}`}
        onClick={() => onToggle(task.id)}   // Event Handling: onClick
      >
        {task.completed && "✓"}
      </div>

      <div className="task-content">
        {isEditing ? (
          <input
            autoFocus
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}   // Event Handling: onChange
            onKeyDown={(e) => {                               // Event Handling: onKeyDown
              if (e.key === "Enter") handleEditSave();
              if (e.key === "Escape") setIsEditing(false);
            }}
            onBlur={handleEditSave}
            style={{
              width: "100%", padding: "4px 8px", borderRadius: "6px",
              border: "2px solid #10b981", fontSize: "0.95rem", outline: "none"
            }}
          />
        ) : (
          <div
            className="task-title"
            onDoubleClick={() => !task.completed && setIsEditing(true)}  // Event Handling: onDoubleClick
            title={!task.completed ? "Double-click to edit" : ""}
          >
            {task.title}
          </div>
        )}
        <div className="task-meta">
          <span className={`priority-tag ${task.priority}`}>{task.priority}</span>
          {task.completed && <span style={{ fontSize: "0.75rem", color: "#10b981" }}>✔ Done</span>}
          {!task.completed && !isEditing && (
            <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>double-click to edit</span>
          )}
        </div>
      </div>

      <button className="btn-delete" onClick={() => onDelete(task.id)}>✕</button>
    </div>
  );
};

export default TaskItem;