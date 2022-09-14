import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';

const DeleteButton = props => {
    const {id, callbackFunction } = props;
    const navigate = useNavigate();

    const onClickHandler = (e) => {
        axios.delete(`http://localhost:8000/api/athletes/${id}`)
        .then(response => {
            console.log(response);
            callbackFunction(id);
            navigate('/');
        })
        .catch(err => {console.log(err);})
    }
    return (
        <button onClick={onClickHandler}>Delete</button>
    )
}

export default DeleteButton;