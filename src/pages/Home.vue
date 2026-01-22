<template>
  <div>
    <Hero />

    <PropertySection :title="$t('NewProjects')" />
    <PropertySection :title="$t('Handpicked properties')" />
    <PropertySection :title="$t('Rent a House')" />

    <HelpCenter />
  </div>
</template>

<script setup>
import Hero from '../components/Hero.vue'
import PropertySection from '../components/PropertySection.vue'
import HelpCenter from '../components/HelpCenter.vue'
</script>


<style scoped>
/* iPad */
@media (max-width: 1023px) {
  :deep(.property-section) {
    padding: 32px 0;
  }
}

/* Mobile */
@media (max-width: 767px) {
  :deep(.property-section) {
    padding: 24px 0;
  }
}

</style>