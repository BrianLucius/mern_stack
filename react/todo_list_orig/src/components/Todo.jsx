import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 


const Todo = (props) => {
    const [todo, setTodo] = props.todoList;

    const handleComplete = () => {

    }

    const handleDelete = (e, todo) => {

    }

    return (
        <div className="text-center">
            <h3>Tasks List</h3>
            <ul className="list-group w-25 m-auto">
            { props.todoList.map( (todo, index) =>
                <li className="list-group-item d-flex justify-content-between align-items-center mr-5" key={index}>{todo.task} <input className="mr-5" type="checkbox" onChange={(e) => handleComplete(e, todo)} checked={todo.complete}/><button className="btn btn-secondary ml-5" onClick={(e) => handleDelete(e, todo)}>Delete</button></li> )}
            </ul>
        </div>
    );
};

export default Todo;
