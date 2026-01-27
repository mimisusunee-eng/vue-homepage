<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>


<script setup>
import Header from './components/Header.vue'
import Home from './pages/Home.vue'
import Footer from './components/Footer.vue'
import PropertySection from './components/PropertySection.vue'

</script>

<style>
  html, body {
  margin: 0;
  padding: 0;
}

#app {
  overflow-x: hidden;
}


*, *::before, *::after {
  box-sizing: border-box;
}

</style>