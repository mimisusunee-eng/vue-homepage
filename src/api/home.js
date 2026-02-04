import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3000',
})

export function getHouseList() {
  return api.get('/miniprogram/house/getHouseList')
}

export function getHouseDetail(id) {
  return api.get(`/miniprogram/rent/detail?id=${id}`)
}
