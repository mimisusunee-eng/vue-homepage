<template>
  <div>
    <Hero />

    <PropertySection :title="$t('newProjects')" />
    <PropertySection :title="$t('handpickedProperties')" />
    <PropertySection :title="$t('rentHouse')" />

    <HelpCenter />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'
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
