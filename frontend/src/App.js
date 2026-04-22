import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Revtitude from "@/pages/Revtitude";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Revtitude />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
