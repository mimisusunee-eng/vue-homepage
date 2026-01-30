import request from '@/utils/request'

export const getTodos = () => {
  return request.get('/todos?_limit=5')
}
