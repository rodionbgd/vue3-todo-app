<script setup>
defineProps(['left'])
</script>

<template>
  <footer class="footer">
    <span class="todo-count"> <strong>{{ left }}</strong> left </span>
    <ul class="filters">
      <li>
        <a href="#/all">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="$emit('clear-completed')">Clear completed</button>
  </footer>
</template>