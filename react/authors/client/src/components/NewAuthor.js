import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const NewAuthor = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);

    const handleSubmit = newAuthor => {
        axios.post("http://localhost:8000/api/authors", newAuthor)
        .then((response)=>{navigate("/");})
        .catch((err) => {
            console.log("There was an error: ", err);
            const errorResponse = err.response.data.error.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        });
    }

    return (
        <div className="container w-75">
            <Link to='/'>Home</Link>
            <p>Add a New Author:</p>
            {errors.map((err, index) => <p className="alert alert-danger p-1" key={index}>{err}</p>)}
            <AuthorForm onSubmitProp={handleSubmit} initialAuthorName=""/>
        </div>
    )
}

export default NewAuthor