<template>
  <section class="section">
    <h2>Recommended Properties</h2>

    <div class="grid">
      <PropertyCard v-for="n in 8" :key="n" />
    </div>
  </section>
</template>

<script setup>
import PropertyCard from './PropertyCard.vue'
</script>

<style scoped>
.section {
  padding: 60px 80px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

</style>
