import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'; 

const TodoForm = (props) => {
    const [todo, setTodo] = useState({task: "", complete: false, delete: false}); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task) {
            props.onNewTodo(todo);
            setTodo({task: "", complete: false, delete: false});
        }
    };

    return (
        <div className="m-auto w-25 mb-3">
            <form onSubmit = { handleSubmit }>
                <div className="input-group">
                    <span className="input-group-text">Task: </span>
                    <input className="form-control" type="text" onChange={(e) => setTodo({...todo, task: e.target.value})} value={ todo.task }/>
                    <input className="btn btn-success" type="submit" value="Add Todo"/>
                </div>
            </form>
        </div>
    )
}

export default TodoForm