<script setup>
import { ref, onMounted, computed } from 'vue'
import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'
import { GetRentHouseList } from '@/api/home'

const list = ref([])
console.log('UI LIST:', list.value)

onMounted(async () => {
  const res = await GetRentHouseList({})

  console.log('🔥 FULL RES 👉', res)

  if (res?.success && Array.isArray(res.data?.list)) {
    list.value = res.data.list.map(item => ({
      id: item.house_id,
      title: item.house_name,
      price: item.house_price,
      location: item.city_name,
      image: item.cover_img,
      bedroom: item.bedroom,
      bathroom: item.bathroom,
      area: item.area,
      type: item.house_type,
    }))
  }
})



const newProjects8 = computed(() => list.value.slice(0, 8))
const handpickedProjects8 = computed(() => list.value.slice(0, 8))
const rentHouses8 = computed(() => list.value.slice(0, 8))
</script>

<template>
  <div class="home">
    <Hero />

    <PropertySection title="New Projects" :list="newProjects8" />
    <PropertySection title="Handpicked properties" :list="handpickedProjects8" />
    <PropertySection title="Rent a house" :list="rentHouses8" />

    <HelpCenter />
  </div>
</template>
