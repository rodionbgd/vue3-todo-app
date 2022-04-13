<template>
  <header class="header">
    <h1>todos</h1>
    <input
      class="new-todo"
      autofocus
      autocomplete="off"
      placeholder="What needs to be done?"
      v-model="todo"
      @keyup.enter="addTodo"
    />
  </header>
</template>

<script setup>
import { ref } from "vue";

const todo = ref("");
const events = defineEmits({
  "add-todo": null,
});
const addTodo = () => {
  if (!todo.value) {
    return;
  }
  events("add-todo", todo.value);
  todo.value = "";
};
</script>
