import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  const linkStyle = ({ isActive }) => ({
    textDecoration: "none",
    color: isActive ? "#ffffff" : "#9ca3af",
    fontWeight: isActive ? 600 : 400,
    fontSize: "14px",
  });

  return (
    <nav style={nav}>
      <div style={inner}>

        {/* LEFT NAME */}
        <Link to="/" style={logo}>
          Sohini Manne
        </Link>

        {/* RIGHT LINKS */}
        <div style={right}>

          <NavLink to="/skills" end style={linkStyle}>
            Skills
          </NavLink>

          <NavLink to="/projects" end style={linkStyle}>
            Projects
          </NavLink>

          <NavLink to="/resume" end style={linkStyle}>
            Resume
          </NavLink>

          <NavLink to="/education" end style={linkStyle}>
            Education & Experience
          </NavLink>

          <NavLink to="/contact" end style={linkStyle}>
            Contact
          </NavLink>

          {/* SOCIAL LINKS */}
          <a
            href="https://github.com/SohiniManne"
            target="_blank"
            rel="noreferrer"
            style={icon}
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/sohinimanne"
            target="_blank"
            rel="noreferrer"
            style={icon}
          >
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

const icon = {
  textDecoration: "none",
  color: "#93c5fd",
  fontSize: "14px",
};
