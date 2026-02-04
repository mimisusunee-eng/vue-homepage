<template>
  <div>
    <Header />

    <Suspense>
      <template #default>
        <RouterView />
      </template>

      <template #fallback>
        <div style="padding: 40px; text-align: center;">
          Loading...
        </div>
      </template>
    </Suspense>

    <Footer />
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>
