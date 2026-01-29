<template>
  <div class="login-page">
    <div class="login-card">
      <h2>เข้าสู่ระบบ</h2>

      <form @submit.prevent="handleLogin">
        <!-- Email -->
        <div class="form-group">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="example@email.com"
          />
          <p v-if="errors.email" class="error">{{ errors.email }}</p>
        </div>

        <!-- Password -->
        <div class="form-group">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
          />
          <p v-if="errors.password" class="error">{{ errors.password }}</p>
        </div>

        <!-- Error from server -->
        <p v-if="loginError" class="error center">
          {{ loginError }}
        </p>

        <button type="submit" :disabled="loading">
          {{ loading ? 'กำลังเข้าสู่ระบบ...' : 'Login' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../store/user'

const router = useRouter()
const userStore = useUserStore()

const email = ref('')
const password = ref('')
const loading = ref(false)
const loginError = ref('')

const errors = ref({
  email: '',
  password: '',
})

const validate = () => {
  errors.value = { email: '', password: '' }
  let valid = true

  if (!email.value) {
    errors.value.email = 'กรุณากรอก email'
    valid = false
  }

  if (!password.value) {
    errors.value.password = 'กรุณากรอก password'
    valid = false
  } else if (password.value.length < 6) {
    errors.value.password = 'รหัสผ่านต้องอย่างน้อย 6 ตัว'
    valid = false
  }

  return valid
}

const handleLogin = async () => {
  loginError.value = ''

  if (!validate()) return

  try {
    loading.value = true
    await userStore.login(email.value, password.value)
    router.push('/')
  } catch (err) {
    loginError.value = 'Email หรือ Password ไม่ถูกต้อง'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.login-page {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
}

.login-card {
  background: #fff;
  padding: 32px;
  border-radius: 12px;
  width: 360px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.login-card h2 {
  text-align: center;
  margin-bottom: 24px;
}

.form-group {
  margin-bottom: 16px;
}

label {
  display: block;
  margin-bottom: 6px;
  font-weight: 500;
}

input {
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #4f46e5;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  color: #e11d48;
  font-size: 13px;
  margin-top: 4px;
}

.center {
  text-align: center;
  margin-bottom: 12px;
}
</style>

