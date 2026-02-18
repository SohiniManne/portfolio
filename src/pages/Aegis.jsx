import DiagramCanvas from "../components/DiagramCanvas";
import BackButton from "../components/BackButton";
import ProjectDetails from "../components/ProjectDetails";
import GithubButton from "../components/GithubButton";


const nodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Model Predictions" } },
  { id: "2", position: { x: 300, y: 0 }, data: { label: "Monitoring Service" } },
  { id: "3", position: { x: 600, y: 0 }, data: { label: "Drift Detection" } },
  { id: "4", position: { x: 900, y: 0 }, data: { label: "Alert System" } },
];

const edges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3" },
  { id: "e3", source: "3", target: "4" },
];

export default function Aegis() {
  return (
    <div style={{ padding: "40px" }}>

      <BackButton />

      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
        Aegis-ML
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        ML monitoring framework for drift detection and production health tracking.
      </p>

      <GithubButton url="https://github.com/SohiniManne/Aegis-ML" />


      <DiagramCanvas nodes={nodes} edges={edges} />

      <ProjectDetails
        problem="ML models degrade silently in production without monitoring."

        approach="Designed a monitoring system tracking metrics, drift signals, and prediction behavior."

        tech={[
          "FastAPI",
          "Python",
          "Monitoring logic"
        ]}

        result="Created a production-aware ML observability system demonstrating deployment maturity."
      />

    </div>
  );
}
