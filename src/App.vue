<script setup>
import TodoItem from './components/Todo/TodoItem.vue'
import TodoHeader from './components/Todo/TodoHeader.vue'
import TodoFooter from './components/Todo/TodoFooter.vue'
import AppFooter from './components/Todo/AppFooter.vue'
import { computed, reactive } from 'vue';

const data = reactive({
  tasks: [
    {
      id: 1,
      text: 'first task',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'second task',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'third task',
      isCompleted: false,
    }
  ]
})

const left = computed(() => data.tasks.filter(t => !t.isCompleted).length)

function setIsActive(taskId, isCompleted) {
  let task = data.tasks.find(t => t.id === taskId);
  task.isCompleted = isCompleted;
}

function setText(taskId, text) {
  let task = data.tasks.find(t => t.id === taskId);
  task.text = text;
}

function clearCompleted() {
  data.tasks = data.tasks.filter(t => !t.isCompleted)
}

</script>

<template>
  <div class="todo">
    <section class="todoapp">
      <TodoHeader></TodoHeader>
      <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox"/>
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
          <TodoItem v-for="task in data.tasks" :key="task.id"
                    @set-is-completed="setIsActive"
                    @set-text="setText"
                    :task="task"></TodoItem>
        </ul>
      </section>
      <TodoFooter @clear-completed="clearCompleted" :left="left"></TodoFooter>
    </section>
    <AppFooter></AppFooter>
  </div>
</template>