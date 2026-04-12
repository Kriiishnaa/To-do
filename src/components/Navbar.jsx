import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <span className="nav-brand">Task<span style={{ color: "#10b981" }}>Flow</span></span>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Home
        </NavLink>
        <NavLink to="/completed" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          Completed
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;