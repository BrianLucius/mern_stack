const Todo = (props) => {
    const todoClasses = [];

    if (props.todo.complete) {
      todoClasses.push("text-decoration-line-through");
    }

    return (
    <li className="list-group-item d-flex justify-content-between align-items-center mr-5"> 
        <span className={todoClasses.join(" ")}>{props.todo.task}</span>
        <input className="mx-5" type="checkBox" checked={props.todo.complete} onChange={(e) => props.handleCompleteStatus(props.index)}></input>
        <button className="btn btn-secondary" onClick={(event) => props.handleDelete(props.index)}>Delete</button>
    </li>
    );
}

export default Todo;