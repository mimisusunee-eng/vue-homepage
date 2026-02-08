<template>
  <section class="section list">
    <div class="list_title_box">
      <div class="list_title">{{ title }}</div>

      <div class="list_more">
        <span>more</span>
        <div class="more_icon">
          <img src="/arrow1.svg" />
        </div>
      </div>
    </div>

    <div class="list_ul" v-if="list.length">
      <PropertyCard
        v-for="item in list"
        :key="item.post_id || item.id"
        :item="item"
      />
    </div>
  </section>
</template>

<script setup>
import PropertyCard from "./PropertyCard.vue"

defineProps({
  title: String,
  list: { type: Array, default: () => [] }
})
</script>

<style>
/* NO scoped */
.section {
  padding: 60px 80px;
  max-width: 1400px;
  margin: 0 auto;
}
</style>


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

/* Ipad */
@media (max-width: 1023px) {
  .section {
    padding: 36px 24px 24px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* iPhone */
@media (max-width: 767px) {

  .section-header {
    align-items: center; 
  }

  .section-header h2 {
    font-size: 22px;
    line-height: 1.2;
    margin: 0;
  }

  .more {
    line-height: 1;
    margin-top: 2px; 
  }

  .more img {
    width: 14px;
  }

  .section {
    padding: 32px 16px 20px;
  }

  .section-header h2 {
    font-size: 20px;
    line-height: 1.2;
  }
}

</style>