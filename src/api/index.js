import axios from 'axios'
import { showFailToast } from 'vant'
import router from '../router'
import { useUserStore } from '../store/user'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const userStore = useUserStore()

  if (userStore.token) {
    config.headers.Authorization = `Bearer ${userStore.token}`
  }

  return config
})

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    if (error.response?.status === 401) {
      const userStore = useUserStore()
      userStore.logout()
      router.replace('/login')
      showFailToast('กรุณาเข้าสู่ระบบใหม่')
    }
    return Promise.reject(error)
  },
)

export default api