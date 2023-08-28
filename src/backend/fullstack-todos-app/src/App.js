import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:5000/api/todos') // Point to the backend URL
      .then((response) => response.json())
      .then((data) => setTodos(data))
      .catch((error) => console.error('Error fetching todos:', error));
  }, []);

  const handleNewTaskChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleAddTask = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/api/todos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: newTask }),
      });
  
      if (!response.ok) {
        const errorData = await response.json(); // Attempt to parse error message
        throw new Error(errorData.message || 'Failed to add task');
      }
  
      const data = await response.json();
      setTodos([...todos, data]);
      setNewTask('');
    } catch (error) {
      console.error('Error adding task:', error.message);
    }
  };  
  

  const handleDeleteTask = async (taskId) => {
    try {
      console.log('Deleting task with ID:', taskId);
  
      const response = await fetch(`http://127.0.0.1:5000/api/todos/${taskId}`, {
        method: 'DELETE',
      });
  
      console.log('Response status:', response.status);
  
      if (!response.ok) {
        console.log('Delete request not OK');
        throw new Error('Failed to delete task');
      }
  
      const updatedTodos = todos.filter((todo) => todo._id !== taskId);
      setTodos(updatedTodos);
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };
  

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={handleNewTaskChange}
        />
        <button type="button" onClick={handleAddTask}>
          Add Task
        </button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {todo.title}
            <button onClick={() => handleDeleteTask(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;



