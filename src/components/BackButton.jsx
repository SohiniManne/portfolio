import { useNavigate } from "react-router-dom";

export default function BackButton({ label = "Back to Projects" }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/projects")}
      style={btn}
    >
      ← {label}
    </button>
  );
}

const btn = {
  marginBottom: "16px",
  background: "transparent",
  border: "1px solid #1f2937",
  color: "#9ca3af",
  padding: "6px 12px",
  borderRadius: "6px",
  cursor: "pointer",
  fontSize: "13px",
};
