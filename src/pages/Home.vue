<script setup>
import { onMounted, ref, computed } from 'vue'
import { useHead } from '@vueuse/head'
import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'
import { getNewProjects } from '../api/home'

useHead({
  title: 'Big Housekeeper | บ้าน คอนโด ที่ดิน ทำเลดี',
  meta: [
    {
      name: 'description',
      content: 'รวมบ้าน คอนโด และที่ดินคุณภาพดี ทำเลสวย ราคาน่าอยู่'
    },
    {
      property: 'og:title',
      content: 'Big Housekeeper'
    },
    {
      property: 'og:description',
      content: 'ค้นหาบ้าน คอนโด และที่ดิน ทำเลดีทั่วประเทศ'
    }
  ]
})

const newProjects = ref([])
const loading = ref(true)

const projects8 = computed(() =>
  newProjects.value.slice(0, 8)
)

onMounted(async () => {
  loading.value = true
  try {
    const res = await getNewProjects()
    newProjects.value = res
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
      :list="projects8"
    />

    <PropertySection
      title="Handpicked properties"
      :loading="loading"
      :list="projects8"
    />

    <PropertySection
      title="Rent a house"
      :loading="loading"
      :list="projects8"
    />

    <HelpCenter />
  </div>
</template>

