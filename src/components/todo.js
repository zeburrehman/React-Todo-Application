import React from 'react';
// import { FaCalendarAlt } from "react-icons/fa";
import { FaTrash } from 'react-icons/fa'

export default function todo({ todo, markAsComplete, deleteTodo }) {
  return (
    <div className="todo" onClick={() => markAsComplete(todo)}>
      <span style={ todo.completed ? { 'text-decoration':'line-through'} : {}}>
        {todo.id} - {todo.description}
      </span>
      
      <div className='todo-summary'>
        <span className='todo-status'>{todo.completed? "Completed": "In Progress"}</span>
        <span onClick={() => deleteTodo(todo)}><FaTrash  /></span>  
      </div> 
    </div>
  );
}
