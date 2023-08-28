# Javascript Backend Overview

## Javascript backend stack highlight

JavaScript is commonly known for its use in frontend web development, but with the advent of technologies like Node.js, it's also being used for backend development. Here's an overview of JavaScript backend development:

1. **Node.js**: Node.js is a runtime environment that allows you to run JavaScript code on the server-side. It uses Google's V8 JavaScript engine and provides a vast set of built-in libraries and modules that facilitate server-side programming. This enables you to create scalable and efficient backend applications using JavaScript.

2. **Express.js**: Express.js is a popular web application framework for Node.js. It simplifies the process of building robust and scalable web applications by providing a set of features and tools for handling routes, middleware, templates, and more. Express.js is highly extensible, allowing you to integrate additional libraries and middleware as needed.

3. **Routing**: In Express.js, you define routes to handle different HTTP methods (GET, POST, PUT, DELETE, etc.) and their associated actions. This helps manage the different endpoints of your API or web application.

4. **Middleware**: Middleware functions in Express.js are functions that can be executed before the main request handler. They are used for tasks like authentication, logging, error handling, etc. Middleware plays a crucial role in structuring your application and handling cross-cutting concerns.

5. **Database Interaction**: JavaScript backend applications often need to interact with databases. Popular databases like MongoDB (NoSQL) and PostgreSQL (SQL) have Node.js drivers that allow you to perform database operations using JavaScript.

6. **Authentication and Authorization**: You can use packages like Passport.js or JSON Web Tokens (JWT) to handle user authentication and authorization, securing your backend APIs and routes.

7. **API Development**: JavaScript backends are commonly used to build RESTful APIs or GraphQL APIs, which allow clients (such as frontend applications or mobile apps) to interact with the server to retrieve or manipulate data.

8. **Real-time Communication**: Using technologies like WebSockets or libraries like Socket.IO, you can establish real-time communication between the server and clients, enabling features like instant messaging or live updates.

9. **Package Management**: Node.js uses npm (Node Package Manager) or yarn to manage and install packages and libraries that are essential for your backend development.

10. **Deployment and Hosting**: JavaScript backend applications can be deployed on various hosting platforms, including cloud services like AWS, Azure, or Heroku. Deployment tools like Docker can also be used to package and deploy applications consistently across different environments.

11. **Serverless**: Serverless architecture allows you to run code in response to events without managing server infrastructure. Platforms like AWS Lambda or Azure Functions support running Node.js functions in a serverless manner.

12. **Testing and Debugging**: Just like in frontend development, testing and debugging are crucial for backend applications. Libraries like Jest and Mocha provide testing frameworks, and debugging tools like Node Inspector help in debugging server-side code.

Remember that JavaScript's asynchronous nature is especially relevant in backend development, as many backend operations involve I/O operations like reading from a database or making API calls. As a result, you'll often work with callbacks, promises, or async/await to manage asynchronous code flow effectively.

Overall, JavaScript has become a versatile language for full-stack development, allowing developers to use the same language both on the frontend and backend to create powerful and efficient applications.

## Build ToDo List app API using Node + Express
In this example, we'll create a RESTful API that handles a list of "todos".

1. **Setup**:

First, make sure you have Node.js and npm (Node Package Manager) installed on your system.

2. **Project Setup**:

Create a new directory for your project and navigate to it in the terminal.

```
mkdir express-todos-api
cd express-todos-api
```

Initialize a new Node.js project:

```bash
npm init -y
```

Install the required packages (Express.js) using npm:

```bash
npm install express
```

3. **Creating the Backend**:

Create a file named `app.js` in your project directory.

```javascript
// app.js
const express = require('express');
const app = express();
const PORT = 3000;

// Sample data
const todos = [
  { id: 1, title: 'Walk in park' },
  { id: 2, title: 'Swimming at YMCA' },
];

// Middleware to parse JSON data
app.use(express.json());

// Route to get all todos
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Route to get a single todo by ID
app.get('/todos/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const todo = todos.find(todo => todo.id === id);
  
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: 'Todo not found' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

4. **Running the Backend**:

Run your backend server using Node.js:

```bash
node app.js
```

Your backend API should now be running on `http://localhost:3000`.

5. **Testing the API**:

You can use tools like cURL or Postman to test the API:

- To get all todos: `GET http://localhost:3000/todos`
- To get a specific todo (e.g., ID 1): `GET http://localhost:3000/todos/1`

