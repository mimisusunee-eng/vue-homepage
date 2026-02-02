<script setup>
import { onMounted, ref, computed } from 'vue'
import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'
import { getNewProjects } from '../api/home'

const newProjects = ref([])

const projects8 = computed(() =>
  newProjects.value.slice(0, 8)
)

onMounted(async () => {
 newProjects.value = await getNewProjects()
})
</script>

<template>
  <div class="home">
    <Hero />

    <PropertySection
      title="New Projects"
      :list="projects8"
    />

    <PropertySection
      title="Handpicked properties"
      :list="projects8"
    />

    <PropertySection
      title="Rent a house"
      :list="projects8"
    />

    <HelpCenter />
  </div>
</template>

