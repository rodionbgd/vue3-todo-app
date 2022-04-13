<template>
  <section class="todoapp">
    <TodoInput @add-todo="addTodo" />
    <section class="main">
      <input
        id="toggle-all"
        class="toggle-all"
        type="checkbox"
        @input="toggleAll"
      />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <TodoItem
          v-for="todo in filteredTodos"
          :key="todo.id"
          :todo="todo"
          @toggle-todo="toggleTodo"
          @remove-todo="removeTodo"
        />
      </ul>
    </section>
    <TodoFooter
      :todos="data.todos"
      @filter-todos="updateFilter"
      @clear-completed="clearCompleted"
    />
  </section>
</template>

<script setup>
import TodoItem from "@/components/todo/TodoItem.vue";
import TodoInput from "@/components/todo/TodoInput.vue";
import TodoFooter from "@/components/todo/TodoFooter.vue";
import { computed, reactive } from "vue";

const data = reactive({
  todos: [
    {
      id: 1,
      todo: "shopping",
      completed: false,
    },
    {
      id: 2,
      todo: "relaxing",
      completed: false,
    },
    {
      id: 3,
      todo: "training",
      completed: false,
    },
  ],
  filter: "",
  lastId: 3,
  toggleAll: false,
});

const getTodoById = (id) => {
  return data.todos.find((todo) => todo.id === id);
};
const toggleTodo = (todo) => {
  const todoToUpdate = getTodoById(todo.id);
  todoToUpdate.completed = !todoToUpdate.completed;
};

const toggleAll = () => {
  data.toggleAll = !data.toggleAll;
  data.todos.forEach((todo) => (todo.completed = data.toggleAll));
};

const filteredTodos = computed(() => {
  switch (data.filter) {
    case "":
    case "all":
      return [...data.todos];
    case "active":
      return [...data.todos].filter((todo) => !todo.completed);
    case "completed":
      return [...data.todos].filter((todo) => todo.completed);
    default:
      return [];
  }
});
const updateFilter = (type) => {
  data.filter = type;
};

const clearCompleted = () => {
  const filter = data.filter;
  data.filter = "active";
  data.todos = [...filteredTodos.value];
  data.filter = filter;
};
const addTodo = (todo) => {
  data.lastId++;
  const todoObj = {
    id: data.lastId,
    todo,
    completed: false,
  };
  data.todos = [...data.todos, todoObj];
};
const removeTodo = (todo) => {
  data.todos = data.todos.filter((t) => t.id !== todo.id);
};
</script>
