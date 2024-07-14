import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo } from './todoSlice';

const RemoveTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeTodo(todo));
  };

  return (
    <button onClick={handleRemove}>Remove</button>
  );
};

export default RemoveTodo;