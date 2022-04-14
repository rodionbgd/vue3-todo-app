<template>
  <li class="todo" :class="{ editing: isEdit }">
    <div class="view" v-show="!isEdit">
      <input
        class="toggle"
        type="checkbox"
        @input="toggleTodo"
        :checked="todo.completed"
      />
      <label @dblclick="startEdit">{{ props.todo.todo }}</label>
      <button class="destroy" @click="removeTodo"></button>
    </div>
    <input
      v-show="isEdit"
      class="edit"
      type="text"
      ref="input"
      :value="modelValue"
      @input="updateTodo"
      @keyup.enter="endEdit"
    />
  </li>
</template>

<script setup>
import { nextTick, ref } from "vue";

const props = defineProps({
  todo: {
    type: Object,
    required: true,
    default: () => ({
      id: 0,
      todo: "",
      completed: false,
    }),
  },
  modelValue: {
    type: String,
  },
});

const isEdit = ref(false);
const input = ref(null);
const events = defineEmits({
  "toggle-todo": null,
  "remove-todo": null,
  "update:modelValue": null,
});

const toggleTodo = () => {
  events("toggle-todo", props.todo);
};

const removeTodo = () => {
  events("remove-todo", props.todo);
};

const startEdit = () => {
  isEdit.value = true;
  nextTick(() => {
    input.value.focus();
  });
};
const updateTodo = (event) => {
  events("update:modelValue", event.target.value);
};
const endEdit = () => {
  if (!props.todo.todo) {
    removeTodo();
  }
  isEdit.value = false;
};
</script>
