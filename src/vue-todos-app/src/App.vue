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
