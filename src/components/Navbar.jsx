import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={nav}>
      <div style={inner}>

        {/* LEFT LOGO / NAME */}
        <Link to="/" style={logo}>
          Sohini Manne
        </Link>

        {/* RIGHT LINKS */}
        <div style={right}>

          <Link to="/" style={link}>Home</Link>
          <Link to="/projects" style={link}>Projects</Link>
          <Link to="/resume" style={link}>Resume</Link>
          <Link to="/education" style={link}>Education & Experience</Link>
          <Link to="/contact" style={link}>Contact</Link>

          {/* SOCIAL ICONS */}
          <a href="https://github.com/SohiniManne" target="_blank" rel="noreferrer" style={icon}>
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/sohinimanne" target="_blank" rel="noreferrer" style={icon}>
            LinkedIn
          </a>

        </div>

      </div>
    </nav>
  );
}

/* ---------- STYLES ---------- */

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  backdropFilter: "blur(8px)",
  background: "rgba(2,6,23,0.7)",
  borderBottom: "1px solid #1f2937",
};

const inner = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "16px 24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
};

const logo = {
  fontWeight: "600",
  fontSize: "18px",
  textDecoration: "none",
  color: "white",
};

const right = {
  display: "flex",
  gap: "22px",
  alignItems: "center",
};

const link = {
  textDecoration: "none",
  color: "#cbd5f5",
  fontSize: "14px",
};

const icon = {
  textDecoration: "none",
  color: "#93c5fd",
  fontSize: "14px",
};
