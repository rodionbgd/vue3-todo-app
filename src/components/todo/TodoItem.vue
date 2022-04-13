<template>
  <li class="todo">
    <div class="view">
      <input
        class="toggle"
        type="checkbox"
        @input="toggleTodo"
        :checked="todo.completed"
      />
      <label>{{ props.todo.todo }}</label>
      <button class="destroy" @click="removeTodo"></button>
    </div>
    <input class="edit" type="text" />
  </li>
</template>

<script setup>
const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => {},
  },
});

const events = defineEmits({
  "toggle-todo": null,
  "remove-todo": null,
});

const toggleTodo = () => {
  events("toggle-todo", props.todo);
};

const removeTodo = () => {
  events("remove-todo", props.todo);
};
</script>
