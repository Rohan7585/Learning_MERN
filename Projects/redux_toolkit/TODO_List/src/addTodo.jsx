import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './todoSlice';

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={newTodo}
                onChange={event => setNewTodo(event.target.value)}
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;