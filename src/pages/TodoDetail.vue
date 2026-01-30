<template>
  <div class="todo-detail">
    <h1>Todo Detail</h1>

    <p>
      Todo ID :
      <strong>{{ todoId }}</strong>
    </p>

    <button @click="goBack">
      ← กลับหน้า Home
    </button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const router = useRouter()

const todoId = computed(() => route.params.id)

const goBack = () => {
  router.push('/')
}
</script>

<style scoped>
.todo-detail {
  padding: 40px;
}

button {
  margin-top: 20px;
  padding: 8px 16px;
}
</style>
