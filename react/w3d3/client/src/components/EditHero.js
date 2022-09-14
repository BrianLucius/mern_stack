import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useParams } from 'react-router';
import axios from 'axios';

const EditHero = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    const[formInfo, setFormInfo] = useState({
        name: "",
        rating: "",
        image: ""
    });

    useEffect(() => {
        axios.get(`http://localhost:8000/api/hero/${id}`)
        .then((response) => {setFormInfo(response.data.results)})
        .catch((err) => {console.log("There was an error: ", err)})
    },[id])

    const onChangeHandler = (e) => {
        setFormInfo({
            ...formInfo, 
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/hero/update/${id}`, formInfo)
        .then((response) => {navigate("/");})
        .catch((err) => {console.log("There was an error: ", err)});
    }

    return (
        <div className="container">
            <h1>Edit Hero</h1>
            <form onSubmit={submitHandler}>
                <div className="mb-3 d-flex">
                    <label className="form-label">Name:</label>
                    <input className="form-label" name="name" type="text" onChange={onChangeHandler} value={formInfo.name}></input>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Rating:</label>
                    <input className="form-label" name="rating" type="number" onChange={onChangeHandler} value={formInfo.rating}></input>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label">Image:</label>
                    <input className="form-label" name="image" type="text" onChange={onChangeHandler} value={formInfo.image}></input>
                </div>
                <div>
                    <button className="btn btn-success">Submit</button>
                    <Link className="btn btn-secondary mx-3" to="/">Cancel</Link>
                </div>
            </form>
        </div>
    )
}

export default EditHero;