```
curl -i http://localhost:3000/todos/ 
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 69
ETag: W/"45-JWHk5oWOEUZ7mRTmetH7/osgGY0"
Date: Mon, 28 Aug 2023 13:37:25 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"id":1,"title":"Walk in park"},{"id":2,"title":"Swimming at YMCA"}]

curl -i http://localhost:3000/todos/1
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 31
ETag: W/"1f-Kh+H5MizWJl9ONZvPHcUHa644MA"
Date: Mon, 28 Aug 2023 13:37:55 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"id":1,"title":"Walk in park"}
```
## Mongodb as external storage to ToDo List app API
1. **Setup**:

Create a new directory for your project, navigate to it, and initialize a new Node.js project.

```bash
mkdir mongodb-todos-api
cd mongodb-todos-api
npm init -y
```

Install the required packages (`express` and `mongodb`):

```bash
npm install express mongodb
```

2. **Project Structure**:

Create the following project structure:

```
mongdo-todos-app
|-- app.js
|-- db.js
|-- routes
|   |-- todos.js
```

3. **db.js**:

```javascript
// db.js
const { MongoClient } = require('mongodb');

const uri = 'YOUR_MONGODB_CONNECTION_STRING';
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
```

Replace `'YOUR_MONGODB_CONNECTION_STRING'` with your actual MongoDB connection string, it should be like `mongodb://127.0.0.1:27017` on windows, don't put `mongodb://localhost:27017` which will lead to ipv6 address by default on windows.

4. **routes/todos.js**:

```javascript
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
```

5. **app.js**:

```javascript
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
```
6. **Upload sample data tp Mongodb**
create sample data json,

sample-data.json
```
[
  { "title": "Walk in park" },
  { "title": "Swimming at YMCA" }
]
```
import from cli, 
```
mongoimport --uri "mongodb://127.0.0.1:27017" --db todo_app --collection todos --jsonArray --file sample-data.json
```
6. **Testing**:

Start your server by running:

```bash
node app.js
Server is running on port 3000
Connected to MongoDB
```
You can now use tools like `curl` or Postman to test your API endpoints as mentioned earlier. The `todosRouter` in the `app.js` file is responsible for handling the routing related to todos.

open another new terminal, 
```
curl -i http://localhost:3000/todos
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 121
ETag: W/"79-9nOBnbuhf+5tZ/P6Yj+GxB6a5bk"
Date: Mon, 28 Aug 2023 15:38:31 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"_id":"64eca57e176c74323f197276","title":"Walk in park"},{"_id":"64eca57e176c74323f197277","title":"Swimming at YMCA"}]
```
add new task and verify again,
```
C:\dclab>curl -i -X POST -H "Content-Type: application/json" -d "{\"title\": \"Coding at night\"}" http://127.0.0.1:3000/todos
HTTP/1.1 201 Created
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 60
ETag: W/"3c-j1owVDOxKQfCyRlq9ze5K/rue/Y"
Date: Mon, 28 Aug 2023 15:39:06 GMT
Connection: keep-alive
Keep-Alive: timeout=5

{"_id":"64ecbf9abbfafcf417341af0","title":"Coding at night"}
C:\dclab>curl -i http://localhost:3000/todos                                                                                   
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 182
ETag: W/"b6-3Miwz+OIjM79OFBBwDP4kYcPXck"
Date: Mon, 28 Aug 2023 15:39:12 GMT
Connection: keep-alive
Keep-Alive: timeout=5

[{"_id":"64eca57e176c74323f197276","title":"Walk in park"},{"_id":"64eca57e176c74323f197277","title":"Swimming at YMCA"},{"_id":"64ecbf9abbfafcf417341af0","title":"Coding at night"}]
```
## full-stack Todo List app
It is time to integrate frontend and backend with database to demo powerful of Javascript on web end to end solution, this is simple example of a full-stack Todo List app using React for the front-end and Express.js with MongoDB for the back-end. This example will cover setting up the front-end, back-end, and connecting them together.

Please note that this example is quite simplified and doesn't include advanced features like user authentication or deployment considerations. It's meant to demonstrate the basic structure and interaction between front-end and back-end components.

Let's start with the front-end:

1. **Front-End (React)**:

Create a new directory for your React app, navigate to it, and create the React app:

```bash
npx create-react-app fullstack-todos-app
cd fullstack-todos-app
```

In the `src` directory of your React app, replace the contents of `App.js` with the following code:

