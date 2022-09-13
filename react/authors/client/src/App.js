import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'; 
import FavoriteAuthors from "./components/FavoriteAuthors"
import NewAuthor from "./components/NewAuthor";
import EditAuthor from "./components/EditAuthor";
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Favorite Authors</h1>
      <Routes>
        <Route path="/" element={<FavoriteAuthors />} />
        <Route path="/new_author" element={<NewAuthor />} />
        <Route path="/edit_author" element={<EditAuthor />} />
      </Routes>
    </div>
  );
}

export default App;
