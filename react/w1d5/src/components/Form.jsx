import React, { Component, useState} from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [age, setAge] = useState("");
    const [image, setImage] = useState("");

    return (
        <div>
            <h1>Please fill out this form</h1>      
            <form>
                <div className="form-group">
                    <label>Pet Name: </label>
                    <input className='form-control' type="text" onChange={(e) => setName(e.target.value)} name="" id="" />
                    {
                        name.length < 3 && name.length > 0 ? <p className="alert alert-danger">Name must be more than three characters </p> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Type: </label>
                    <input className='form-control' type="text" onChange={(e) => setType(e.target.value)} name="" id="" />
                    {
                        type.length < 3 && type.length > 0 ? <p className="alert alert-danger">Type must be more than three characters </p> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Age: </label>
                    <input className='form-control' type="number" onChange={(e) => setAge(e.target.value)} name="" id="" />
                    {
                        age < 0 || age > 100 ? <p className="alert alert-danger">Age must be between 0 and 100 </p> : ''
                    }
                </div>
                <div className="form-group">
                    <label>Pet Image: </label>
                    <input className='form-control' type="text" onChange={(e) => setImage(e.target.value)} name="" id="" />
                </div>
            </form>
            <hr/>
            <p>Your Pet Info:</p>
            <p>Name: {name}</p>
            <p>Type: {type}</p>
            <p>Age: {age}</p>
            <p>Image: <img src={image} alt="Picture of your pet" height="200px"/></p>
        </div>
        );
}

export default Form;
