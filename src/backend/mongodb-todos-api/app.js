// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./db'); // Import the db module

app.use(bodyParser.json());

// Call the connectToDatabase function before starting the server
db.connectToDatabase();

const todosRouter = require('./routes/todos');
app.use('/todos', todosRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

