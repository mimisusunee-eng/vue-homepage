import axios from 'axios'

const Request = axios.create({
  baseURL: 'https://bighousekeeper.cn',
  timeout: 10000,
})

Request.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

Request.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
)

export default Request
