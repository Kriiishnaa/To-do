import TaskItem from "../components/TaskItem";

const CompletedPage = ({ tasks, onToggle, onDelete, onEdit }) => {
  const completedTasks = tasks.filter((t) => t.completed);

  return (
    <div>
      <div className="header">
        <p style={{ color: "#10b981", fontWeight: "600" }}>
          🎉 {completedTasks.length} task{completedTasks.length !== 1 ? "s" : ""} completed
        </p>
      </div>

      {completedTasks.length === 0 ? (
        <div className="empty-state">
          <p style={{ fontSize: "2rem" }}>😴</p>
          <p>No completed tasks yet. Go get things done!</p>
        </div>
      ) : (
        <div className="task-list">
          {completedTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CompletedPage;