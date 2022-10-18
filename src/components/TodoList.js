import React from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css"

const TodoList = ({todos}) => {

    return (
        <div className="TodoList">  
            {todos.map(todo => (
            // <div>{todo.text}</div>
            <TodoItem todo={todo} key={todo.id}/>
            ))}
        </div>
    
    );
};

export default TodoList;