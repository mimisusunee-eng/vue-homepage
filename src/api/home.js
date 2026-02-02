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
