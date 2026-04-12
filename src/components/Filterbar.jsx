// FilterBar.jsx — Tabs to filter tasks
// Uses: Functional Component with Props, List Rendering, Conditional Rendering (active class)

const FILTERS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
];

const FilterBar = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-bar">
      {/* List Rendering: map over filter options */}
      {FILTERS.map((f) => (
        <button
          key={f.value}
          className={`filter-btn ${currentFilter === f.value ? "active" : ""}`}
          onClick={() => onFilterChange(f.value)}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;