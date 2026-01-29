import api from './index'

/* ดึงโปรเจกต์ใหม่ */
export const getNewProjects = () => {
  return api.get('/posts')
}

/* ดึงบ้านแนะนำ */
export const getHandpickedProjects = () => {
  return api.get('/posts')
}

/* ดึงบ้านเช่า */
export const getRentHouses = () => {
  return api.get('/posts')
}
