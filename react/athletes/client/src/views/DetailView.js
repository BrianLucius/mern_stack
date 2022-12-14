import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

const DetailView = () => {
    const {id} = useParams();
    const [athlete, setAthlete] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/athletes/${id}`)
        .then(response => {
            setAthlete(response.data);
        })
        .catch(err => {console.log(err);})
    })

    return (
        <div>
            <h1>{athlete.firstName} {athlete.lastName}</h1>
            <p>Sport: {athlete.sport}</p>
            <p>Team: {athlete.team}</p>
            <DeleteButton id={athlete._id} callbackFunction={(e)=>navigate('/')}/>
        </div>
    )
}

export default DetailView;