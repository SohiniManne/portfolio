import { useEffect, useState } from "react";

export default function Home() {
  const roles = [
    "Machine Learning Engineer",
    "Software Developer",
    "ML Systems Builder",
    "Backend & AI Engineer"
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let speed = deleting ? 40 : 70;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);

        if (charIndex === current.length) {
          setDeleting(true);
          speed = 1200; // pause before deleting
        }
      } else {
        setText(current.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);

        if (charIndex === 0) {
          setDeleting(false);
          setRoleIndex((i) => (i + 1) % roles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, deleting, roleIndex, roles]);

  return (
    <div style={wrapper}>
      <div style={hero}>

        {/* PHOTO */}
        <div style={imgWrap}>
          <img
            src="/photo.jpg"   // 👈 put your image in public folder and rename if needed
            alt="Sohini"
            style={img}
          />
        </div>

        {/* TEXT SIDE */}
        <div style={textWrap}>
          <h1 style={name}>
            Manne Sohini <br /> Amrutha Varshini
          </h1>

          {/* TYPING ROLE */}
          <h2 style={role}>
            {text}
            <span style={cursor}>|</span>
          </h2>

          <p style={intro}>
            I build production-ready software and machine learning systems,
            focusing on real-world deployment rather than just experiments.
            My work spans ML pipelines, backend services, and full-stack
            applications that solve practical problems.
          </p>

          <div style={divider}></div>

          <div style={snapshot}>
            <div style={chip}>B.Tech CSE — SRMIST</div>
            <div style={chip}>CGPA 9+</div>
            <div style={chip}>ML + SWE Systems</div>
            <div style={chip}>Real-time Pipelines</div>
            <div style={chip}>Hackathon Top-25</div>
          </div>


        </div>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

const wrapper = {
  minHeight: "calc(100vh - 70px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "40px",
};

const hero = {
  display: "flex",
  alignItems: "center",
  gap: "60px",
  maxWidth: "1100px",
  width: "100%",
};

const imgWrap = {
  flexShrink: 0,
};

const img = {
  width: "300px",
  height: "300px",
  borderRadius: "50%",
  objectFit: "cover",
  objectPosition: "center 5%",   // 👈 key change (move image DOWN so head shows)
  border: "4px solid #1f2937",
  boxShadow: "0 0 40px rgba(96,165,250,0.25)",
};


const textWrap = {
  maxWidth: "600px",
};

const name = {
  fontSize: "52px",
  lineHeight: "1.1",
  marginBottom: "16px",
  background: "linear-gradient(90deg,#60a5fa,#a78bfa,#67e8f9)",
  WebkitBackgroundClip: "text",
  color: "transparent",
};

const role = {
  fontSize: "24px",
  marginBottom: "18px",
  opacity: 0.9,
  minHeight: "32px",
};

const cursor = {
  marginLeft: "6px",
  animation: "blink 1s infinite",
};

const intro = {
  opacity: 0.85,
  lineHeight: "1.7",
};

const divider = {
  marginTop: "24px",
  width: "120px",
  height: "2px",
  background: "#374151",
};
const snapshot = {
  marginTop: "28px",
  display: "flex",
  flexWrap: "wrap",
  gap: "10px",
};

const chip = {
  padding: "8px 14px",
  borderRadius: "999px",
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.08)",
  fontSize: "13px",
  opacity: 0.9,
};


/* blinking cursor animation */
const style = document.createElement("style");
style.innerHTML = `
@keyframes blink {
  0%, 50%, 100% { opacity: 1 }
  25%, 75% { opacity: 0 }
}`;
document.head.appendChild(style);
