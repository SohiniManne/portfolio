import DiagramCanvas from "../components/DiagramCanvas";
import BackButton from "../components/BackButton";
import ProjectDetails from "../components/ProjectDetails";
import GithubButton from "../components/GithubButton";


const nodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Time Series Data" } },
  { id: "2", position: { x: 300, y: 0 }, data: { label: "Hierarchy Builder" } },
  { id: "3", position: { x: 600, y: 0 }, data: { label: "Deep Forecast Model" } },
  { id: "4", position: { x: 900, y: 0 }, data: { label: "Reconciliation Layer" } },
  { id: "5", position: { x: 1150, y: 0 }, data: { label: "Forecast Output" } },
];

const edges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3" },
  { id: "e3", source: "3", target: "4" },
  { id: "e4", source: "4", target: "5" },
];

export default function DeepHierarch() {
  return (
    <div style={{ padding: "40px" }}>

      <BackButton />

      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
        DeepHierarch
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Hierarchical forecasting system using deep global models.
      </p>
      <GithubButton url="https://github.com/SohiniManne/DeepHierarch" />


      <DiagramCanvas nodes={nodes} edges={edges} />

      <ProjectDetails
        problem="Hierarchical forecasts often produce inconsistent predictions across levels."

        approach="Used deep global models with reconciliation layers to ensure coherent multi-level forecasts."

        tech={[
          "Darts",
          "N-HiTS",
          "Time Series",
          "Python"
        ]}

        result="Built a structured forecasting pipeline demonstrating applied deep learning for time-series systems."
      />

    </div>
  );
}
