<script setup>
import { onMounted, ref, computed } from 'vue'
import { useHead } from '@vueuse/head'

import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'

import {
  getNewProjects,
  getHandpickedProjects,
  getRentHouses
} from '../api/home'

useHead({
  title: 'Big Housekeeper | บ้าน คอนโด ที่ดิน ทำเลดี',
  meta: [
    {
      name: 'description',
      content: 'รวมบ้าน คอนโด และที่ดินคุณภาพดี ทำเลสวย ราคาน่าอยู่'
    }
  ]
})

const loading = ref(true)

const newProjects = ref([])
const handpickedProjects = ref([])
const rentHouses = ref([])

const newProjects8 = computed(() =>
  Array.isArray(newProjects.value)
    ? newProjects.value.slice(0, 8)
    : []
)

const handpickedProjects8 = computed(() =>
  Array.isArray(handpickedProjects.value)
    ? handpickedProjects.value.slice(0, 8)
    : []
)

const rentHouses8 = computed(() =>
  Array.isArray(rentHouses.value)
    ? rentHouses.value.slice(0, 8)
    : []
)


onMounted(async () => {
  try {
    const [newRes, handpickedRes, rentRes] = await Promise.all([
      getNewProjects(),
      getHandpickedProjects(),
      getRentHouses()
    ])

    newProjects.value = Array.isArray(newRes) ? newRes : []
    handpickedProjects.value = Array.isArray(handpickedRes) ? handpickedRes : []
    rentHouses.value = Array.isArray(rentRes) ? rentRes : []

    console.log('newProjects', newProjects.value)
  } catch (err) {
    console.error(err)
  } finally {
    loading.value = false
  }
})


</script>

<template>
  <div class="home">
    <Hero />

    <PropertySection
      title="New Projects"
      :loading="loading"
      :list="newProjects8"
    />

    <PropertySection
      title="Handpicked properties"
      :loading="loading"
      :list="handpickedProjects8"
    />

    <PropertySection
      title="Rent a house"
      :loading="loading"
      :list="rentHouses8"
    />

    <HelpCenter />
  </div>
</template>
