const Header = ({ completedCount, totalCount }) => {
  return (
    <div className="header">
      <h1>
        Task<span>Flow</span>
      </h1>
      <p>Stay organised, one task at a time.</p>

      {}
      {totalCount > 0 && (
        <div className="stats">
          <span className="stat-badge">
            Total: <strong>{totalCount}</strong>
          </span>
          <span className="stat-badge">
            Done: <strong>{completedCount}</strong>
          </span>
          <span className="stat-badge">
            Remaining: <strong>{totalCount - completedCount}</strong>
          </span>
        </div>
      )}
    </div>
  );
};

export default Header;