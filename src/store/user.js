import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  }),

  getters: {
    isLogin: (state) => !!state.token,
  },

  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null

      try {
        // 🔴 MOCK (พร้อมเปลี่ยนเป็น API จริง)
        if (email === 'test@test.com' && password === '123456') {
          const fakeToken = 'jwt-token-example'

          this.token = fakeToken
          this.user = {
            email,
            name: 'Test User',
          }

          localStorage.setItem('token', fakeToken)
          localStorage.setItem('user', JSON.stringify(this.user))
          return true
        }

        throw new Error('อีเมลหรือรหัสผ่านไม่ถูกต้อง')
      } catch (err) {
        this.error = err.message
        throw err
      } finally {
        this.loading = false
      }
    },

    logout() {
      this.token = ''
      this.user = null
      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
  },
})
