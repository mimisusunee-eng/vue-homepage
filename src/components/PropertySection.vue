<template>
  <section class="section">
    <h2>Recommended Properties</h2>

    <div class="grid">
      <PropertyCard />
      <PropertyCard />
      <PropertyCard />
    </div>
  </section>
</template>

<script setup>
import PropertyCard from './PropertyCard.vue'
</script>

<style scoped>
.section {
  padding: 60px;
}

h2 {
  margin-bottom: 24px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}
</style>
