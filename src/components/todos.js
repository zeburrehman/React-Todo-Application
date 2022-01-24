import React, { useState } from 'react';
import Todo from './todo';
import EditTodo from './edit-todo';

export default function Todos() {
  let [todos, setTodos] = useState([]);

  function addNewTodo(description) {
    let newTodos = [
      { id: todos.length + 1, description, completed: false },
      ...todos,
    ];
    setTodos(newTodos);
  }

  function markAsCompleted(todo) {
    let newTodos = todos.map(m => {
      if(m.id === todo.id) m.completed = !todo.completed;
      return m;
    });
    setTodos(newTodos);
    console.log(newTodos);
  }

  function deleteTodo(todo){
    let index = todos.indexOf(todo);
    if(index === -1) return;
    setTodos(todos.splice(index, 1));
  }

  return (
    <div>
      <EditTodo addNewTodo={addNewTodo} />
      {todos.map((t) => (
        <div>
          <Todo todo={t} 
            key={t.id}
            markAsComplete={markAsCompleted}
            deleteTodo={deleteTodo}/>
        </div>
        
      ))}
    </div>
  );
}
