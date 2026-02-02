<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getPropertyDetail } from '@/api/home'
import BaseLoading from '@/components/BaseLoading.vue'

const route = useRoute()
const router = useRouter()

const property = ref(null)
const loading = ref(true)
const notFound = ref(false)

onMounted(async () => {
  try {
    const res = await getPropertyDetail(route.params.id)
    if (!res) {
      notFound.value = true
    } else {
      property.value = res
    }
  } finally {
    loading.value = false
  }
})

const goHome = () => {
  router.push('/')
}
</script>

<template>
  <div class="detail">

    <BaseLoading v-if="loading" />

    <div v-else-if="notFound" class="not-found">
      <h1>ไม่พบข้อมูล</h1>
      <p>Property นี้อาจถูกลบ หรือไม่มีอยู่</p>

      <button @click="goHome">
        กลับหน้าแรก
      </button>
    </div>

    <div v-else>
      <h1>{{ property.title }}</h1>
      <p>{{ property.body }}</p>
    </div>

  </div>
</template>


<style scoped>
.not-found {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  text-align: center;
}

.not-found h1 {
  font-size: 28px;
  color: #004AAD;
}

.not-found p {
  color: #666;
}

.not-found button {
  padding: 10px 20px;
  border-radius: 999px;
  border: none;
  background: #004AAD;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

.not-found button:hover {
  opacity: 0.9;
}
</style>


