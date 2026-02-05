import { defineStore } from 'pinia'
import { loginApi } from '@/api/user'

export const useUserStore = defineStore('user', {
  state: () => ({
    token: localStorage.getItem('token') || '',
    user: JSON.parse(localStorage.getItem('user')) || null,
    loading: false,
    error: null,
  }),

  actions: {
    async login(email, password) {
      this.loading = true
      this.error = null

      try {
        const res = await loginApi({ email, password })

     
        if (!res.success) {
          throw new Error(res.message || 'Login failed')
        }

      
        this.token = res.data.token
        this.user = res.data.user || null

        localStorage.setItem('token', this.token)
        localStorage.setItem('user', JSON.stringify(this.user))

        return true
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
