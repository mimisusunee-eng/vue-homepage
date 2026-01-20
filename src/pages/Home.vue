<template>
  <div>
    <Hero />

    <section class="section">
      <h2>{{ $t('newProjects') }}</h2>

      <div class="grid">
        <PropertyCard
          v-for="item in projects"
          :key="item.id"
          v-bind="item"
        />
      </div>
    </section>

    <section class="help">
      <h2>{{ $t('helpCenter') }}</h2>
      <div class="help-box">
        <div>{{ $t('buyHome') }}</div>
        <div>{{ $t('rentHome') }}</div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import PropertyCard from '../components/PropertyCard.vue'

const projects = [
  {
    id: 1,
    image: '/house.jpg',
    title: 'Lumpini Jomtien',
    location: 'Pattaya',
    price: '฿875,554'
  },
  {
    id: 2,
    image: '/house.jpg',
    title: 'Lumpini Jomtien',
    location: 'Pattaya',
    price: '฿875,554'
  }
   {
    id: 3,
    image: '/house.jpg',
    title: 'Cha Xiao mimi',
    location: 'Mae Sai',
    price: '฿999,999,999,999,999,999,999,999'
  }
   {
    id: 4,
    image: '/house.jpg',
    title: 'ชาแมวเดก',
    location: 'เดกแม่สาย',
    price: '฿999,999,999,999,999,999,999,999'
  }
]
</script>

<style scoped>
.section {
  padding: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 20px;
}
.help {
  padding: 40px;
}
.help-box {
  display: flex;
  gap: 20px;
}
</style>
