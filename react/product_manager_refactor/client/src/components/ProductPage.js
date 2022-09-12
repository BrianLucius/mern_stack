import React from 'react';
import CreateProduct from "./CreateProduct";
import ProductList from "./ProductList";

const ProductPage = () => {
    return (
        <div>
            <CreateProduct />
            <hr/>
            <ProductList />
        </div>
    )
    }

export default ProductPage