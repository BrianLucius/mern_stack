import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

const ProductDetails = () => {
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        // These options are needed to round to whole numbers if that's what you want.
        minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
    });

    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
        .catch(err => console.error(err));
    },[id]);

    return (
        <div>
            <h1>ProductDetails</h1>
            <hr/>
            <h2><u>{loaded && product.data.title}</u></h2>
            <h4>{loaded && formatter.format(product.data.price)}</h4>
            <h4>{loaded && product.data.description}</h4>
            <hr/>
            <Link to='/'><h5>Back Home</h5></Link>
        </div>
    )
}

export default ProductDetails