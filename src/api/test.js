import api from './index'

export const getTodos = async () => {
  const res = await api.get('/todos')
  return res
}
