import { useEffect, useState } from "react";

export default function Home() {

  /* ===== ROLE TYPING EFFECT ===== */
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const roles = [
  "Machine Learning & Backend Engineer",
  "ML Systems Developer",
  "Building Production ML Systems",
   ];

    const typingSpeed = 60;
    const pauseTime = 1500;

    const timeout = setTimeout(() => {
      if (charIndex < roles[roleIndex].length) {
        setText(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(prev => prev + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setRoleIndex(prev => (prev + 1) % roles.length);
        }, pauseTime);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  /* ===== PAGE ===== */
  return (
    <section style={heroWrap}>
      <div style={heroInner}>

        {/* PHOTO */}
        <div style={photoWrap}>
          <img
            src="/profile.jpg"
            alt="Sohini"
            style={photo}
          />
        </div>

        {/* TEXT SIDE */}
        <div style={textWrap}>

          <h1 style={name}>
            Manne Sohini <br />
            Amrutha Varshini
          </h1>

          <h2 style={role}>
            {text}
            <span style={cursor}>|</span>
          </h2>

          <p style={summary}>
            I build production-ready machine learning systems and scalable
            software applications, focusing on real-world deployment,
            streaming pipelines, and backend architecture rather than just
            experimentation.
          </p>

          <div style={divider}></div>

          <div style={pillWrap}>
            <span style={pill}>B.Tech CSE — SRMIST</span>
            <span style={pill}>CGPA 9+</span>
            <span style={pill}>ML + SWE Systems</span>
            <span style={pill}>Hackathon Top-25</span>
          </div>

          <div style={ctaWrap}>
            <a href="/projects" style={ctaBtn}>
            View My Work 
            </a>
          </div>


        </div>

      </div>
    </section>
  );
}

/* ================= HERO STYLES ================= */

const heroWrap = {
  padding: "90px 24px",
};

const heroInner = {
  maxWidth: "1100px",
  margin: "0 auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
  flexWrap: "wrap",
};

const photoWrap = {
  flexShrink: 0,
};

const photo = {
  width: "240px",
  height: "240px",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "center 18%",
  border: "3px solid rgba(255,255,255,0.06)",
  background: "#020617",
  boxShadow: `
    0 0 0 6px #020617,
    0 0 40px rgba(96,165,250,0.18),
    inset 0 0 30px rgba(2,6,23,0.6)
  `,
};

const textWrap = {
  maxWidth: "560px",
};

const name = {
  fontSize: "46px",
  fontWeight: 700,
  lineHeight: 1.15,
  background: "linear-gradient(to right,#60a5fa,#a78bfa)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const role = {
  marginTop: "12px",
  fontSize: "20px",
  color: "#d1d5db",
  minHeight: "26px",
};

const cursor = {
  opacity: 0.7,
  marginLeft: "4px",
};

const summary = {
  marginTop: "16px",
  color: "#9ca3af",
  lineHeight: "1.7",
};

const divider = {
  width: "120px",
  height: "2px",
  background: "rgba(255,255,255,0.2)",
  marginTop: "22px",
};

const pillWrap = {
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
  marginTop: "22px",
};

const pill = {
  padding: "6px 14px",
  background: "rgba(255,255,255,0.06)",
  borderRadius: "999px",
  fontSize: "13px",
};

const ctaWrap = {
  marginTop: "36px",
};

const ctaBtn = {
  display: "inline-block",
  padding: "12px 22px",
  borderRadius: "10px",
  background: "linear-gradient(90deg,#7dd3fc,#a78bfa)",
  color: "#020617",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "14px",
};
