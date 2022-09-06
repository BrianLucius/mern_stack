import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import TodoForm from './components/TodoForm';
import Todo from './components/Todo';

function App() {
  const [todoList, setTodoList] = useState([{task: "Todo task 1", complete: false, delete: false}, {task: "Another todo task 2", complete: true, delete: false}]);

  const newTodo = (todo) => {
    setTodoList(todoList => [...todoList, todo]);
  }

  return (
    <div className="App">
      <h1 className="text-center">Todo List</h1>
      <TodoForm onNewTodo = { newTodo }/>
      <Todo todoList={ todoList }/>
    </div>
  );
}

export default App;
