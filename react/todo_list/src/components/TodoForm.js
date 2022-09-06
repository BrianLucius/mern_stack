import React from 'react'

const TodoForm = (props) => {
  return (
    <div className="m-auto w-25 mb-3">
      <form onSubmit={(e) => props.handleNewTodoSubmit(e)}>
        <div className="input-group">
        <span className="input-group-text">Task: </span>
          <input className="form-control" type="text" onChange={(e) => props.setNewTodo(e.target.value)} value={props.newTodo}></input>
          <div>
            <button className="btn btn-success">Add</button>
          </div>
        </div>
    </form>
    </div>
  )
}

export default TodoForm
