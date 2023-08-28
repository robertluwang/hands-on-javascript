// routes/todos.js
const express = require('express');
const router = express.Router();
const db = require('../db');
const { ObjectId } = require('mongodb'); // Import ObjectId

// Get all todos
router.get('/', async (req, res) => {
  try {
    const todosCollection = db.getTodosCollection(); // Get the collection
    const todos = await todosCollection.find({}).toArray();
    //console.log('routes/todos.js/router.get() get all todos:',todos); 
    res.json(todos);
  } catch (error) {
    console.error('Error fetching todos:', error);
    res.status(500).json({ message: 'Error fetching todos' });
  }
});

// Create a new todo
router.post('/', async (req, res) => {
  const newTodo = req.body;
  //console.log('routes/todos.js/router.post() - newTodo:',newTodo); 
// Inside the POST route handler
try {
  const todosCollection = db.getTodosCollection();
  const result = await todosCollection.insertOne(newTodo);
  //console.log('routes/todos.js/router.post() - create new task result:',result);
  const createdTodo = { _id: result.insertedId, ...newTodo };
  //console.log('routes/todos.js/router.post() - createdTodo',createdTodo); 
  res.status(201).json(createdTodo);
} catch (error) {
  console.error('Error creating todo:', error);
  res.status(500).json({ message: 'Error creating todo', error: error.message });
}
});
    
// Delete a todo
router.delete('/:id', async (req, res) => {
    const todoId = req.params.id;
    try {
      const todosCollection = db.getTodosCollection();
      const result = await todosCollection.deleteOne({ _id: new ObjectId(todoId) }); // Use new ObjectId
      //console.log('routes/todos.js/router.delete() result:',result);
      //console.log('routes/todos.js/router.delete() result.deletedCount:',result.deletedCount);
      if (result.deletedCount === 1) {
        res.json({ message: 'Todo deleted successfully' });
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      console.error('Error deleting todo:', error);
      res.status(500).json({ message: 'Error deleting todo' });
    }
  });

module.exports = router;






