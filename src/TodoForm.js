import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({ setTodoList }) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        const payload = {id: uuidv4(), title: value, status: "pending"};

        setTodoList((currentTodoList) => {
            return [...currentTodoList, payload];
        });

        setValue('');
    }

    return (
        <div className="input">
            <form onSubmit={handleSubmit} className="input-form">
                <input type="input" value={value} onChange={handleChange} name="todo" required className="input-box" />
                <input type="submit" value="Add" className="add-btn" />
            </form>
        </div>
        
    )
}

export default TodoForm;