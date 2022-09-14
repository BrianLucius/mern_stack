import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';  
import './App.css';
import ManagePlayers from "./components/ManagerPlayers";
import ManageStatus from "./components/ManageStatus"
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App container">
      <NavBar />
      <Routes>
        <Route path="/players/*" element={<ManagePlayers />} />
        <Route path="/status/*" element={<ManageStatus />} />
      </Routes>
    </div>
  );
}

export default App;
