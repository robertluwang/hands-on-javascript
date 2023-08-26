# JavaScript Frontend Stack Overview: Building Dynamic Web Applications

## Introduction

In the world of web development, JavaScript stands as a cornerstone for creating interactive and dynamic frontend experiences. In this article, we'll take a journey through the main components of the JavaScript frontend stack, exploring key concepts and providing simple code examples for each technology.

## 1. HTML, CSS, and JavaScript: The Trio of Web Development

At the heart of every web page lies HTML (HyperText Markup Language) for structure, CSS (Cascading Style Sheets) for presentation, and JavaScript for interactivity. These three work harmoniously to give websites their look, feel, and functionality.

## 2. DOM Manipulation with Vanilla JavaScript

JavaScript's power shines through its ability to manipulate the Document Object Model (DOM). Consider a simple scenario where you want to dynamically create an element and add it to a page:

dom-hello.html
```html
<div id="app">
  <!-- New content will be added here -->
</div>

<script>
  const appDiv = document.getElementById('app');
  const newElement = document.createElement('p');
  newElement.textContent = 'Hello, DOM World!';
  appDiv.appendChild(newElement);
</script>
```
run demo:
- Open the HTML file dom-hello.html in a web browser

## 3. React: Component-Based UI

React, a popular JavaScript library, takes frontend development to the next level with its component-based architecture. It lets developers build UIs by breaking them into reusable components. 

- Install Node.js and npm

If you don't have Node.js and npm installed, you'll need to download and install them from the official Node.js website: https://nodejs.org/

- Create a New React App
```
npx create-react-app hello-react
cd hello-react
```
- Run default demo
```
npm start
```
- Replace App Content
replace App.js then reload page

src/App.js
```
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello, React World!</h1>
    </div>
  );
}

export default App;
```

## 4. Angular: Full-Fledged Framework

Angular goes beyond being just a library; it's a complete framework for building robust single-page applications. 

- Install Node.js and npm
make sure node.js and npm already installed

- Install Angular CLI
```
npm install -g @angular/cli
```
- Create a New Angular App
```
ng new hello-angular
cd hello-angular
```
- Run default demo 
```
ng serve
```
- Replace App Content

src/app/app.component.html
```
<h1>Hello, Angular World!</h1>
```
run demo again after stop previous job by ctrl-c, 
```
ng serve
```

## 5. Vue.js: Approachable and Versatile

Vue.js strikes a balance between simplicity and power, making it a great choice for beginners and experienced developers alike. 

- Install Node.js and npm
Make sure node.js and npm installed

- Install Vue 
```
npm install -g @vue/cli
```
- Create a New Vue.js Project
```
vue create hello-vue
```
- Run default demo
```
cd hello-vue
npm run serve
```
- Replace App content

src/components/HelloWorld.vue
```
<template>
  <div class="hello">
    <h1>Hello, Vue World!</h1>
  </div>
</template>
```
src/App.vue
```
<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  components: {
    HelloWorld
  }
};
</script>
```
- Run Hello Vue World, 
```
npm run serve
```
If Hello world demo is not enough to demo powerful of Javascript frontend stack, let's go further to build Todo List app using React and Vue.

## 6. Build Todo List app using React 

- Create a new directory for your project
```
mkdir react-todo-app
cd react-todo-app
```

- Initialize a new project and install React
```
npm init -y
npm install react react-dom
```
- Create `index.js` under `src` folder

src/index.js
```
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
```
- Create `App.js` under `src` folder:

```
// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo('');
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <div className="add-todo">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(index)}
          />
          <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
          <button onClick={() => deleteTodo(index)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default App;
```
- Create `index.css` under `src` folder
```css
/* src/index.css */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f0f0f0;
}

.app {
  text-align: center;
  margin-top: 50px;
}

.add-todo {
  margin: 20px 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: 10px;
}
```

- Run the App

1. Make sure you're in the root directory of your project.

2. Run the following command to start your React app:
```sh
npm start
```

- Open a web browser and navigate to `http://localhost:3000` to see the "Todo List" app in action.

## 7. Build Todo List app using Vue.js 

- Make sure node.js and npm installed
- Run the following command to create a new Vue.js app:
```
vue create vue-todo-app
cd vue-todo-app
```
- Replace the contents of `src/App.vue` with the following code:

src/App.vue
```
<template>
  <div class="app">
    <h1>Vue.js Todo List</h1>
    <div class="add-todo">
      <input type="text" v-model="newTodo" @keyup.enter="addTodo" placeholder="Enter a new task" />
      <button @click="addTodo">Add</button>
    </div>
    <div class="todo-item" v-for="(todo, index) in todos" :key="index">
      <input type="checkbox" v-model="todo.completed" />
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
      <button @click="deleteTodo(index)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      newTodo: ''
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== '') {
        this.todos.push({ text: this.newTodo, completed: false });
        this.newTodo = '';
      }
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style>
.app {
  text-align: center;
  margin-top: 50px;
}

.add-todo {
  margin: 20px 0;
}

.todo-item {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.completed {
  text-decoration: line-through;
}

button {
  margin-left: 10px;
}
</style>
```
- run vue app
```sh
npm run serve
```
- Open a web browser and navigate to the URL displayed in the terminal (usually `http://localhost:8080`) to see the "Todo List" app in action.

## 8. Conclusion

JavaScript empowers frontend development by allowing us to create engaging and dynamic web experiences. Whether you're manipulating the DOM, building component-based UIs with React, exploring the full capabilities of Angular, or embracing Vue.js's versatility, the JavaScript frontend stack offers a spectrum of tools to shape the digital world we interact with every day.