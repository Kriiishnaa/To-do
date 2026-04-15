# TaskFlow — To-Do List / Task Manager SPA

A Single Page Application built with **ReactJS + Vite** as part of a college assessment (TA-1 & TA-2).

---

## 🚀 Live Preview

Run locally at `http://localhost:5173`

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Header.jsx
│   ├── AddTask.jsx
│   ├── FilterBar.jsx
│   ├── TaskList.jsx
│   └── TaskItem.jsx
├── pages/
│   ├── Home.jsx
│   ├── CompletedPage.jsx
│   └── About.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## ✅ Features

- Add tasks with a title and priority level (High / Medium / Low)
- Mark tasks as complete by clicking the circle checkbox
- Double-click a task to edit it inline
- Delete individual tasks
- Filter tasks — All / Active / Completed
- Separate Completed Tasks page via React Router
- Live stats — Total, Done, Remaining
- Motivational quote appears when all tasks are completed
- Clear all completed tasks at once
- About page listing all concepts used

---

## 🧪 Concepts Used

### TA-1
| Concept | Where Used |
|---|---|
| JSX | All component files |
| Functional Components with Props | All 5 components |
| CSS Variables / Styling | App.css with :root variables |
| Conditional Rendering | Stats, empty state, done label, quote |
| List Rendering | TaskList, FilterBar |

### TA-2
| Concept | Where Used |
|---|---|
| React Router | Navbar, Routes, NavLink |
| onClick | Checkbox, delete, filter, priority buttons |
| onDoubleClick | Inline task editing |
| onChange | Live edit input update |
| onKeyDown | Enter to save, Escape to cancel |
| onMouseEnter/Leave | Hover effect on task cards |
| onBlur | Auto-save on click away |

---

## 🛠️ Tech Stack

- ReactJS
- Vite
- React Router DOM
- Plain CSS with CSS Variables

---

## ⚙️ How to Run

```bash
# Clone the repository
git clone https://github.com/Kriiishnaa/To-do.git

# Navigate into the project
cd To-do

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open `http://localhost:5173` in your browser.

---

## 📄 Pages

| Route | Page | Description |
|---|---|---|
| `/` | Home | Main task manager |
| `/completed` | Completed | Shows all completed tasks |
| `/about` | About | Lists all concepts used |

---

## 👨‍💻 Author

**Kriiishnaa**  
GitHub: [@Kriiishnaa](https://github.com/Kriiishnaa)
