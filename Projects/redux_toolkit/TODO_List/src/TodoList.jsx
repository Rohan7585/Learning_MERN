import React from "react";
import { useSelector } from "react-redux";
import RemoveTodo from "./removeTodo";

const TodoList = ()=>{
    const todos = useSelector(state => state.todos);
    return (
        <ul>
            {todos.map((todo, index)=>(
                <li key = {index}>
                    {todo}
                    <RemoveTodo todo = {todo}/>
                </li>
            ))}
        </ul>
    )
}

export default TodoList;