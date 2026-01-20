<template>
  <div>
    <!-- Hero -->
    <Hero />

    <!-- New projects -->
    <PropertySection :title="$t('newProjects')" />

    <!-- Handpicked properties -->
    <PropertySection :title="$t('handpickedProperties')" />

    <!-- Help center -->
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
import PropertySection from '../components/PropertySection.vue'
</script>

<style scoped>
.help {
  padding: 40px;
}

.help-box {
  display: flex;
  gap: 20px;
}
</style>
