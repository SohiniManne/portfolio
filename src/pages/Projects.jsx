import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div style={wrapper}>
      <h1 style={title}>Projects</h1>
      <p style={subtitle}>
        A selection of systems I built across machine learning, backend engineering,
        and full-stack applications.
      </p>

      <div style={grid}>

        <ProjectCard
          name="AnomalyGuard"
          desc="Event-driven ML pipeline with Kafka streaming, feature store consistency, and low-latency inference."
          tech={["Kafka", "FastAPI", "Feast", "BentoML"]}
          route="/anomaly"
          github="https://github.com/SohiniManne/AnomalyGuard"
        />

        <ProjectCard
          name="FactLens"
          desc="Financial misinformation detection system combining NLP embeddings with ML classification."
          tech={["FinBERT", "spaCy", "XGBoost", "Streamlit"]}
          route="/factlens"
          github="https://github.com/SohiniManne/FactLens"
        />

        <ProjectCard
          name="NeuroGraph"
          desc="Graph neural network system for recommendations using relational user data."
          tech={["GraphSAGE", "PyTorch", "NetworkX"]}
          route="/neurograph"
          github="https://github.com/SohiniManne/NeuroGraph"
        />

        <ProjectCard
          name="DeepHierarch"
          desc="Hierarchical forecasting pipeline with global deep learning models and reconciliation."
          tech={["N-HiTS", "Darts", "Time Series"]}
          route="/deephierarch"
          github="https://github.com/SohiniManne/DeepHierarch"
        />

        <ProjectCard
          name="Aegis-ML"
          desc="ML monitoring framework tracking drift, inference logs, and production health."
          tech={["Monitoring", "FastAPI", "Drift Detection"]}
          route="/aegis"
          github="https://github.com/SohiniManne/Aegis-ML"
        />

        <ProjectCard
          name="Nivio"
          desc="Real-time chat platform with authentication, WebSockets, and media messaging."
          tech={["React", "Node.js", "Socket.io", "MongoDB"]}
          route="/nivio"
          github="https://github.com/SohiniManne/Nivio"
        />

      </div>
    </div>
  );
}

function ProjectCard({ name, desc, tech, route, github }) {
  return (
    <div style={card}>
      <h3>{name}</h3>
      <p style={{ opacity: 0.8 }}>{desc}</p>

      {/* TECH TAGS */}
      <div style={tags}>
        {tech.map((t, i) => (
          <span key={i} style={tag}>{t}</span>
        ))}
      </div>

      {/* BUTTONS */}
      <div style={btnRow}>
        <Link to={route} style={btnPrimary}>
          View Architecture
        </Link>
        <a href={github} target="_blank" rel="noreferrer" style={btnOutline}>
          GitHub
        </a>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const wrapper = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "70px 40px",
};

const title = {
  fontSize: "40px",
  marginBottom: "10px",
};

const subtitle = {
  opacity: 0.85,
  marginBottom: "35px",
  maxWidth: "600px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
  gap: "24px",
};

const card = {
  padding: "22px",
  borderRadius: "14px",
  background: "#0f172a",
  border: "1px solid #1f2937",
};

const tags = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "14px",
};

const tag = {
  fontSize: "12px",
  padding: "4px 10px",
  borderRadius: "999px",
  background: "#111827",
  border: "1px solid #1f2937",
};

const btnRow = {
  marginTop: "18px",
  display: "flex",
  gap: "10px",
};

const btnPrimary = {
  padding: "8px 14px",
  borderRadius: "6px",
  background: "#4f46e5",
  color: "white",
  textDecoration: "none",
  fontSize: "13px",
};

const btnOutline = {
  padding: "8px 14px",
  borderRadius: "6px",
  border: "1px solid #374151",
  color: "white",
  textDecoration: "none",
  fontSize: "13px",
};
