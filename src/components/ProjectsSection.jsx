import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";


export default function ProjectsSection() {
  return (
    <section style={{ marginTop: "60px" }}>
      <h2 style={{ marginBottom: "24px" }}>Featured Projects</h2>

      <div style={grid}>
        {projects.map((p, i) => (
          <Motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            style={card}
          >
            <h3 style={{ marginBottom: "10px" }}>{p.title}</h3>

            <p style={{ opacity: 0.8, marginBottom: "14px", lineHeight: "1.5" }}>
              {p.desc}
            </p>

            {/* TECH TAGS */}
            <div style={tags}>
              {p.tech.map((t, idx) => (
                <span key={idx} style={tag}>{t}</span>
              ))}
            </div>

            {/* BUTTON */}
            <Link to={p.route} style={button}>
              View Architecture →
            </Link>
          </Motion.div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    title: "AnomalyGuard",
    desc: "Streaming anomaly detection system with Kafka ingestion, feature store consistency, and real-time inference.",
    route: "/anomaly",
    tech: ["Kafka", "Feast", "BentoML", "Isolation Forest"],
  },
  {
    title: "FactLens",
    desc: "Financial misinformation detection pipeline combining NLP models, API verification, and explainable AI.",
    route: "/factlens",
    tech: ["FinBERT", "XGBoost", "SHAP", "Docker"],
  },
  {
    title: "NeuroGraph",
    desc: "Graph Neural Network system solving cold-start recommendations with real-time inference dashboard.",
    route: "/neurograph",
    tech: ["GraphSAGE", "PyTorch Geometric", "NetworkX"],
  },
  {
    title: "DeepHierarch",
    desc: "Hierarchical time-series forecasting system with reconciliation and large-scale global modeling.",
    route: "/deephierarch",
    tech: ["N-HiTS", "NeuralForecast", "Plotly"],
  },
  {
    title: "Aegis-ML",
    desc: "ML monitoring pipeline with drift detection, inference logging, and real-time alerts.",
    route: "/aegis",
    tech: ["Drift Detection", "Streamlit", "SQLite"],
  },
  {
    title: "Nivio",
    desc: "Real-time full-stack chat system with WebSockets, authentication, and media integrations.",
    route: "/nivio",
    tech: ["React", "Node.js", "Socket.io", "JWT"],
  },
];

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "20px",
};

const card = {
  background: "#0f172a",
  border: "1px solid #1f2937",
  borderRadius: "14px",
  padding: "22px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
};

const tags = {
  display: "flex",
  flexWrap: "wrap",
  gap: "6px",
  marginBottom: "16px",
};

const tag = {
  padding: "4px 10px",
  fontSize: "12px",
  borderRadius: "999px",
  background: "#111827",
  border: "1px solid #1f2937",
  opacity: 0.85,
};

const button = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "8px",
  background: "#1f2937",
  border: "1px solid #374151",
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};
