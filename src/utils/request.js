import axios from 'axios'

const request = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 5000,
})

request.interceptors.request.use(
  (config) => {
    console.log('📤 request:', config.url)
    return config
  },
  (error) => Promise.reject(error)
)

request.interceptors.response.use(
  (response) => {
    console.log('📥 response:', response.data)
    return response
  },
  (error) => Promise.reject(error)
)

export default request
