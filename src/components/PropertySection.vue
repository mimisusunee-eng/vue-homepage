<template>
  <section class="section">
    <div class="section-header">
      <h2>{{ title }}</h2>
      <span class="more">more →</span>
    </div>

    <div class="grid">
      <PropertyCard v-for="n in 8" :key="n" />
    </div>
  </section>
</template>

<script setup>
import PropertyCard from './PropertyCard.vue'

defineProps({
  title: String
})
</script>

<style scoped>
.section {
  padding: 60px 80px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.more {
  font-size: 14px;
  color: #3b82f6;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
</style>
