export default function Contact() {
  return (
    <div style={wrapper}>

      <h1 style={title}>Contact</h1>

      <p style={subtitle}>
        I’m always open to discussing opportunities, collaborations,
        or interesting technical problems. Feel free to reach out.
      </p>

      <div style={card}>

        <ContactItem
          label="Email"
          value="sohinimanne@gmail.com"
          link="mailto:your-email@gmail.com"
        />

        <ContactItem
          label="GitHub"
          value="github.com/SohiniManne"
          link="https://github.com/SohiniManne"
        />

        <ContactItem
          label="LinkedIn"
          value="www.linkedin.com/in/sohinimanne"
          link="https://www.linkedin.com/in/sohinimanne"
        />

      </div>

    </div>
  );
}

function ContactItem({ label, value, link }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" style={item}>
      <div>
        <strong>{label}</strong>
        <p style={valueStyle}>{value}</p>
      </div>
      <span style={arrow}>→</span>
    </a>
  );
}

/* ---------- STYLES ---------- */

const wrapper = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "70px 40px",
};

const title = {
  fontSize: "40px",
  marginBottom: "10px",
};

const subtitle = {
  opacity: 0.85,
  marginBottom: "30px",
  maxWidth: "500px",
};

const card = {
  border: "1px solid #1f2937",
  borderRadius: "14px",
  overflow: "hidden",
};

const item = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "18px 20px",
  textDecoration: "none",
  color: "white",
  borderBottom: "1px solid #1f2937",
};

const valueStyle = {
  opacity: 0.8,
  marginTop: "4px",
};

const arrow = {
  opacity: 0.5,
};
