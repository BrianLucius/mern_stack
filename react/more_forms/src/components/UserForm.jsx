import React, { useState } from 'react';

const UserForm = () => {
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+[@][a-zA-Z0-9.-]+[.][a-zA-Z]{2,}$');
    const validPassword = new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confPassword, setConfPassword] = useState("");
    const [confPasswordError, setConfPasswordError] = useState("");

    const validateFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value !== '' && e.target.value.length < 3) {
            setFirstNameError("Name must be greater than two characters.");
        } else {
            setFirstNameError("");
        }
    }

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value !== '' && e.target.value.length < 3) {
            setLastNameError("Name must be greater than two characters.");
        } else {
            setLastNameError("");
        }
    }

    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value !== '' && !validEmail.test(e.target.value)) {
            setEmailError("Provide a valid email address.");
        } else {
            setEmailError("");
        }
    }

    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value !== '' && !validPassword.test(e.target.value)) {
            setPasswordError("Password must be at least eight characters and contain at least one number.");
        } else {
            setPasswordError("");
        }
    }

    const validateConfPassword = (e) => {
        setConfPassword(e.target.value);
        if(e.target.value !== '' && e.target.value !== password) {
            setConfPasswordError("Passwords must match.");
        } else {
            setConfPasswordError("");
        }
    }

    const userInfo={ firstName, lastName, email, password, confPassword };

    return (
        <form> 
            <div>
                <label>First Name: </label>
                <input type="text" onChange={ validateFirstName }/>
                { firstNameError ? <p style={{color:'red'}}>{firstNameError}</p> : '' }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={ validateLastName }/>
                { lastNameError ? <p style={{color:'red'}}>{lastNameError}</p> : '' }
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={ validateEmail }/>
                { emailError ? <p style={{color:'red'}}>{emailError}</p> : '' }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ validatePassword }/>
                { passwordError ? <p style={{color:'red'}}>{passwordError}</p> : '' }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ validateConfPassword }/>
                { confPasswordError ? <p style={{color:'red'}}>{confPasswordError}</p> : '' }
            </div>
        </form>
    );
};

export default UserForm;
