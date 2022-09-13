import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FavoriteAuthors = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      axios.get('http://localhost:8000/api/authors')
      .then(response => {
          setAuthors(response.data.data);
          setLoaded(true);
      })
      .catch(err => console.error(err));
    });  // without `},[]);` useEffect is watching the collection and updates the response data in real-time

    const deleteAuthor = authorId => {
      axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(response => {setAuthors(authors.filter(author => author._id !== authorId));})  //if enabling auto useEffect, this .filter becomes redundant
        .catch(err => console.error(err));
    }

    return (
      <div className="container w-75">
        <Link to='/new_author'>Add a New Author</Link>
        <p>We have quotes by:</p>
        <table className="table table-bordered">
          <thead className="table-light">
            <tr>
              <td>Author</td>
              <td>Actions Available</td>
            </tr>
          </thead>
          <tbody className='table-group-divider'>
            {loaded && authors.map((author, index) => {
              return (
                <tr key={index}>
                  <td>{author.authorName}</td>
                  <td>
                    <Link className="btn btn-sm btn-primary mx-1" to='/edit_author' state={{id: author._id}}>Edit</Link>
                    <button className="btn btn-sm btn-outline-danger mx-1" onClick={() => {deleteAuthor(author._id)}}>Delete</button>
                  </td>
                </tr>)
            })}
          </tbody>
        </table>
      </div>
    )
}

export default FavoriteAuthors