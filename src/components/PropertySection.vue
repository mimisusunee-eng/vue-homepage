<template>
  <section class="section">
    <div class="section-header">
      <h2>{{ title }}</h2>
      <div class="more">
        <span>more</span>
         <div class="arrow-circle"></div>
         <img src="/arrow1.svg" alt="more" />
      </div>
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

.more {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  line-height: 1;
  font-size: 16px;
  color: #53575B;
}

.arrow-circle img {
  width: 14px;
  height: 14px;
  display: block;
}

.more img {
  width: 16px;
  margin-left: -4px;
  color: #0E1218;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  color: #111B2C;
}

.section-header h2 {
  color:  #111B2C;
  font-size: 30px;
  font-weight: 700;
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
    padding: 84px 16px;
  }

  .grid {
    grid-template-columns: 1fr; 
  }
}
</style>