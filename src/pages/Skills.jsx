import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div style={wrap}>

      {/* ===== HEADER ===== */}
      <h1 style={title}>Skills & Technical Focus</h1>

      <p style={intro}>
        My work focuses on building production-ready machine learning systems
        and scalable backend applications. Below are the technologies I actively
        use, grouped by how they contribute to real systems rather than as a
        flat list of tools.
      </p>

      {/* ===== CORE SKILLS ===== */}
      <Section
        heading="Core Engineering Skills"
        items={[
          {
            title: "Machine Learning Systems",
            desc: "Model development, NLP pipelines, graph learning, forecasting, and deployment workflows.",
            stack: ["PyTorch","TensorFlow","NLP","Graph Learning","Feature Engineering","Model Deployment"],
            projects: ["NeuroGraph","FactLens","AnomalyGuard"]
          },
          {
            title: "Backend & Infrastructure",
            desc: "Designing scalable APIs, streaming data systems, and real-time services.",
            stack: ["Python","FastAPI","REST APIs","WebSockets","Streaming Pipelines","System Design"],
            projects: ["Nivio","Aegis-ML"]
          }
        ]}
      />

      {/* ===== APPLIED STACK ===== */}
      <Section
        heading="Applied Development Stack"
        items={[
          {
            title: "Full-Stack & Data",
            desc: "Tools used to build dashboards, integrations, and complete applications.",
            stack: ["React","JavaScript","Node.js","SQL","Streamlit","Data Processing"]
          },
        ]}
      />

      {/* ===== ENVIRONMENT ===== */}
      <Section
        heading="Environment & Workflow"
        items={[
          {
            title: "Tooling & Systems",
            desc: "Supporting technologies used in daily development and deployment workflows.",
            stack: ["Docker","Git","Linux","Debugging","Experiment Tracking","Cloud Basics"]
          }
        ]}
      />

      {/* ===== CTA ===== */}
      <div style={cta}>
        <p style={{color:"#9ca3af"}}>
          See how these skills come together in real projects.
        </p>

        <Link to="/projects" style={btn}>
          View Projects →
        </Link>
      </div>

    </div>
  );
}

/* ===== SECTION COMPONENT ===== */

function Section({ heading, items }) {
  return (
    <div style={{marginTop:"55px"}}>
      <h2 style={sectionTitle}>{heading}</h2>

      <div style={grid}>
        {items.map((it,i)=>(
          <div key={i} style={card}>
            <h3 style={cardTitle}>{it.title}</h3>
            <p style={desc}>{it.desc}</p>

            <div style={chips}>
              {it.stack.map((s,j)=>(
                <span key={j} style={chip}>{s}</span>
              ))}
            </div>

            {it.projects && (
              <p style={projLine}>
                Used in: {it.projects.join(", ")}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const wrap = {
  maxWidth:"1100px",
  margin:"0 auto",
  padding:"80px 24px",
};

const title = {
  fontSize:"38px",
  fontWeight:700,
};

const intro = {
  marginTop:"12px",
  color:"#9ca3af",
  maxWidth:"650px",
  lineHeight:1.6,
};

const sectionTitle = {
  fontSize:"24px",
  marginBottom:"18px",
};

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
  gap:"26px",
};

const card = {
  background:"rgba(255,255,255,0.04)",
  border:"1px solid rgba(255,255,255,0.08)",
  padding:"26px",
  borderRadius:"14px",
};

const cardTitle = {
  fontSize:"18px",
  marginBottom:"6px",
};

const desc = {
  color:"#9ca3af",
  fontSize:"14px",
  lineHeight:1.5,
  marginBottom:"14px",
};

const chips = {
  display:"flex",
  flexWrap:"wrap",
  gap:"8px",
};

const chip = {
  padding:"6px 12px",
  borderRadius:"999px",
  background:"rgba(255,255,255,0.06)",
  border:"1px solid rgba(255,255,255,0.12)",
  fontSize:"12px",
};

const projLine = {
  marginTop:"12px",
  fontSize:"13px",
  color:"#93c5fd",
};

const cta = {
  marginTop:"70px",
  textAlign:"center",
};

const btn = {
  display:"inline-block",
  marginTop:"10px",
  padding:"12px 22px",
  borderRadius:"10px",
  background:"linear-gradient(90deg,#7dd3fc,#a78bfa)",
  color:"#020617",
  textDecoration:"none",
  fontWeight:600,
};
