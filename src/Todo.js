import React from 'react';
import Button from './Button';

const Todo = ({todoList, setTodoList}) => {

   const handleChangeStatus = (todo) => {
        const payload = {...todo, status: "completed"}
    }

    return (
        <div className="todo-list">
            <ol className="todo-items">
                {todoList.map((todo)=> {
                    return (
                        <li key={todo.id} className="todo-item">
                            <span className="todo-title">{todo.title}</span>
                            <span className="item-status">
                                {todo.status === 'pending' ?
                                    <Button buttonAction= {() => handleChangeStatus(todo)} buttonText="Done" className="done-btn"/> :
                                    <i className="fas fa-check" />
                                }
                            </span>
                        </li>
                    );  
                })}
            </ol>
        </div>
    )
}   

export default Todo;
