import { useState } from "react";
import AddTask from "../components/AddTask";
import FilterBar from "../components/FilterBar";
import TaskList from "../components/TaskList";

const Home = ({ tasks, onAdd, onToggle, onDelete, onEdit, onClearCompleted }) => {
  const [filter, setFilter] = useState("all");

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const completedCount = tasks.filter((t) => t.completed).length;
  const allCompleted = tasks.length > 0 && completedCount === tasks.length;

  return (
    <div>
      <div className="header">
        <p>Stay organised, one task at a time.</p>
        {tasks.length > 0 && (
          <div className="stats">
            <span className="stat-badge">Total: <strong>{tasks.length}</strong></span>
            <span className="stat-badge">Done: <strong>{completedCount}</strong></span>
            <span className="stat-badge">Remaining: <strong>{tasks.length - completedCount}</strong></span>
          </div>
        )}
      </div>
      <AddTask onAdd={onAdd} />
      <FilterBar currentFilter={filter} onFilterChange={setFilter} />
      <TaskList
        tasks={filteredTasks}
        onToggle={onToggle}
        onDelete={onDelete}
        onEdit={onEdit}
        allCompleted={allCompleted}
      />
      {completedCount > 0 && (
        <button className="clear-btn" onClick={onClearCompleted}>
          🗑 Clear {completedCount} completed task{completedCount > 1 ? "s" : ""}
        </button>
      )}
    </div>
  );
};

export default Home;