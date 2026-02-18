import DiagramCanvas from "../components/DiagramCanvas";
import BackButton from "../components/BackButton";
import ProjectDetails from "../components/ProjectDetails";
import GithubButton from "../components/GithubButton";


const nodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "Financial News Input" } },
  { id: "2", position: { x: 260, y: 0 }, data: { label: "Text Preprocessing" } },
  { id: "3", position: { x: 520, y: 0 }, data: { label: "FinBERT Embeddings" } },
  { id: "4", position: { x: 780, y: 0 }, data: { label: "ML Classifier" } },
  { id: "5", position: { x: 1040, y: 0 }, data: { label: "Prediction Output" } },
  { id: "6", position: { x: 520, y: 180 }, data: { label: "Streamlit UI" } },
];

const edges = [
  { id: "e1", source: "1", target: "2" },
  { id: "e2", source: "2", target: "3" },
  { id: "e3", source: "3", target: "4" },
  { id: "e4", source: "4", target: "5" },
  { id: "e5", source: "5", target: "6" },
];

export default function FactLens() {
  return (
    <div style={{ padding: "40px" }}>

      <BackButton />

      <h1 style={{ fontSize: "34px", marginBottom: "10px" }}>
        FactLens
      </h1>

      <p style={{ opacity: 0.8, marginBottom: "30px" }}>
        NLP system for detecting misinformation in financial text.
      </p>
      <GithubButton url="https://github.com/SohiniManne/FactLens" />


      <DiagramCanvas nodes={nodes} edges={edges} />

      <ProjectDetails
        problem="Financial misinformation spreads rapidly and general NLP models lack domain understanding."

        approach="Used FinBERT embeddings combined with preprocessing pipelines and ML classifiers to detect misleading financial claims."

        tech={[
          "FinBERT",
          "spaCy",
          "XGBoost",
          "Streamlit",
          "Python"
        ]}

        result="Built a domain-specific NLP system demonstrating applied ML in real-world financial text analysis."
      />

    </div>
  );
}
