import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import CompletedPage from "./pages/CompletedPage";

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", priority: "medium", completed: false },
    { id: 2, title: "Complete React assignment", priority: "high", completed: false },
    { id: 3, title: "Go for a walk", priority: "low", completed: true },
  ]);

  const addTask = (title, priority) => {
    setTasks([{ id: Date.now(), title, priority, completed: false }, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map((t) => t.id === id ? { ...t, title: newTitle } : t));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={
          <Home
            tasks={tasks}
            onAdd={addTask}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
            onClearCompleted={clearCompleted}
          />
        } />
        <Route path="/about" element={<About />} />
        <Route path="/completed" element={
          <CompletedPage
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
            onEdit={editTask}
          />
        } />
      </Routes>
    </div>
  );
};

export default App;