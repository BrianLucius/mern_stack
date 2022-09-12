import { Routes, Route } from "react-router-dom";
import ProductDetails from './components/ProductDetails';
import ProductPage from "./components/ProductPage";
import EditProduct from "./components/EditProduct";
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/product_details" element={<ProductDetails />} />
        <Route path="/edit_product" element={<EditProduct />} />
      </Routes>
    </div>
  );
}

export default App;
