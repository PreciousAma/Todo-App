import React from 'react';
import Button from './Button';

const Todos = ({todoList, setTodoList}) => {

   const handleChangeStatus = (todo) => {
        const payload = {...todo, status: "completed"}
        setTodoList((currentTodoList) => {
            const todoIndex = currentTodoList.findIndex((data) => {
                return data.id === payload.id
            });
            
            const newArr = [...currentTodoList];
            newArr.splice(todoIndex, 1, payload);

            return newArr;
        })
    };

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
                                    <i className="fas fa-check check-btn" />
                                }
                            </span>
                        </li>
                    );  
                })}
            </ol>
        </div>
    );
}   

export default Todos;
