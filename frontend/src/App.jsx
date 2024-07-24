import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import ResultPage from "./pages/ResultPage";
import { Routes, Route } from "react-router-dom";
import Watch from "./pages/Watch";

function App() {
  return (
    <div className="min-h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<ResultPage />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </div>
  );
}

export default App;
