<template>
  <header>
    <nav>
      <div class="logo-title">
        <img src="/logo.png" alt="Logo" class="logo" />
        <h1>BIG HOUSEKEEPER</h1>
      </div>
      <div class="menu">
        <button>{{ $t('buy') }}</button>
        <button>{{ $t('Land') }}</button>
        <button>{{ $t('rent') }}</button>
        <button>{{ $t('commercial') }}</button>
        <button>{{ $t('project') }}</button>
        <button>{{ $t('homeServices') }}</button>
        <button>{{ $t('sell') }}</button>
      </div>
      <div>
        <button @click="setLocale('en')">EN</button>
        <button @click="setLocale('th')">TH</button>
        <button class="login">{{ $t('login') }}</button>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const setLocale = (newLocale) => {
  locale.value = newLocale
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600;700&display=swap');

header {
  /* background: #f0f0f0; */
  padding: 10px;
  font-family: 'Arial', sans-serif;
}
nav {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(12px, 1.2vw, 16px);
  font-weight: 200;
  line-height: 1.5;
  font-family: 'Comfortaa', sans-serif;
}
.menu {
  display: flex;
  gap: 10px;
}
.menu button {
  background: none;
  border: none;
}
.login {
  background:#004AAD;
;
  color: white;
}
.logo {
  height: 50px;
}
.logo-title {
  display: flex;
  align-items: center;
  gap: 14px;
}
h1 {
  margin: 0;
  font-size: 15px;
  font-size: clamp(12px, 1.2vw, 16px);
  font-weight: 500;
  
  font-family: 'PingFang SC', sans-serif;
}
</style>


