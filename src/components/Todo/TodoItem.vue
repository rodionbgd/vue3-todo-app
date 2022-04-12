<template>
  <li class="todo" :class="{ 'completed': props.task.isCompleted, 'editing': isEditing }">
    <div class="view">
      <input class="toggle" type="checkbox" :checked="task.isCompleted"
             @change="$emit('setIsCompleted', task.id, !task.isCompleted)" />
      <label @dblclick="startEditing">{{ task.text }} #{{ task.id }}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" type="text" v-model="value"
           @keyup.enter="finishEditing"
           @blur="finishEditing"
    />
  </li>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps(['task'])

const value = ref(props.task.text)
const isEditing = ref(false)

const emit = defineEmits()

function startEditing() {
  isEditing.value = true
}

function finishEditing() {
  isEditing.value = false
  emit('setText', props.task.id, value)
}
</script>