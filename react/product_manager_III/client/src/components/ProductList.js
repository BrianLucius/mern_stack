import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[products]);


    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => { 
            console.log(res);
            removeFromDom(productId); 
        })
        .catch(err => console.error(err));
    }

    const removeFromDom = productId => {
        console.log(products);
        setProducts(products.filter(product => product._id !== productId));
    }

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {loaded && products.map((product, index) => {
                    return (<p key={index}><Link to='/product_details' state={{id: product._id}}>{product.title}</Link>
                    <button className="btn btn-sm btn-outline-danger mx-3" onClick={(e) => {deleteProduct(product._id)}}>Delete</button></p>
                    )
                })}
            </div>
        </div>
    )
}

export default ProductList