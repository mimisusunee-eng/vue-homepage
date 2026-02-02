<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="not-found">
    <h1>404</h1>
    <p>ไม่พบหน้าที่คุณค้นหา</p>

    <button @click="goHome">
      กลับหน้าแรก
    </button>
  </div>
</template>

<style scoped>
.not-found {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
}

h1 {
  font-size: 96px;
  color: #004AAD;
}

p {
  font-size: 18px;
  color: #666;
}

button {
  padding: 10px 20px;
  border-radius: 999px;
  border: none;
  background: #004AAD;
  color: white;
  cursor: pointer;
}
</style>
