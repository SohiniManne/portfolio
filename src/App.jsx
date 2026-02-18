import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AnomalyGuard from "./pages/AnomalyGuard";
import FactLens from "./pages/FactLens";
import NeuroGraph from "./pages/NeuroGraph";
import DeepHierarch from "./pages/DeepHierarch";
import Aegis from "./pages/Aegis";
import Nivio from "./pages/Nivio";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";


function App() {
  return (
    <div style={{ background: "#0b0f17", minHeight: "100vh", color: "white" }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/anomaly" element={<AnomalyGuard />} />
        <Route path="/factlens" element={<FactLens />} />
        <Route path="/neurograph" element={<NeuroGraph />} />
        <Route path="/deephierarch" element={<DeepHierarch />} />
        <Route path="/aegis" element={<Aegis />} />
        <Route path="/nivio" element={<Nivio />} />
      </Routes>

    </div>
  );
}

export default App;
