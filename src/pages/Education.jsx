export default function Education() {
  return (
    <div style={wrapper}>

      <h1 style={title}>Education & Experience</h1>

      {/* EDUCATION */}
      <section style={section}>
        <h2 style={sectionTitle}>Education</h2>

        <div style={card}>
          <strong>B.Tech Computer Science</strong>
          <p style={muted}>SRM Institute of Science & Technology</p>
          <p style={muted}>CGPA: 9.07 | Expected Graduation: 2027</p>
        </div>
      </section>

      {/* CORE EXPERIENCE */}
      <section style={section}>
        <h2 style={sectionTitle}>Experience</h2>

        <div style={card}>
          <strong>Robotics & AI Intern — Innova8s</strong>
          <p style={muted}>
            Worked on an edge AI vision system for poultry health monitoring
            using TensorFlow Lite, OpenCV, and embedded sensors.
          </p>
        </div>
      </section>

      {/* OTHER EXPERIENCE */}
      <section style={section}>
        <h2 style={sectionTitle}>Other Experience</h2>

        <div style={card}>
          <strong>Technical Member — ACM Student Chapter, SRMIST Chennai</strong>
          <p style={muted}>Feb 2024 – Present</p>
        </div>

        <div style={card}>
          <strong>Public Relations — Directorate of Student Affairs, SRMIST Chennai</strong>
          <p style={muted}>Jan 2024 – March 2025</p>
        </div>

        <div style={card}>
          <strong>Challenges & Hackathons — AARUUSH, SRMIST Chennai</strong>
          <p style={muted}>Aug 2023 – Sep 2024</p>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={section}>
        <h2 style={sectionTitle}>Certifications</h2>

        <div style={grid}>

          <div style={card}>
            <strong>TCS iON + IIT KGP</strong>
            <p style={muted}>AI for Real-World Applications</p>
          </div>

          <div style={card}>
            <strong>CISCO</strong>
            <p style={muted}>Python, Intro to Cyber Security</p>
          </div>

          <div style={card}>
            <strong>MATLAB</strong>
            <p style={muted}>Machine Learning & Deep Learning</p>
          </div>

          <div style={card}>
            <strong>NPTEL</strong>
            <p style={muted}>Introduction to Machine Learning</p>
          </div>

          <div style={card}>
            <strong>Google (AICTE)</strong>
            <p style={muted}>AI-ML Certification</p>
          </div>

          <div style={card}>
            <strong>AWS (AICTE)</strong>
            <p style={muted}>AI-ML Certification</p>
          </div>

          <div style={card}>
            <strong>Google (AICTE)</strong>
            <p style={muted}>Android Developer Certification</p>
          </div>

        </div>
      </section>

      {/* PARTICIPATIONS */}
      <section style={section}>
        <h2 style={sectionTitle}>Achievements & Participations</h2>

        <div style={card}>
          <ul style={list}>
            <li>Secured Top-25 position in Hack Cosmos Hackathon conducted by CSI at SRM University.</li>
            <li>Participated in CreaTech 2024, national-level innovation contest organized by Larsen & Toubro.</li>
            <li>Participated in Flipkart Runway Season 5, career acceleration program for women in engineering.</li>
            <li>Participated in Idea Spark, organized by the Founders Club at SRM University.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}

/* ---------- STYLES ---------- */

const wrapper = {
  maxWidth: "950px",
  margin: "0 auto",
  padding: "70px 40px",
};

const title = {
  fontSize: "40px",
  marginBottom: "30px",
};

const section = {
  marginBottom: "42px",
};

const sectionTitle = {
  fontSize: "24px",
  marginBottom: "16px",
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
  gap: "14px",
};

const card = {
  background: "#0f172a",
  border: "1px solid #1f2937",
  borderRadius: "12px",
  padding: "18px",
  marginBottom: "12px",
};

const muted = {
  opacity: 0.8,
  marginTop: "6px",
};

const list = {
  paddingLeft: "18px",
  lineHeight: "1.7",
  opacity: 0.85,
};
