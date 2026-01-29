<template>
  <header class="header">
    <nav class="nav">

      <router-link to="/" class="logo-title">
         <img src="/logo.png" class="logo" />
         <h1 class="brand">BIG HOUSEKEEPER</h1>
      </router-link>


      <div class="menu">
        <button
           v-for="item in menus"
           :key="item.path"
           @click="goPage(item.path)"
        >
          {{ $t(item.label) }}
        </button>

      </div>

      <!-- RIGHT : Language + Login + Hamburger -->
      <div class="actions">
        <!-- Language -->
        <div class="lang-wrapper">
          <button class="lang-btn" @click="toggleLang">
            <img :src="currentLang.flag" class="flag" />
            <span>{{ currentLang.label }}</span>
            <img src="/arrow2.svg" class="arrow" />
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

        <!-- Hamburger (Mobile) -->
        <button class="hamburger" @click="menuOpen = !menuOpen">
          ☰
        </button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    <ul v-if="menuOpen" class="mobile-menu">
      <li
        v-for="item in menus"
        :key="item.path"
        @click="goPage(item.path)"
    >
       {{ $t(item.label) }}
    </li>

    </ul>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'


const { locale } = useI18n()
const   router  = useRouter()

const menus = [
  { label: 'buy', path: '/buy' },
  { label: 'land', path: '/land' },
  { label: 'rent', path: '/rent' },
  { label: 'project', path: '/project' },
  { label: 'commercial', path: '/commercial' },
  { label: 'homeServices', path: '/home-services' },
  { label: 'sell', path: '/sell' }
]

/* language */
const langOpen = ref(false)
const menuOpen = ref(false)

const languages = [
  { code: 'th', label: 'ภาษาไทย', flag: '/th.svg' },
  { code: 'en', label: 'English', flag: '/en.svg' }
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

const goPage = (path) => {
  router.push(path)
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300;400;500;600&display=swap');

.header {
  position: sticky;
  top: 0;
  background: white;
  z-index: 999;
  padding: 15px 120px 15px 100px;
  height: 80px;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Comfortaa', sans-serif;
}

/* LEFT */
.logo-title {
  display: flex;
  align-items: center;
  gap: 14px;
  text-decoration: none;
}

.logo {
  width: 50px;
  height: 50px;
}

.brand {
  margin: 0;
  font-weight: 600;
}

/* CENTER */
.menu {
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  padding: 0 80px;

   button {    
    position: relative;       
    cursor: pointer;
    font-size: 16px;
    color: #363E47;
    padding: 0px 8px 8px 8px;
    transition: color 0.25s ease;
    background: none;
    border: none;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -6px;
      width: 0;
      height: 4px;
      background: #1E6685;
      transition: width 0.25s;
      border-radius: 20%;
    }

    &:hover::after {
      width: 100%;
    }
  }
}

/* RIGHT */
.actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.lang-wrapper {
  position: relative;
  color: #4B5053;
}

.lang-btn {
  display: flex; 
  align-items: center;
  gap: 6px;
  font-size: 18px;
  padding: 10px 18px;   
  height: 40px;    
  width: 184px;
  border: 1px solid #ddd;
  border-radius: 20px;
  background: white;
  cursor: pointer;
}

.flag {
  width: 30px;
  height: 20px;
}

.arrow {
  width: 12px;
}

.lang-dropdown {
  position: absolute;
  top: 110%;
  right: 0;
  background: white;
  border-radius: 20px;
  box-shadow: 0 1px 7px rgba(30, 102, 133, 0.3);
  list-style: none;
  padding: 12px 0;
  min-width: 160px;
}

.lang-dropdown li {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 14px;
  cursor: pointer;
}

.lang-dropdown li:hover {
  background: #D9D9D980;
}

.login {
  padding: 8px 18px;
  background: #004aad;
  color: white;
  border: none;
  border-radius: 999px;
  cursor: pointer;
}

.hamburger {
  display: none;
  font-size: 26px;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu {
  display: none;
}

/*  iPad  */
@media (max-width: 1024px) {

  .header {
    padding: 12px 32px;
    height: 72px;
  }

  .nav {
    gap: 16px;
  }

  .logo {
    width: 44px;
    height: 44px;
  }

  .brand {
    font-size: 18px;
  }

  .menu {
    padding: 0 24px;
    justify-content: center;
    gap: 20px;
  }

  .menu button {
    font-size: 14px;
    padding: 0 4px 6px;
  }

  /* right side */
  .actions {
    gap: 8px;
  }

  .lang-btn {
    width: auto;
    padding: 8px 12px;
    font-size: 16px;
  }

  .flag {
    width: 26px;
    height: 18px;
  }

  .login {
    padding: 6px 14px;
    font-size: 14px;
  }
}


/* Mobile */
@media (max-width: 767px) {
  .header {
    padding: 10px 16px;
    height: auto;
  }

  .menu {
    display: none;
  }

  .brand {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .lang-btn span {
    display: none;
  }

  .mobile-menu {
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding: 24px 16px;
  margin: 0;
  background: #ffffff;
  font-family: 'Comfortaa', 'Prompt', sans-serif;
}

  .mobile-menu li {
    font-size: 14px;              
    font-weight: 400;
    color: #363E47;
    position: relative;
    width: fit-content;
    cursor: pointer;
    padding-bottom: 6px;
    transition: color 0.25s ease;
  }

  /* เส้นใต้เหมือน desktop */
  .mobile-menu li::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 3px;
    background: #1e6685;
    border-radius: 20%;
    transition: width 0.25s ease;
  }

  /* hover (desktop / ipad) */
  .mobile-menu li:hover {
    color: #1e6685;
  }

  .mobile-menu li:hover::after {
    width: 100%;
  }

  /* tap บนมือถือ */
  .mobile-menu li:active,
  .mobile-menu li:focus {
    color: #1e6685;
  }

  .mobile-menu li:active::after,
  .mobile-menu li:focus::after {
    width: 100%;
  }
}

.brand {
    display: block;          
    font-size: 14px;        
    font-weight: 600;
    color: #111B2C;
    white-space: nowrap;   
  }

</style>
