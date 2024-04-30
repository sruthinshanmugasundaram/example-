import React from 'react';

const Todo = ({ todo, onUpdateTodo, onDeleteTodo }) => {
  const handleUpdate = () => {
    
    onUpdateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  const handleDelete = () => {
  
    onDeleteTodo(todo.id);
  };

  return (
    <div className="todo">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={handleUpdate}>{todo.completed ? 'Incomplete' : 'Completed'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Todo;
