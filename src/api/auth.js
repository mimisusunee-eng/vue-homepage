import api from './index'

export const loginApi = async (payload) => {
  return await api.post('/login', payload)
}
