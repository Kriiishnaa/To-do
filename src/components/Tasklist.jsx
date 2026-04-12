import TaskItem from "./TaskItem";

const QUOTES = [
  "A day of consistency is a day closer to your goals.",
  "Don't hate yourself for the descision you made, when you didn't have the knowledge you have now.",
  "Do not accept a life that's opposite of your beliefs, it will only lead to your misery.",
  "Forgive yourself for not knowing earlier what only time could teach you.",
  "The greatest skill one can learn is to stay in a good mood when there isn't any reason for so.",
  "The only way to get out of a rut is to keep moving forward, even if it's just one small step at a time.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
];

const TaskList = ({ tasks, onToggle, onDelete, allCompleted }) => {
  const randomQuote = QUOTES[Math.floor(Math.random() * QUOTES.length)];

  if (allCompleted) {
    return (
      <div className="empty-state">
        <p style={{ fontSize: "2rem", marginBottom: "10px" }}>🎉</p>
        <p style={{ fontWeight: "600", color: "#10b981", fontSize: "1rem" }}>
          All tasks completed!
        </p>
        <p style={{ marginTop: "8px", fontStyle: "italic", color: "#64748b" }}>
          "{randomQuote}"
        </p>
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p style={{ fontSize: "2rem", marginBottom: "10px" }}>📋</p>
        <p>No tasks here! Add one above to get started.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;