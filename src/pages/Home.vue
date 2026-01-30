<script setup>
import { onMounted, ref, computed } from 'vue'
import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'
import { getNewProjects, getHandpickedProjects } from '../api/home'

const newProjects = ref([])

const newProjects8 = computed(() =>
  newProjects.value.slice(0, 8)
)

onMounted(async () => {
  newProjects.value = await getNewProjects()
})
</script>

<template>
  <PropertySection
    title="New Projects"
    :list="newProjects8"
  />
</template>
