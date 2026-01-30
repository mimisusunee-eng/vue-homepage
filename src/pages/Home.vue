<template>
  <div>
    <Hero />

    <PropertySection :title="$t('newProjects')" />
    <PropertySection :title="$t('handpickedProperties')" />
    <PropertySection :title="$t('rentAHouse')" />

    <HelpCenter />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'   
import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'
import { useTodoStore } from '@/store/todo'

const todoStore = useTodoStore()

onMounted(() => {
  todoStore.fetchTodos()
})
</script>




<style scoped>
.box {
  margin: 12px 0;
  padding: 12px;
  background: #f2f4ff;
  border-radius: 8px;
}
</style>
