import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';

const AddPlayer = () => {
    const [formInfo, setFormInfo] = useState({
        playerName: "",
        playerPosition: ""
    });
    const [errors, setErrors] = useState([]);
    const [submitDisabled, setSubmitDisabled] = useState(true);

    const navigate = useNavigate();

    const onChangeHandler = (e) => {
      setFormInfo({
        ...formInfo,
        [e.target.name]: e.target.value
      })
      if (e.target.name === "playerName") {
          e.target.value.length > 1 ? setSubmitDisabled(false) : setSubmitDisabled(true);
      } 
    }

    const onSubmitHandler = (e) => {
      e.preventDefault();
      axios.post('http://localhost:8000/api/players', formInfo)
      .then((response) => {navigate("/players/list")})
      .catch((err) => {
        console.log("There was an error: ", err);
        const errorResponse = err.response.data.error.errors;
        const errorArr = [];
        for (const key of Object.keys(errorResponse)) {
            errorArr.push(errorResponse[key].message)
        }
        setErrors(errorArr);});
    }

    return (
      <div className="container border border-3 border-secondary rounded mb-5 shadow">
            <h3 className="text-start mb-4">Add Player</h3>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p className="alert alert-danger p-1" key={index}>{err}</p>)}
                <div className="mb-3 d-flex">
                    <label className="form-label col-3">Player Name:</label>
                    <input className="form-label" name="playerName" type="text" onChange={onChangeHandler}></input>
                </div>
                <div className="mb-3 d-flex">
                    <label className="form-label col-3">Preferred Position:</label>
                    <input className="form-label" name="playerPosition" type="text" onChange={onChangeHandler}></input>
                </div>
                <div>
                    <Link className="btn btn-secondary px-5 mb-3 mx-1" to="/players/list">Cancel</Link>
                    <button className="btn btn-success px-5 mb-3 mx-1" disabled={submitDisabled}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AddPlayer;