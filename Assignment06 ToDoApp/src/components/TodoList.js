import './TodoList.css';
import React, { useState } from 'react';

function TodoList() {
  const [task, setTask] = useState('');
  const [todoList, setTodoList] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return;

    const updatedList = [...todoList, task.trim()];
    const sortedList = updatedList.sort((a, b) => a.localeCompare(b));
    setTodoList(sortedList);
    setTask('');
  };

  const deleteTask = (indexToDelete) => {
    const updatedList = todoList.filter((_, index) => index !== indexToDelete);
    setTodoList(updatedList);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}className="todo-container">
      <h2>Todo List App</h2>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todoList.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
