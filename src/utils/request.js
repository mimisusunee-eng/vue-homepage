import axios from 'axios'

const service = axios.create({
  baseURL: 'https://bighousekeeper.cn',
  timeout: 10000,
})


service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    console.log('📤 REQUEST:', config.url)
    return config
  },
  (error) => Promise.reject(error)
)



service.interceptors.response.use(
  (response) => {
    console.log('📥 RESPONSE:', response.data)
    return response.data  
  },
  (error) => {
    console.error('❌ API ERROR:', error)
    return Promise.reject(error)
  }
)

export default service
