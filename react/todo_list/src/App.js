import react, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import TodoForm from './components/TodoForm'
import Todo from './components/Todo' 

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    if (!newTodo) return;

    const todoItem = {
      task: newTodo,
      complete: false
    }

    setTodoList([...todoList, todoItem]);
    setNewTodo("");
  }

  const handleCompleteStatus = (index) => {
    const updatedTodos = todoList.map((todo, i) => {
      if (i === index) {
        const updatedTodo = {...todo, complete: !todo.complete };
        return updatedTodo;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  }

  const handleDelete = (index) => {
    const filteredTodoList=todoList.filter((todo, i) => {
    return i !== index;
    });
    setTodoList(filteredTodoList);
  }

  return (
    <div className="App">
      <h1 className="text-center">Todo List</h1>
      <TodoForm handleNewTodoSubmit={handleNewTodoSubmit} setNewTodo={setNewTodo} newTodo={newTodo}/>
      <h3>Tasks List</h3>
      <ul className="list-group w-25 m-auto">
      {
        todoList.map((todo, index) => {
          return (<Todo key={index} todo={todo} handleCompleteStatus={handleCompleteStatus} handleDelete={handleDelete} index={index}/>);
        })
      }
      </ul>
    </div>
  );
}

export default App;
