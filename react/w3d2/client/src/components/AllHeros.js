import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AllHeros = () => {
    const [allHeros, setAllHeros] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/heros')
        .then((response) => {setAllHeros(response.data.results)})
        .catch((err) => {console.log("There was an error: ", err)});
    }, []);

    return (
        <div className='container'>
            <h1>AllHeros</h1>
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
                                    <td><button className="btn btn-primary mx-1">Edit</button>
                                        <button className="btn btn-danger mx-1">Delete</button></td>
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