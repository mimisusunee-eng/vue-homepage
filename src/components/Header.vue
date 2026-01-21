<template>
  <header class="header">
    <nav class="nav">

      <!-- LEFT : Logo -->
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
            <span class="arrow">▾</span>
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
    label: 'TH',
    flag: 'https://flagcdn.com/w20/th.png'
  },
  {
    code: 'en',
    label: 'EN',
    flag: 'https://flagcdn.com/w20/gb.png'
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
  flex: 1;                       /* สำคัญที่สุด */
  justify-content: space-evenly; /* กระจายเมนู */
  align-items: center;
}


.menu button {
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 400;
  white-space: nowrap;   /*  กัน Home Services ตกบรรทัด */
  padding: 6px 10px;     /*  ระยะหายใจ */
}


/* RIGHT */
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Language */
.lang-wrapper {
  position: relative;
}

.lang-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  cursor: pointer;
}

.flag {
  width: 20px;
  height: 14px;
  object-fit: cover;
}

.lang-dropdown {
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 12px;
  list-style: none;
  padding: 6px 0;
  min-width: 100px;
    z-index: 9999;
}

.lang-dropdown li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  cursor: pointer;
}

.lang-dropdown li:hover {
  background: #f2f2f2;
}

/* Login */
.login {
  padding: 8px 18px;
  background: #004AAD;
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  font-weight: 500;
}

/* =========================
   RESPONSIVE HEADER
========================= */

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
    height: 36px;
  }

  .brand {
    font-size: 14px;
  }

  .actions {
    gap: 8px;
  }

  .lang-btn {
    padding: 6px 10px;
    font-size: 12px;
  }

  .login {
    padding: 6px 14px;
    font-size: 12px;
  }
}

</style>