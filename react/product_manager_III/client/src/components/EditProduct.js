import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

const EditProduct = () => {
    const [productTitle, setProductTitle] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const location = useLocation();
    const { id } = location.state;
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProductTitle(res.data.data.title);
            setProductPrice(res.data.data.price);
            setProductDescription(res.data.data.description);
        })
        .catch(err => console.error(err));
    },[id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {
            "title": productTitle, 
            "price": productPrice,
            "description": productDescription
        })
        .then((response) => {console.log(response);})
        .then(() => {navigate(-1)})
        .catch((err) => {"There was an error"});
    }

    return (
        <div>
            <h1>Edit Product</h1>
            <hr/>
            <div className="container w-50">
                <form onSubmit={handleSubmit}>
                    <div className="input-group my-3">
                        <label className="input-group-text col-2">Title:</label>
                        <input type="text" className="form-control form-control-lg" onChange={(e) => { setProductTitle(e.target.value)}} value={productTitle}></input>
                    </div>
                    <div className="input-group my-3">
                        <label className="input-group-text col-2">Price:</label>
                        <input type="number" step="0.01" min="0.01" className="form-control form-control-lg" onChange={(e) => { setProductPrice(e.target.value)}} value={productPrice}></input>
                    </div>
                    <div className="input-group my-3">
                        <label className="input-group-text col-2">Description:</label>
                        <input type="text" className="form-control form-control-lg" onChange={(e) => { setProductDescription(e.target.value)}} value={productDescription}></input>
                    </div>
                <button className="btn btn-lg btn-primary px-5" type="submit">Update</button>
                <Link className="btn btn-lg btn-secondary px-5 mx-3" to='/product_details' state={{id: id}}>Cancel</Link>
                </form>
            </div>
        </div>
    )
}

export default EditProduct