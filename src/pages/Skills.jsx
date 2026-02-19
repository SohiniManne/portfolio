import { motion } from "framer-motion";
import { FaBrain, FaServer, FaTools } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div style={container}>

      {/* HEADER */}
      <motion.div
        initial={{opacity:0, y:20}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6}}
      >
        <h1 style={title}>Skills & Tech Stack</h1>
        <p style={subtitle}>
          Technologies I use to build production-ready ML systems,
          scalable backends, and full-stack applications.
        </p>
      </motion.div>

      {/* CARDS */}
      <div style={grid}>

        {/* ML */}
        <SkillCard
          icon={<FaBrain />}
          title="Machine Learning"
          skills={[
            "Python", "PyTorch","TensorFlow","NLP",
            "Graph Learning","Forecasting",
            "Feature Engineering","Deployment",
            "Experiment Tracking"
          ]}
        />

        {/* BACKEND */}
        <SkillCard
          icon={<FaServer />}
          title="Backend & Systems"
          skills={[
            "Python","C/C++", "Java",
            "FastAPI","REST APIs","Kafka",
            "Streaming Pipelines",
            "WebSockets","System Design"
          ]}
        />

        {/* TOOLS */}
        <SkillCard
          icon={<FaTools />}
          title="Full Stack & Tools"
          skills={[
            "React","JavaScript","SQL",
            "Node.js","Git","Streamlit",
            "AWS","Linux","Debugging"
          ]}
        />

      </div>

      {/* CTA */}
      <motion.div
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:0.6}}
        style={{textAlign:"center", marginTop:"60px"}}
      >
        <p style={{color:"#9ca3af", marginBottom:"16px"}}>
          See how I apply these skills in real projects.
        </p>

        <Link to="/projects" style={button}>
          View Projects →
        </Link>
      </motion.div>

    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <motion.div
      whileHover={{y:-4}}
      style={card}
    >
      <div style={iconStyle}>{icon}</div>
      <h3 style={cardTitle}>{title}</h3>

      <div style={chipWrap}>
        {skills.map((s,i)=>(
          <span key={i} style={chip}>{s}</span>
        ))}
      </div>
    </motion.div>
  );
}

/* ================= STYLES ================= */

const container = {
  maxWidth:"1100px",
  margin:"0 auto",
  padding:"80px 24px",
};

const title = {
  fontSize:"38px",
  fontWeight:700,
};

const subtitle = {
  marginTop:"12px",
  color:"#9ca3af",
  maxWidth:"600px",
};

const grid = {
  display:"grid",
  gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",
  gap:"28px",
  marginTop:"50px",
};

const card = {
  background:"rgba(255,255,255,0.03)",
  border:"1px solid rgba(255,255,255,0.08)",
  borderRadius:"14px",
  padding:"28px",
};

const iconStyle = {
  fontSize:"22px",
  color:"#7dd3fc",
  marginBottom:"14px",
};

const cardTitle = {
  fontSize:"18px",
  marginBottom:"12px",
};

const chipWrap = {
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

const button = {
  padding:"12px 22px",
  borderRadius:"10px",
  background:"linear-gradient(90deg,#7dd3fc,#a78bfa)",
  color:"#000",
  textDecoration:"none",
  fontWeight:600,
};
