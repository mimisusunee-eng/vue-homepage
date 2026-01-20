<template>
  <div class="card">
    <div class="badge">Condo</div>

    <img src="/house.png" />

    <div class="body">
      <h3>Lumpini Jomtien</h3>
      <p class="location">Jomtien 2nd Road, Muang</p>

      <div class="info">
        <span>🛏 4</span>
        <span>🛁 2</span>
        <span>📐 457㎡</span>
        <span>📍 Pattaya</span>
      </div>

      <p class="price">฿87554</p>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  background: #fff; /* พื้นหลัง */
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(253, 0, 0, 0.08);

  font-family: 'Comfortaa', 'Prompt', sans-serif;
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.badge {
  position: absolute;
  top: 10px;
  left: 10px;
  background: #2563eb;
  color: #fff;
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 12px;
}

.body {
  padding: 15px;
}

.location {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 10px;
}

.info {
  font-size: 12px;
  color: #6b7280;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 10px;
}

.price {
  color: #ef4444;
  font-weight: bold;
}
</style>
