<template>
  <div class="card">
    <!-- Image zone -->
    <div class="image-wrap">
      <img src="/house.png" alt="property" />

      
      <span class="tag">apartment</span>
      <span class="code">NO.M875990</span>
    </div>

    <!-- Content -->
    <div class="content">
      <h3 class="title">Lumpini Jomtien</h3>

      <div class="location">
        <span class="icon">📍</span>
        <span class="text">Jomtiensaineung Rd, Muang</span>
      </div>

      <div class="meta">
        <span>🛏 4</span>
        <span>🛁 2</span>
        <span>📐 457m²</span>
        <span>Pattaya</span>
      </div>

      <div class="price">฿87554</div>
    </div>
  </div>
</template>


<script setup>
</script>

<style scoped>
.card {
  background: #F1F4F9; /* พื้นหลัง */
  border-radius: 12px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 4px 12px rgba(253, 0, 0, 0.08);

  font-family: 'Comfortaa', 'Prompt', sans-serif;

  max-width: 100%;

}

.property-card {
  width: 100%;
  max-width: 340px;
  background: #ffffff;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.08);
}

/* IMAGE */
.image-wrap {
  position: relative;
  height: 200px;
}

.image-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* TAG */
.tag {
  position: absolute;
  top: 14px;
  left: 14px;
  background: #004AAD;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  padding: 4px 14px;
  border-radius: 999px;
  letter-spacing: 0.2px;
}

/* CODE อีนี่ด้วย*/
.code {
  position: absolute;
  bottom: 12px;
  right: 14px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.95;
}

/* CONTENT */
.content {
  padding: 16px 18px 18px;
}

/* TITLE */
.title {
  font-size: 16px;
  font-weight: 500;
  color: #262626;
  margin-bottom: 6px;
}

/* LOCATION */
.location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #7F7F7F;
  margin-bottom: 12px;
}

.location .icon {
  font-size: 14px;
}

/* META INFO ทำไมแก้แล้วไม่เปลี่ยนวะ */
.meta { 
  display: flex;  
  align-items: center;
  gap: 14px;
  font-size: 14px;
  font-weight:500;
  color: #4B5053;
  margin-bottom: 14px;
}

/* PRICE */
.price {
  font-size: 18px;
  font-weight: 400;
  color: #FF3E55;
  letter-spacing: 0.3px;
}

/* Mobile */
@media (max-width: 767px) {
  .card img {
    height: 180px;
  }
}

</style>