<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { GetHouseDetail } from '@/api/home'

const route = useRoute()
const loading = ref(true)
const detail = ref(null)
const notFound = ref(false)

onMounted(async () => {
  try {
    const res = await GetHouseDetail(route.params.id)

    if (!res?.success || !res?.data) {
      notFound.value = true
    } else {
      detail.value = res.data
    }
  } catch (e) {
    notFound.value = true
  } finally {
    loading.value = false
  }
})
</script>


<template>
  <BaseLoading v-if="loading" />

  <div v-else-if="notFound">
    <h2>ไม่พบข้อมูล</h2>
  </div>

  <div v-else class="detail">
    <h1>{{ detail.title }}</h1>
    <p>ราคา {{ detail.price }}</p>
    <p>พื้นที่ {{ detail.area }} ตร.ม.</p>
  </div>
</template>
