export const anomalyNodes = [
  { id: "1", position: { x: 0, y: 50 }, data: { label: "User Events / Logs" }, type: "input" },
  { id: "2", position: { x: 220, y: 50 }, data: { label: "Kafka Producers" } },
  { id: "3", position: { x: 440, y: 50 }, data: { label: "Kafka Topics" } },
  { id: "4", position: { x: 660, y: 50 }, data: { label: "Feature Service" } },
  { id: "5", position: { x: 880, y: 50 }, data: { label: "Feast Store" } },

  { id: "6", position: { x: 880, y: 200 }, data: { label: "Training Pipeline" } },
  { id: "7", position: { x: 1100, y: 200 }, data: { label: "Isolation Forest Model" } },

  { id: "8", position: { x: 660, y: 200 }, data: { label: "BentoML API" } },
  { id: "9", position: { x: 440, y: 200 }, data: { label: "Inference Engine" } },

  { id: "10", position: { x: 220, y: 200 }, data: { label: "Streamlit Dashboard" }, type: "output" },
];

export const anomalyEdges = [
  { id: "e1", source: "1", target: "2", animated: true },
  { id: "e2", source: "2", target: "3", animated: true },
  { id: "e3", source: "3", target: "4", animated: true },
  { id: "e4", source: "4", target: "5", animated: true },
  { id: "e5", source: "5", target: "6", animated: true },
  { id: "e6", source: "6", target: "7", animated: true },
  { id: "e7", source: "7", target: "8", animated: true },
  { id: "e8", source: "5", target: "8", animated: true },
  { id: "e9", source: "8", target: "9", animated: true },
  { id: "e10", source: "9", target: "10", animated: true },
];
