<script setup>
import { onMounted, ref, computed } from 'vue'

import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'

import { getHouseList } from '@/api/home'


const loading = ref(true)
const newProjects = ref([])

onMounted(async () => {
  try {
    const res = await getHouseList()

    const list = res?.data?.data || []
    newProjects.value = Array.isArray(list) ? list : []

    console.log('house list', newProjects.value)
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})



const newProjects8 = computed(() =>
  Array.isArray(newProjects.value)
    ? newProjects.value.slice(0, 8)
    : []
)

const handpickedProjects8 = computed(() =>
  Array.isArray(newProjects.value)
    ? newProjects.value.slice(0, 8)
    : []
)

const rentHouses8 = computed(() =>
  Array.isArray(newProjects.value)
    ? newProjects.value.slice(0, 8)
    : []
)


</script>


<template>
  <div class="home">

    <Hero />

    <PropertySection
      title="New Projects"
      :list="newProjects8"
    />

    <PropertySection
      title="Handpicked properties"
      :list="handpickedProjects8"
    />

    <PropertySection
      title="Rent a house"
      :list="rentHouses8"
    />

    <HelpCenter />

  </div>
</template>
