<template>
  <header class="header">
    <nav class="nav">

      <!-- Logo -->
      <div class="logo-title">
        <img src="/logo.png" alt="Logo" class="logo" />
        <h1 class="brand">BIG HOUSEKEEPER</h1>
      </div>

      <!-- CENTER : Menu -->
      <div class="menu">
        <button v-for="item in menus" :key="item">
          {{ $t(item) }}
        </button>
      </div>

      <!-- RIGHT : Language + Login -->
      <div class="actions">

        <!-- Language Switcher -->
        <div class="lang-wrapper">
          <button class="lang-btn" @click="toggleLang">
            <img :src="currentLang.flag" class="flag" />
            <span>{{ currentLang.label }}</span>
            <span class="arrow">˅</span>
          </button>

          <ul v-if="langOpen" class="lang-dropdown">
            <li
              v-for="lang in languages"
              :key="lang.code"
              @click="changeLang(lang)"
            >
              <img :src="lang.flag" class="flag" />
              <span>{{ lang.label }}</span>
            </li>
          </ul>
        </div>

        <!-- Login -->
        <button class="login">
          {{ $t('login') }}
        </button>

      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const menus = [
  'Buy',
  'Land',
  'rent',
  'commercial',
  'project',
  'homeServices',
  'sell'
]

// language
const langOpen = ref(false)

const languages = [
  {
    code: 'th',
    label: 'ภาษาไทย',
    flag: '/th.svg'
  },
  {
    code: 'en',
    label: 'English',
    flag: '/en.svg'
  }
]

const currentLang = ref(languages[0])

const toggleLang = () => {
  langOpen.value = !langOpen.value
}

const changeLang = (lang) => {
  currentLang.value = lang
  locale.value = lang.code
  langOpen.value = false
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600&display=swap');

.header {
  padding: 12px 24px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Comfortaa', sans-serif;
  font-size: clamp(12px, 1.2vw, 16px);
}

/* LEFT */
.logo-title {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo {
  height: 48px;
}

.brand {
  font-weight: 600;
  margin: 0;
}

/* CENTER */
.menu {
  display: flex;
  flex: 1;                       
  justify-content: space-evenly; 
  align-items: center;
  
}


.menu button {
  background: none;
  border: none;
  cursor: pointer;
  color:#363E47;
  font-size: 16px;
  font-weight: 400;
  white-space: nowrap;   
  padding: 6px 10px;     
}


/* RIGHT */
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* ภาษา */
.lang-wrapper {
  position: relative;
  color: #4B5053;
}

.lang-btn {
  display: flex; /* ทำ */
  align-items: center;
  gap: 6px;
  font-size: 18px;
  padding: 10px 18px;   
  height: 40px;    
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  cursor: pointer;
}

.lang-btn span {
  color: #4B5053;  
  font-size: 18px;  
  font-weight: 400; 
}

.flag {
  width: 38px; /* ทำ */
  height: 25.667px;
  object-fit: cover;
}

.lang-btn .arrow { /* ลูกศร */
  font-size: 18px;
  font-weight: 7700;
  color: #363E47;
}


.lang-dropdown {
  position: absolute; /* ทำ */
  top: 110%;
  right: 0;
  background: white;
  box-shadow: 0 1px 7px 0 rgba(30, 102, 133, 0.30);
  border-radius: 20px;
  list-style: none;
  padding: 6px 0;
  min-width: 120px;
  z-index: 9999;
}

.lang-dropdown li {
  display: flex;
  align-items: center;
  color: #4B5053;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
  
}

.lang-dropdown li:hover {
  background: #f2f2f2;
  border-radius: 20px;
}

/* Login */
.login {
  padding: 8px 18px;
  background: #004AAD;
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 400;
}

/* RESPONSIVE HEADER */

/* iPad */
@media (max-width: 1023px) {
  .nav {
    font-size: 14px;
  }

  .menu {
    justify-content: center;
    gap: 8px;
  }

  .menu button {
    padding: 6px 6px;
  }

  .logo {
    height: 42px;
  }
}

/* Mobile */
@media (max-width: 767px) {
  .header {
    padding: 10px 16px;
  }

  .nav {
    justify-content: space-between;
  }

  /* Hide center menu */
  .menu {
    display: none;
  }

  .logo {
    width: 50px;
    height: 50px;  
  }

  .brand {
    width: 295px;
    height: 39px;
  }

  .actions {
    gap: 8px;
  }

  .lang-btn {
    padding: 6px 10px;
    font-size: 12px;
  }

  .login {
   font-size: 18px;
   font-style: normal;
   font-weight: 400;
   line-height: normal;
  }
}

</style>