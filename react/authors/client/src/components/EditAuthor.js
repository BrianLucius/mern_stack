import React, { useState, useEffect} from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import AuthorForm from './AuthorForm';

const EditAuthor = () => {
    const [author, setAuthor] = useState();
    const [loaded, setLoaded] = useState();
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const { id } = location.state;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then(response => {
            setAuthor(response.data.data);
            setLoaded(true);
        })
        .catch(err => console.log("There was an error: ", err));
    });

    const handleSubmit = updateAuthor => {
        axios.put(`http://localhost:8000/api/authors/${id}`, updateAuthor)
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
            <p>Edit This Author:</p>
            {errors.map((err, index) => <p className="alert alert-danger p-1" key={index}>{err}</p>)}
            {loaded && <AuthorForm onSubmitProp={handleSubmit} initialAuthorName={author.authorName}/>}
        </div>
    )
}

export default EditAuthor