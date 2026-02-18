import DiagramCanvas from "../components/DiagramCanvas";
import BackButton from "../components/BackButton";
import ProjectDetails from "../components/ProjectDetails";
import GithubButton from "../components/GithubButton";

const nodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Client App" } },
  { id: "2", position: { x: 300, y: 0 }, data: { label: "Node.js Backend" } },
  { id: "3", position: { x: 600, y: 0 }, data: { label: "WebSocket Layer" } },
  { id: "4", position: { x: 900, y: 0 }, data: { label: "MongoDB Storage" } },
];

const edges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3" },
  { id: "e3", source: "3", target: "4" },
];

export default function Nivio() {
  return (
    <div style={{ padding: "40px" }}>

      <BackButton />

      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
        Nivio
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Real-time chat platform with WebSockets and persistent messaging.
      </p>
      <GithubButton url="https://github.com/SohiniManne/Nivio" />


      <DiagramCanvas nodes={nodes} edges={edges} />

      <ProjectDetails
        problem="Real-time communication systems require low latency, persistence, and authentication."

        approach="Built a WebSocket-based backend with authentication and message storage."

        tech={[
          "React",
          "Node.js",
          "Socket.io",
          "MongoDB"
        ]}

        result="Developed a scalable full-stack chat system demonstrating backend engineering capability."
      />

    </div>
  );
}
