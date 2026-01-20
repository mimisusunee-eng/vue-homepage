<template>
  <div class="card">
    <img src="/house.jpg" />
    <div class="info">
      <h3>Luxury Villa</h3>
      <p>Bangkok, Thailand</p>
      <span>฿12,000,000</span>
    </div>
  </div>
</template>

<style scoped>
.card {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.info {
  padding: 14px;
}

span {
  font-weight: bold;
  color: #140858;
}
</style>
