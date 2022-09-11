import { Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import ProductPage from "./components/ProductPage";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product_details" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
