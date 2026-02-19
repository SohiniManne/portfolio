export default function Education() {
  return (
    <div style={wrap}>

      <h1 style={title}>Education & Experience</h1>

      {/* ===== EDUCATION ===== */}
      <Section title="Education">
        <Item
          heading="B.Tech Computer Science — SRM Institute of Science & Technology"
          meta="2023 – 2027 • CGPA: 9.07"
        >
          Focused on machine learning systems, backend engineering, and
          building deployable software through academic and project work.
        </Item>
      </Section>

      {/* ===== EXPERIENCE ===== */}
      <Section title="Experience">
        <Item
          heading="Robotics & AI Intern — Innova8s Technologies"
          meta="Jan 2026 - Present"
        >
          <ul style={list}>
            <li>
              Developed computer vision pipeline using TensorFlow Lite
              and OpenCV for embedded deployment.
            </li>
            <li>
              Worked with real sensor data and optimized inference
              performance for hardware constraints.
            </li>
            <li>
              Contributed to model integration and testing workflows
              for robotics applications.
            </li>
          </ul>
        </Item>
      </Section>

      <Section title="Certifications">
  <div style={certGrid}>

    <CertCard
      title="Introduction to Machine Learning"
      provider="NPTEL"
      year="2025"
    />

    <CertCard
      title="Machine Learning"
      provider="Matlab"
      year="2025" 
    />

    <CertCard
      title="AI for real-world Applications"
      provider="TCSION in collaboration with IITKGP"
      year="2023"
    />

  </div>
</Section>


    </div>
  );
}

/* ===== COMPONENTS ===== */

function Section({ title, children }) {
  return (
    <div style={{marginTop:"55px"}}>
      <h2 style={sectionTitle}>{title}</h2>
      {children}
    </div>
  );
}

function Item({ heading, meta, children }) {
  return (
    <div style={card}>
      <h3 style={headingStyle}>{heading}</h3>
      <p style={metaStyle}>{meta}</p>
      <div style={{marginTop:"10px"}}>{children}</div>
    </div>
  );
}

/* ===== STYLES ===== */

const wrap = {
  maxWidth:"900px",
  margin:"0 auto",
  padding:"80px 24px",
};

const title = {
  fontSize:"36px",
  fontWeight:700,
};

const sectionTitle = {
  fontSize:"24px",
  marginBottom:"18px",
};

const card = {
  background:"rgba(255,255,255,0.04)",
  border:"1px solid rgba(255,255,255,0.08)",
  padding:"24px",
  borderRadius:"12px",
};

const headingStyle = {
  fontSize:"18px",
};

const metaStyle = {
  color:"#9ca3af",
  fontSize:"14px",
  marginTop:"4px",
};

const list = {
  marginTop:"10px",
  paddingLeft:"18px",
  color:"#9ca3af",
  lineHeight:1.6,
};

const certGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "20px",
};

function CertCard({ title, provider, year }) {
  return (
    <div style={card}>
      <h3 style={headingStyle}>{title}</h3>
      <p style={metaStyle}>{provider} • {year}</p>

      {/* optional small description placeholder */}
      {/* you can remove this block if not needed */}
      
    </div>
  );
}
