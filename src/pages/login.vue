<template>
  <div class="login-page">
    <div class="login-card">
      <h2>{{ isRegister ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ' }}</h2>
      <p class="subtitle">
        {{ isRegister ? 'สร้างบัญชีเพื่อเริ่มต้นใช้งาน' : 'ยินดีต้อนรับกลับมา' }}
      </p>

      <div v-if="userStore.error" class="server-error">
        {{ userStore.error }}
      </div>

      <form @submit.prevent="handleSubmit">
        <!-- name (เฉพาะสมัคร) -->
        <div class="form-group" v-if="isRegister">
          <label>ชื่อผู้ใช้งาน</label>
          <input v-model="name" type="text" required />
        </div>

        <div class="form-group">
          <label>อีเมล</label>
          <input v-model="email" type="email" required />
        </div>

        <div class="form-group">
          <label>รหัสผ่าน</label>
          <input v-model="password" type="password" required />
        </div>

        <button class="primary" type="submit" :disabled="userStore.loading">
          {{ isRegister ? 'สมัครสมาชิก' : 'เข้าสู่ระบบ' }}
        </button>
      </form>

      <button class="secondary" @click="toggleMode">
        {{ isRegister ? 'มีบัญชีแล้ว? เข้าสู่ระบบ' : 'ยังไม่มีบัญชี? สมัครสมาชิก' }}
      </button>

      <button class="back-home" @click="goHome">
          ← กลับหน้าแรก
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/store/user'

const router = useRouter()
const userStore = useUserStore()

const isRegister = ref(false)
const email = ref('')
const password = ref('')
const name = ref('')

const toggleMode = () => {
  isRegister.value = !isRegister.value
  userStore.error = null
}

const goHome = () => {
  router.push('/')
}

const handleSubmit = async () => {
  try {
    if (isRegister.value) {
      await userStore.register({
        email: email.value,
        password: password.value,
        name: name.value,
      })
    } else {
      await userStore.login(email.value, password.value)
    }

    router.push('/')
  } catch (e) {
    console.log(e)
  }
}
</script>

<style scoped>
/* 👉 ใช้ CSS เดิมของคนสวยได้เลย ไม่ต้องเปลี่ยน */
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  font-size: 24px;
  align-items: center;
  background: linear-gradient(135deg, #e6f0ff, #cfe0ff);
  font-family: 'Comfortaa', sans-serif;
}

.login-card {
  background: #ffffff;
  padding: 36px;
  border-radius: 18px;
  width: 360px;
  box-shadow: 0 20px 40px rgba(0, 74, 173, 0.18);
}

.login-card h2 {
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #004aad;
}

.subtitle {
  text-align: center;
  font-size: 14px;
  color: #4b5563;
  margin-bottom: 28px;
}

.form-group {
  margin-bottom: 18px;
}

label {
  font-size: 14px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  border: 1px solid #c7d2fe;
  transition: 0.2s;
}

input:focus {
  outline: none;
  border-color: #004aad;
  box-shadow: 0 0 0 3px rgba(0, 74, 173, 0.15);
}

button {
  width: 100%;
  padding: 12px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s;
}

button.primary {
  background: #004aad;
  color: white;
  border: none;
  margin-top: 8px;
}

button.primary:hover {
  background: #003a8c;
}

button.secondary {
  margin-top: 12px;
  background: transparent;
  border: 1px solid #004aad;
  color: #004aad;
}

button.secondary:hover {
  background: #e6f0ff;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.server-error {
  background: #e6f0ff;
  color: #003a8c;
  padding: 10px;
  border-radius: 8px;
  font-size: 13px;
  margin-bottom: 16px;
  text-align: center;
}

button.back-home {
  margin-top: 16px;
  background: transparent;
  border: none;
  color: #004aad;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}

button.back-home:hover {
  color: #003a8c;
}

</style>
