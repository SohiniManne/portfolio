import DiagramCanvas from "../components/DiagramCanvas";
import BackButton from "../components/BackButton";
import ProjectDetails from "../components/ProjectDetails";
import GithubButton from "../components/GithubButton";


const nodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "User Interaction Data" } },
  { id: "2", position: { x: 300, y: 0 }, data: { label: "Graph Construction" } },
  { id: "3", position: { x: 600, y: 0 }, data: { label: "Graph Neural Network" } },
  { id: "4", position: { x: 900, y: 0 }, data: { label: "Recommendations" } },
];

const edges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3" },
  { id: "e3", source: "3", target: "4" },
];

export default function NeuroGraph() {
  return (
    <div style={{ padding: "40px" }}>

      <BackButton />

      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
        NeuroGraph
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        Graph neural network system for relational recommendation modeling.
      </p>
      <GithubButton url="https://github.com/SohiniManne/NeuroGraph" />


      <DiagramCanvas nodes={nodes} edges={edges} />

      <ProjectDetails
        problem="Traditional recommendation systems ignore relational graph structure."

        approach="Constructed user-item graphs and trained GNN models to learn relational embeddings."

        tech={[
          "PyTorch",
          "GraphSAGE",
          "NetworkX",
          "Python"
        ]}

        result="Implemented a graph learning pipeline demonstrating advanced ML modeling capability."
      />

    </div>
  );
}
