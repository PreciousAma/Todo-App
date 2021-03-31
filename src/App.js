import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import TodoForm from './TodoForm';

const todos = [
  {id: uuidv4(), title: 'visit the clinic', status: 'pending'},
  {id: uuidv4(), title: 'get groceries',  status: 'completed'},
  {id: uuidv4(), title: 'chop life',  status: 'pending'}
];


function App() {
  const [todoList, setTodoList] = useState(todos);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem('todotList'));
    localStorage.setItem('todoList', JSON.stringify(todoList));
    // setContactList(contacts);
  }, [todoList]);

  return (
    <div className="container">
      <h1 className="title">Basic Todo App</h1>
      <div className="todo-wrap">
        <TodoForm setTodoList={setTodoList} />
        <Todos todoList={todoList} setTodoList={setTodoList} />
      </div>
    </div> 
  );
}

export default App;