import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';
import ProductForm from './ProductForm';

const Product = () => {
    const handleSubmit = newProduct => {
        axios.post("http://localhost:8000/api/products", newProduct)
        .then((response) => console.log(response))
        .catch((err) => console.log("There was an error: ", err));
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <div className="container w-50">
                <ProductForm onSubmitProp={handleSubmit} initialTitle="" initialPrice="" initialDescription="" />
            </div>
        </div>
    )
}

export default Product