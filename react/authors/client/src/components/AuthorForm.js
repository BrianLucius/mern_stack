import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AuthorForm = (props) => {
  const { initialAuthorName, onSubmitProp} = props;
  const [authorName, setAuthorName] = useState(initialAuthorName);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmitProp({authorName});
  }

  return (
    <form onSubmit={handleSubmit}>
            <div className="input-group my-3">
                <label className="input-group-text col-3">Author name:</label>
                <input type="text" className="form-control form-control-lg" onChange={(e) => { setAuthorName(e.target.value)}} value={authorName}></input>
            </div>
            <button className="btn btn-primary mx-1" type="submit">Submit</button>
            <Link className="btn btn-secondary mx-1" to="/">Cancel</Link>
        </form>
  )
}

export default AuthorForm