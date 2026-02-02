import api from './index'

export const getNewProjects = () => {
  return api.get('/posts')
}

export const getHandpickedProjects = () => {
  return api.get('/posts')
}

export const getRentHouses = () => {
  return api.get('/posts')
}

export const getPropertyDetail = async (id) => {
  try {
    return await api.get(`/posts/${id}`)
  } catch (error) {
    if (error.response?.status === 404) {
      return null
    }
    throw error
  }
}

