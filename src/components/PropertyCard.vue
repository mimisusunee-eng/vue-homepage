<template>
  <div class="card">
    <img :src="image" alt="house.png" />

    <div class="info">
      <h3>{{ title }}</h3>
      <p>{{ location }}</p>
      <span>{{ price }}</span>
    </div>
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
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  background: white;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.info {
  padding: 14px;
}

.info h3 {
  margin: 0 0 6px;
  font-size: 16px;
}

.info p {
  margin: 0 0 8px;
  color: #666;
  font-size: 14px;
}

.info span {
  font-weight: bold;
  color: #FF3E55;
}
</style>
