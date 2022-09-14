import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllHeros = () => {
    const [allHeros, setAllHeros] = useState([]);
    const [deleteToggle, setDeleteToggle] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/heros')
        .then((response) => {setAllHeros(response.data.results)})
        .catch((err) => {console.log("There was an error: ", err)});
    }, [deleteToggle]);

    const deleteHero = (e, id) => {
        console.log("Deleting hero id:", id);
        axios.delete(`http://localhost:8000/api/hero/delete/${id}`)
        .then((response) => {setDeleteToggle(!deleteToggle)})
        .catch((err) => {console.log("There was an error: ", err)});
    }

    return (
        <div className='container'>
            <h1>AllHeros</h1>
            <Link to="/hero/add_hero">Add a Hero</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope='col'>Hero Name</th>
                        <th scope='col'>Rating</th>
                        <th scope='col'>Image</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allHeros.map((hero, index) => {
                            return (
                                <tr key={index}>
                                    <td>{hero.name}</td>
                                    <td>{hero.rating}</td>
                                    <td><img src={hero.image} alt="Superhero" height="50"/></td>
                                    <td><Link to={`/hero/edit/${hero._id}`} className="btn btn-primary mx-1">Edit</Link>
                                        <button className="btn btn-danger mx-1" onClick={(e) => {deleteHero(e, hero._id)}}>Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllHeros;