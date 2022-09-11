import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then(res => {
            setProducts(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[]);

    return (
        <div>
            <h1>All Products</h1>
            <div>
                {loaded && products.data.map((product, index) => {
                    return (<h3 key={index}><Link to='/product_details' state={{id: product._id}}>{product.title}</Link></h3>)
                })}
            </div>
        </div>
    )
}

export default ProductList