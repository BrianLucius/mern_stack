import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AddHero = () => {
    const[formInfo, setFormInfo] = useState({
        name: "",
        rating: "",
        image: ""
    });

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo, 
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/hero/new', formInfo)
        .then((response) => {navigate("/");})
        .catch((err) => {console.log("There was an error: ", err)});
    }

    return (
        <div className="container">
            <h1>Add Hero</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3 d-flex">
                    <label className="form-label">Name:</label>
                    <input className="form-label" name="name" type="text" onChange={onChangeHandler}></input>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Rating:</label>
                    <input className="form-label" name="rating" type="number" onChange={onChangeHandler}></input>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Image:</label>
                    <input className="form-label" name="image" type="text" onChange={onChangeHandler}></input>
                </div>
                <div>
                    <button className="btn btn-success">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddHero;