import React, { useState } from 'react';

const tableStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'left'
};

const UserForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");

    const userInfo={ firstName, lastName, email, password, confPassword };


    return (
        <>
        <form onSubmit={""}> 
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <label>Email: </label>
                <input type="text" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div>
                <label>First Name: </label>
                <input type="password" onChange={(e) => setConfPassword(e.target.value)}/>
            </div>
        </form>
        <h3>Your Form Data</h3>
        <table style={ tableStyle }>
            <tr>
                <td>First Name:</td>
                <td>{ firstName }</td>
            </tr>
            <tr>
                <td>Last Name:</td>
                <td>{ lastName }</td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>{ email }</td>
            </tr>
            <tr>
                <td>Password:</td>
                <td>{ password }</td>
            </tr>
            <tr>
                <td>Confirm Password:</td>
                <td>{ confPassword }</td>
            </tr>
        </table>
    </>
    );
};

export default UserForm;
