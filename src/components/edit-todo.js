import React, { useState } from 'react';

export default function EditTodo({ addNewTodo }) {
  let [description, setDescription] = useState('');

  function addNewDescription(e) {
    addNewTodo(description);
    setDescription('');
    e.preventDefault();
  }

  return (
    <div className="form-container">
      <form onSubmit={addNewDescription}>
        <div className="input-group">
          <input
            placeholder="Write Todo..."
            type="text"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <input type="submit" value="Add New Todo" />
        </div>
      </form>
    </div>
  );
}
