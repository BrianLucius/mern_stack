import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import startCase from 'lodash/startCase';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import axios from 'axios';

const SearchForm = () => {
    const [id, setId] = useState("");
    const [selectedResource, setSelectedResource] = useState("");
    const [resources, SetResources] = useState([]);
    const navigate = useNavigate();

    useEffect(() => { 
        axios.get("https://swapi.dev/api/")
            // .then((response) => {console.log(response.data);})
            .then((response) => {
                if (!selectedResource) {
                    setSelectedResource(Object.keys(response.data)[0]);
                };
                SetResources(response.data);})
            .catch((err) => {navigate('/error');});
        },[selectedResource, navigate]);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${selectedResource}/${id}`);
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row my-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <div className="input-group my-3">
                            <label className="input-group-text" >Search for:</label>
                            <select className="form-select" onChange={(e) => { setSelectedResource(e.target.value)}}>
                                {Object.keys(resources).map((resource, index) => {return(
                                    <option key={index} value={resource}>{startCase(resource)}</option>
                                    )})
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="col-auto input-group my-3">
                            <label className="input-group-text" >ID:</label>
                            <input className="form-control" type="number" onChange={(e) => setId(e.target.value)} value={id}/>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success" type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SearchForm