import React, { useState } from 'react';
import './style.css';

import Todos from './components/todos';

export default function App() {
  return (
    <div>
      <h1>Manage Your Todos</h1>
      <Todos />
    </div>
  );
}
