<template>
  <footer class="footer">
    <span class="todo-count">
      <strong>{{ todosLeft }}</strong> left
    </span>
    <ul class="filters">
      <li
        v-for="(filter, index) in data.filters"
        :key="index"
        @click="filterTodos(filter)"
      >
        <a :href="`#${filter}`">{{ filter }}</a>
      </li>
    </ul>
    <button class="clear-completed" @click="clearCompleted">
      Clear completed
    </button>
  </footer>
</template>

<script setup>
import { computed, reactive } from "vue";

const props = defineProps({
  todos: {
    type: Array,
    required: true,
  },
});

const events = defineEmits({
  "filter-todos": null,
  "clear-completed": null,
});
const data = reactive({
  filters: ["all", "active", "completed"],
});

const filterTodos = (type) => {
  events("filter-todos", type);
};

const clearCompleted = () => {
  events("clear-completed");
};
const todosNotCompleted = computed(() =>
  [...props.todos].filter((todo) => !todo.completed)
);
const todosLeft = computed(() => {
  return todosNotCompleted.value?.length;
});
</script>
