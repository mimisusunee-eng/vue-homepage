<template>
  <section class="help-section">
    <h2 class="title">Help Center</h2>

    <div class="cards">
      <!-- BUY A HOME -->
      <div class="help-card">
        <img src="/buy-home.png" alt="Buy a home" />
        <div class="text">
          <h3>BUY A HOME</h3>
          <p>Customized solution</p>
        </div>
      </div>

      <!-- RENT A HOME -->
      <div class="help-card">
        <img src="/rent-home.png" alt="Rent a home" />
        <div class="text">
          <h3>RENT A HOME</h3>
          <p>Customized solution</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.help-section {
  padding: 60px 80px;
  max-width: 1400px;
  margin: 0 auto;

  font-family: 'Comfortaa', 'Prompt', sans-serif;
}

.title {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 24px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.help-card {
  background: #f3f6fb;
  border-radius: 16px;
  padding: 24px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.help-card img {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.text h3 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
}

.text p {
  margin: 6px 0 0;
  font-size: 13px;
  color: #6b7280;
}
</style>
