export default function GithubButton({ url }) {
  return (
    <a href={url} target="_blank" rel="noreferrer" style={btn}>
      View on GitHub
    </a>
  );
}

const btn = {
  display: "inline-block",
  marginBottom: "24px",
  padding: "8px 14px",
  borderRadius: "6px",
  background: "#4f46e5",
  color: "white",
  textDecoration: "none",
  fontSize: "14px",
};
