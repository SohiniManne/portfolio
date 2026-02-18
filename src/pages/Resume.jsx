export default function Resume() {
  return (
    <div style={{ padding: "60px 40px", maxWidth: "900px", margin: "0 auto" }}>
      
      <h1 style={{ marginBottom: "12px" }}>Resume</h1>

      <p style={{ opacity: 0.85, marginBottom: "30px", lineHeight: "1.6" }}>
        I focus on building production-ready software and machine learning systems.  
        I maintain tailored resume versions depending on the role —  
        Software Engineering for general engineering roles, Machine Learning for AI-focused work,  
        and Data Science for analytics-driven positions.
      </p>

      <div style={grid}>

        {/* SWE */}
        <ResumeCard
          title="Software Engineering Resume"
          desc="Focused on backend systems, full-stack applications, APIs, and production ML pipelines."
          file="/resumes/SWE.pdf"
          
        />

        {/* ML */}
        <ResumeCard
          title="Machine Learning Resume"
          desc="Focused on ML systems, NLP, forecasting, and deployment pipelines."
          file="/resumes/ML.pdf"
            primary
        />

        {/* DS */}
        <ResumeCard
          title="Data Science Resume"
          desc="Focused on modeling, analytics, and data-driven experimentation."
          file="/resumes/DS.pdf"
        />

      </div>
    </div>
  );
}

function ResumeCard({ title, desc, file, primary }) {
  return (
    <div style={{ ...card, border: primary ? "1px solid #4f46e5" : card.border }}>
      
      {primary && (
        <div style={badge}>Primary</div>
      )}

      <h3 style={{ marginTop: primary ? "10px" : 0 }}>{title}</h3>
      <p style={{ opacity: 0.8 }}>{desc}</p>

      <div style={{ marginTop: "15px", display: "flex", gap: "10px" }}>
        <a href={file} target="_blank" rel="noreferrer" style={btn}>
          View
        </a>
        <a href={file} download style={btnOutline}>
          Download
        </a>
      </div>
    </div>
  );
}

/* styles */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
};

const card = {
  padding: "20px",
  borderRadius: "12px",
  border: "1px solid #1f2937",
  background: "#0f172a",
  position: "relative",
};

const badge = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "#4f46e5",
  padding: "4px 10px",
  borderRadius: "999px",
  fontSize: "12px",
};

const btn = {
  padding: "8px 14px",
  borderRadius: "6px",
  background: "#4f46e5",
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};

const btnOutline = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "1px solid #374151",
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};
