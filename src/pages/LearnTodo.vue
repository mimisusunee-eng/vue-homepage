<template>
  <div class="page">
    <h1>📘 Learn: Todo + Axios + Pinia</h1>

    <div
      v-for="todo in todos"
      :key="todo.id"
      class="box"
    >
      <router-link :to="`/todo/${todo.id}`">
        {{ todo.title }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useTodoStore } from '@/store/todo'

const todoStore = useTodoStore()
const todos = computed(() => todoStore.todos)

onMounted(() => {
  todoStore.fetchTodos()
})
</script>

<style scoped>
.page {
  padding: 40px;
}

.box {
  margin: 12px 0;
  padding: 12px;
  background: #f2f4ff;
  border-radius: 8px;
}
</style>
