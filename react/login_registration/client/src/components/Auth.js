import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Auth = () => {
    const [registrationErrors, setRegistrationErrors] = useState([]);
    const [loginErrors, setLoginErrors] = useState([]);
    const [registrationForm, setRegistrationForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [loginForm, setLoginForm] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const onChangeHandlerRegister = (e) => {
        setRegistrationForm({
            ...registrationForm,
            [e.target.name]: e.target.value
        })
    }

    const onChangeHandlerLogin = (e) => {
        setLoginForm({
            ...loginForm,
            [e.target.name]: e.target.value
        })
    }

    const handleRegister = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/register", registrationForm)
        .then(response => {
            console.log(response);
            navigate("/home");})
        .catch(error => {
            console.log("There was an error: ", error);
            const errorResponse = error.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                errorArr.push(errorResponse[key].message);
            }
            setRegistrationErrors(errorArr);})
    }

    const handleLogin = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/login", loginForm)
        .then(response => {
            console.log(response);
            navigate("/home");})
        .catch(error => {
            console.log("There was an error: ", error);
            const errorResponse = error.response.data.errors;
            const errorArr = [];
            for (const key of Object.keys(errorResponse)) {
                console.log(errorResponse[key].message)
                errorArr.push(errorResponse[key].message);
            }
            setLoginErrors(errorArr);})
    }

    return (
        <div>
            <div>
                <h1>Auth Form</h1>
                <form onSubmit={handleRegister}>
                {registrationErrors.map((err, index) => <p className="alert alert-danger p-1" key={index}>{err}</p>)}
                    <p>
                        <label>First Name:</label>
                        <input type="text" name="firstName" onChange={(e)=>{onChangeHandlerRegister(e)}} value={registrationForm.firstName}/>
                    </p>
                    <p>
                        <label>Last Name:</label>
                        <input type="text" name="lastName" onChange={(e)=>{onChangeHandlerRegister(e)}} value={registrationForm.lastName}/>
                    </p>
                    <p>
                        <label>Email Address:</label>
                        <input type="text" name="email" onChange={(e)=>{onChangeHandlerRegister(e)}} value={registrationForm.email}/>
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="text" name="password" onChange={(e)=>{onChangeHandlerRegister(e)}} value={registrationForm.password}/>
                    </p>
                    <p>
                        <label>Confirm Password:</label>
                        <input type="text" name="confirmPassword" onChange={(e)=>{onChangeHandlerRegister(e)}} value={registrationForm.confirmPassword}/>
                    </p>
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div>
                <h1>Login Form</h1>
                <form onSubmit={handleLogin}>
                {loginErrors.map((err, index) => <p className="alert alert-danger p-1" key={index}>{err}</p>)}
                    <p>
                        <label>Email Address:</label>
                        <input type="text" name="email" onChange={(e)=>{onChangeHandlerLogin(e)}} value={loginForm.email}/>
                    </p>
                    <p>
                        <label>Password:</label>
                        <input type="text" name="password" onChange={(e)=>{onChangeHandlerLogin(e)}} value={loginForm.password}/>
                    </p>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Auth;