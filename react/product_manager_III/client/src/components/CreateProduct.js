import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

const Product = () => {
    const [productTitle, setProductTitle] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/products", {
            "title": productTitle, 
            "price": productPrice,
            "description": productDescription
        })
        .then((response) => {console.log(response);
            setProductTitle('');
            setProductPrice('');
            setProductDescription('');
        })
        .catch((err) => {"There was an error"});
    }

    return (
        <div>
            <h1>Product Manager</h1>
            <div className="container w-50">
                <form onSubmit={handleSubmit}>
                    <div className="input-group my-3">
                        <label className="input-group-text col-3">Title:</label>
                        <input type="text" className="form-control form-control-lg" onChange={(e) => { setProductTitle(e.target.value)}} value={productTitle}></input>
                    </div>
                    <div className="input-group my-3">
                        <label className="input-group-text col-3">Price:</label>
                        <input type="number" step="0.01" min="0.01" className="form-control form-control-lg" onChange={(e) => { setProductPrice(e.target.value)}} value={productPrice}></input>
                    </div>
                    <div className="input-group my-3">
                        <label className="input-group-text col-3">Description:</label>
                        <input type="text" className="form-control form-control-lg" onChange={(e) => { setProductDescription(e.target.value)}} value={productDescription}></input>
                    </div>
                <button className="btn btn-lg btn-primary px-5" type="submit">Create</button>
                </form>
            </div>
        </div>
    )
}

export default Product