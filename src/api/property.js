import api from './index'

export const getProperties =  async () => {
  const res = await api.get('/posts')
  return res
}
