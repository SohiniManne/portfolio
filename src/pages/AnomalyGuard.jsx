import DiagramCanvas from "../components/DiagramCanvas";
import BackButton from "../components/BackButton";
import ProjectDetails from "../components/ProjectDetails";
import GithubButton from "../components/GithubButton";


const nodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "User Events / Logs" } },
  { id: "2", position: { x: 220, y: 0 }, data: { label: "Kafka Producers" } },
  { id: "3", position: { x: 440, y: 0 }, data: { label: "Kafka Topics" } },
  { id: "4", position: { x: 660, y: 0 }, data: { label: "Feature Service" } },
  { id: "5", position: { x: 880, y: 0 }, data: { label: "Feast Store" } },

  { id: "6", position: { x: 200, y: 180 }, data: { label: "Streamlit Dashboard" } },
  { id: "7", position: { x: 450, y: 180 }, data: { label: "Inference Engine" } },
  { id: "8", position: { x: 700, y: 180 }, data: { label: "BentoML API" } },
  { id: "9", position: { x: 950, y: 180 }, data: { label: "Training Pipeline" } },
  { id: "10", position: { x: 1150, y: 180 }, data: { label: "Isolation Forest Model" } },
];

const edges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3" },
  { id: "e3", source: "3", target: "4" },
  { id: "e4", source: "4", target: "5" },
  { id: "e5", source: "5", target: "7" },
  { id: "e6", source: "7", target: "8" },
  { id: "e7", source: "8", target: "6" },
  { id: "e8", source: "5", target: "9" },
  { id: "e9", source: "9", target: "10" },
];

export default function AnomalyGuard() {
  return (
    <div style={{ padding: "40px" }}>

      <BackButton />

      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
        AnomalyGuard
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Event-driven ML pipeline using Kafka streaming, Feast feature store,
        and BentoML for real-time anomaly detection.
      </p>

      <GithubButton url="https://github.com/SohiniManne/AnomalyGuard" />

      <DiagramCanvas nodes={nodes} edges={edges} />

      <ProjectDetails
        problem="Production ML systems often fail silently due to data drift and delayed monitoring."

        approach="Designed a streaming-first architecture where user events flow through Kafka, features are stored in Feast, and inference runs through BentoML with real-time observability."

        tech={[
          "Kafka",
          "FastAPI",
          "Feast",
          "BentoML",
          "Streamlit",
          "Python"
        ]}

        result="Built a production-style ML pipeline demonstrating real-time monitoring, feature consistency, and scalable inference."
      />

    </div>
  );
}
