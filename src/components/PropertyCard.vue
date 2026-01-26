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
        <img src="/gps.svg" alt="location" />
        <span class="text">Jomtiensaineung Rd, Muang</span>
      </div>

      <div class="meta">
  <span class="meta-item">
    <img src="/bed.svg" class="meta" />
    4
  </span>

  <span class="meta-item">
    <img src="/shower.svg" class="meta" />
    2
  </span>

  <span class="meta-item">
    <img src="/land.svg" class="meta" />
    457m²
  </span>

  <span>Pattaya</span>
</div>

      <div class="price">฿87554</div>
    </div>
  </div>
</template>


<script setup>
</script>


<style lang="scss" scoped>
.card {
  background: #F1F4F9;
  transition: all 0.3s ease;

  &:hover {
    background: #ffffff;
    transform: translateY(-4px);
  }
}
</style>

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

.tag {
  position: absolute;
  top: 22px;
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
  bottom: 16px;
  right: 8px;
  font-size: 12px;
  font-weight: 500;
  color: #ffffff;
  opacity: 0.95;
}

/* CONTENT */
.content {
  padding: 16px 18px 18px;
}

.title {
  font-size: 16px;
  font-weight: 500;
  color: #262626;
  margin-bottom: 10px;
}

.location {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: #7F7F7F;
  margin-bottom: 12px;
  margin-top: 28px;   
  font-weight: 400;
  left: 28px;
  top: 249px;
}

.location .icon {
  font-size: 14px;
}

/* ได้แล้วสัสเอ้ย */
.meta {
  display: flex;
  align-items: center;
  gap: 14px;
  font-size: 14px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-top: 10px;
}

.meta-item img {
  width: 14px;
  height: 14px;
  left: 33px;
  top: 291px;
}

.price {
  font-size: 18px;
  font-weight: 400;
  color: #FF3E55;
  width: 158.66px;
  height: 31.43px;
  margin-top: 10px;        
  padding-left: 10.46px;  
  padding-top: 10.57px;
  box-sizing: border-box;
  margin-left: -10.46px;
}

/* Mobile */
@media (max-width: 767px) {
  .card img {
    height: 180px;
  }
}

</style>