```jsx
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
```

2. **Back-End (Express.js with MongoDB)**:

Create a new directory for your back-end, navigate to it, and initialize a new Node.js project:

```bash
mkdir todos-app-backend
cd todos-app-backend
npm init -y
```

Install the required packages (`express` and `mongodb`):

```bash
npm install express mongodb
```
In the root of your back-end directory, create a file named `db.js` and add the following code:
```javascript
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let todosCollection;

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('db.js/connectToDatabase() Connected to MongoDB');

    const db = client.db('todo_app');
    todosCollection = db.collection('todos');
    //console.log('db.js/connectToDatabase() todosCollection:',todosCollection);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

module.exports = {
  connectToDatabase,
  getTodosCollection: () => todosCollection,
};
```
then create a file named `todos.js` under routes folder,
```javascript
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
```
create `server.js` and add the following code:

```javascript
// server.js
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
```
3. **Running the App**:

In separate terminals, run both the React app and the Express.js server:

For the React app:

```bash
cd fullstack-todo-app
npm start
```

For the Express.js server:

```bash
cd todo-app-backend
node server.js
```
Now, you should have the React app running at `http://localhost:3000` and the Express.js server running at `http://localhost:5000`.

The React app will fetch todos from the Express.js server's API and display them on the page.

## Troubleshoot 
- ToDo List app deleting task not work
```
Error deleting todo: TypeError: Class constructor ObjectId cannot be invoked without 'new'
    at C:\dclab\dev\javascript\javascript\Javascript hands-on\src\backend\todos-app-backend\routes\todos.js:36:59
```
solved issue by using new ObjectId,
```
 change from 
 const result = await todosCollection.deleteOne({ _id: ObjectId(todoId) });
 to 
 const result = await todosCollection.deleteOne({ _id: new ObjectId(todoId) }); // Use new ObjectId
```
- ToDo List app adding task not work
```
Error creating todo: TypeError: Cannot read properties of undefined (reading '0')
    at C:\dclab\dev\javascript\javascript\Javascript hands-on\src\backend\todos-app-backend\routes\todos.js:24:36
```
let's add more printout before ops[0] in todos.js,
```
      console.log('Result:', result);
      console.log('Result.ops:', result.ops);
      res.status(201).json(result.ops[0]);
```
then narrow down issue now,
```
Result: {
  acknowledged: true,
  insertedId: new ObjectId("64ebb927f9c8796da7c74d34")
}
Result.ops: undefined
Error creating todo: TypeError: Cannot read properties of undefined (reading '0')     
    at C:\dclab\dev\javascript\javascript\Javascript hands-on\src\backend\todos-app-backend\routes\todos.js:26:38
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5) 
```
It looks like the `insertOne` operation in MongoDB is returning an object with the property `insertedId` instead of `ops`. The `insertedId` contains the newly inserted document's ID.

Let's modify code to use `insertedId` instead of `ops`:

```javascript
router.post('/', async (req, res) => {
  const newTodo = req.body;
  try {
    const todosCollection = getTodosCollection();
    const result = await todosCollection.insertOne(newTodo);
    
    if (result.insertedCount === 1) {
      const insertedId = result.insertedId;
      const insertedTodo = await todosCollection.findOne({ _id: insertedId });
      res.status(201).json(insertedTodo);
    } else {
      res.status(500).json({ message: 'Error creating todo' });
    }
  } catch (error) {
    console.error('Error creating todo:', error);
    res.status(500).json({ message: 'Error creating todo' });
  }
});
```
- ToDo List app adding task still not work even new task already inserted to db
```
{"message":"Error creating todo: Task not inserted"}
```
found issue related to result.insertedCount,
```
result.insertedCount: undefined
```
fix issue by removing result.insertedCount as condition in add task logic, in fact this is sample of result for insertOne, there is not result.insertedCount existing, 
```
routes/todos.js/router.post() - create new task result: {
  acknowledged: true,
  insertedId: new ObjectId("64eccf6fc700cb189dbe666c")
}
```
There is result.deletedCount for deleteOne, 
```
routes/todos.js/router.delete() result: { acknowledged: true, deletedCount: 1 }
```

**good tips on debug**
- Always add console.log to debug point as much as possible to narrow down issue
- Including script path, script name and function in manually debug info
```
console.log('routes/todos.js/router.get() get all todos:',todos); 
```
- Check Network/Response in browser Developer console 


