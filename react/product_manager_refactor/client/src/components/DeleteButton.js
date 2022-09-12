import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
    const { productId, successCallBack } = props;

    const deleteProduct = e => {
        axios.delete(`http://localhost:8000/api/products/${productId}`)
        .then(res => {successCallBack();})
        .catch(err => console.error(err));
    }

    return (
        <button className="btn btn-outline-danger mx-3 px-5" onClick={deleteProduct}>Delete</button>
    )
}

export default DeleteButton