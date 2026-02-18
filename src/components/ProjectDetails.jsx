export default function ProjectDetails({
  problem,
  approach,
  tech = [],
  result
}) {
  return (
    <div style={wrapper}>

      <Section title="Problem" text={problem} />
      <Section title="Approach" text={approach} />

      <div style={section}>
        <h3 style={heading}>Tech Stack</h3>
        <div style={tags}>
          {tech.map((t, i) => (
            <span key={i} style={tag}>{t}</span>
          ))}
        </div>
      </div>

      <Section title="Result" text={result} />

    </div>
  );
}

function Section({ title, text }) {
  return (
    <div style={section}>
      <h3 style={heading}>{title}</h3>
      <p style={textStyle}>{text}</p>
    </div>
  );
}

/* ---------- STYLES ---------- */

const wrapper = {
  marginTop: "40px",
  maxWidth: "900px",
};

const section = {
  marginBottom: "28px",
};

const heading = {
  fontSize: "20px",
  marginBottom: "8px",
};

const textStyle = {
  opacity: 0.85,
  lineHeight: "1.7",
};

const tags = {
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
  marginTop: "8px",
};

const tag = {
  fontSize: "12px",
  padding: "5px 10px",
  borderRadius: "999px",
  background: "#111827",
  border: "1px solid #1f2937",
};
