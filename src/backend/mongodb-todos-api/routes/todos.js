// routes/todos.js
const express = require('express');
const router = express.Router();
const db = require('../db');

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todosCollection = db.getTodosCollection(); // Get the collection
    const todos = await todosCollection.find({}).toArray();
    console.log('get all todos:',todos); // debug todos
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ message: 'Error fetching todos' });
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  const newTodo = req.body;
// Inside the POST route handler
try {
  const todosCollection = db.getTodosCollection();
  const result = await todosCollection.insertOne(newTodo);

  const createdTodo = { _id: result.insertedId, ...newTodo };
  res.status(201).json(createdTodo);
} catch (error) {
  console.error('Error creating todo:', error);
  res.status(500).json({ message: 'Error creating todo', error: error.message });
}
});

// ... Other routes (e.g., update, delete) can be added here ...

module.exports = router;


