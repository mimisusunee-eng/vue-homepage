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
import PropertyCard from "./PropertyCard.vue";

defineProps({
  title: String,
});
</script>

<style scoped>
.section {
  padding: 60px 80px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  box-sizing: border-box; 

  font-family: "Comfortaa", "Prompt", sans-serif;
}


.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.more {
  font-size: 14px;
  color: #004aad;
  cursor: pointer;
}

.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

/* Tablet */
@media (max-width: 1023px) {
  .section {
    padding: 40px 24px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Mobile */
@media (max-width: 767px) {
  .section {
    padding: 24px 16px;
  }

  .grid {
    grid-template-columns: 1fr; 
  }
}
</style>