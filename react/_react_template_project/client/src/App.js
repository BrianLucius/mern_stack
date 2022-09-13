import { Routes, Route } from "react-router-dom";
import Component from "./components/Component";
import './App.css';

function App() {
  return (
    <div className="App">
      <Component />
      <Routes>
        <Route path="/" element={<Component />} />
        <Route path="/product_details" element={<Component />} />
      </Routes>
    </div>
  );
}

export default App;
