<template>
  <div class="child">
    <h1 @click="() => $emit('change-text', '123')">{{ data }}</h1>
    <h2>{{ state.text }}</h2>
  </div>
</template>

<style scoped src="./MyText.css">
</style>

<script setup>
import { computed, reactive, ref } from 'vue';

const props = defineProps({
  text1: [String, Number]
})

// const data = ref(props.text1)

const data = computed(() => props.text1 + '!!!')

const state = reactive({
  text: 'it is my text',
})

const text = ref('my second text')
</script>

<script>
export default {
  //inheritAttrs: false,
}
</script>