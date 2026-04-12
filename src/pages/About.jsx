const About = () => {
  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <div className="add-task">
        <h2>ABOUT TASKFLOW</h2>
        <p style={{ color: "#1e293b", fontSize: "1rem", lineHeight: "1.7", marginBottom: "16px" }}>
          <strong>TaskFlow</strong> is a Single Page Application built with React using Vite. It helps you manage daily tasks with priority levels and filters.
        </p>
        <p style={{ color: "#64748b", fontSize: "0.9rem", lineHeight: "1.7", marginBottom: "16px" }}>
          <strong>Concepts used:</strong>
        </p>
        {[
          "JSX — Basic Structure built with JSX",
          "Functional Components with Props",
          "CSS Modules / Styled with CSS Variables",
          "Conditional Rendering",
          "List Rendering with .map()",
          "Event Handling (click, dblclick, keydown, change, hover)",
          "React Router — Multi-page navigation",
        ].map((item, index) => (
          <div key={index} style={{
            padding: "10px 14px",
            background: "#f0f4f8",
            borderRadius: "8px",
            marginBottom: "8px",
            fontSize: "0.9rem",
            color: "#1e293b"
          }}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;