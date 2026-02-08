<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import MainLayout from './layouts/MainLayout.vue'
import AuthLayout from './layouts/AuthLayout.vue'

import '@/styles/reset.scss'
import '@/styles/listCard.scss'
import '@/styles/detailCommon.scss'



const route = useRoute()

const layout = computed(() => {
  return route.meta.layout === 'auth'
    ? AuthLayout
    : MainLayout
})
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
}

*, *::before, *::after {
  box-sizing: border-box;
}
</style>
