<template>
  <div class="card">
    <img :src="image" :alt="title" />
    <h3>{{ title }}</h3>
    <p>{{ location }}</p>
    <p>{{ price }}</p>
  </div>
</template>

<script setup>
defineProps({
  image: String,
  title: String,
  location: String,
  price: String
})
</script>

<style scoped>
.card {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
}
</style>

