const express = require('express');
const app = express();
const cors = require('cors');
const { connectToDatabase } = require('./db');
const todosRouter = require('./routes/todos');

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectToDatabase();

// Routes
app.use('/api/todos', todosRouter);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



