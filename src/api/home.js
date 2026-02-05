import request from '@/utils/request'


export const GetHouseList = (data = {}) =>
  request.post('/miniprogram/house/getHouseList', data)


export const GetRentHouseList = (data = {}) =>
  request.post('/miniprogram/rent/getHouseList', data)

export const GetHouseDetail = (id) =>
  request.post('/miniprogram/house/detail', { id })


export const GetRentHouseDetail = (id) =>
  request.post('/miniprogram/rent/detail', { id })

