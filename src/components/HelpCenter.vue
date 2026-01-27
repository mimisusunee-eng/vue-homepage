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
  color: #171E2D;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 39px */
  text-transform: uppercase;
}

.cards {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}

.help-card {
  background: #F1F4F9;
  border-radius: 16px;
  padding: 0px 5px;
  display: flex;
  align-items: center;
  gap: 20px;
}

.help-card img {
  width: 164px;
  height: 218.667px;
  object-fit: contain;
}

.text h3 {
  color: #171E2D;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 39px */
  text-transform: uppercase;
}

.text p {
  margin: 6px 0 0;
  font-size: 14px;
  color: #4B4F58;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
}


/* Tablet */
@media (max-width: 1023px) {
  :deep(.help-section) {
    padding: 40px 24px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  :deep(.help-section) {
    padding: 32px 16px;
  }
}

  .cards {
    grid-template-columns: 1fr;
  }

  .help-card {
    flex-direction: column;
    text-align: center;
  }

</style>