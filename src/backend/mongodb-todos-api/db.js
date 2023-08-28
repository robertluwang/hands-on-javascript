// db.js
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let todosCollection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('todo_app');
    todosCollection = db.collection('todos');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = {
  connectToDatabase,
  getTodosCollection: () => todosCollection, // Return the collection
};
