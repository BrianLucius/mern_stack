import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import Auth from "./components/Auth";
import LandingPage from "./components/Home";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
