import { Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import SearchForm from "./components/SearchForm";
import Error from "./components/Error";
import './App.css';

function App() {
  return (
    <div className="App">
      <h2 className="text-center mt-5">StarWars API Crawler</h2>
      <SearchForm />
      <Routes>
        <Route path="/" element={<h3 className="text-center"><i>Luke, use the force...</i></h3>} />
        <Route path="/:resource/:id" element={<Details />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
