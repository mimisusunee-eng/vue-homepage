import request from '@/utils/request'

export function getHouseList(params) {
  return request('/miniprogram/rent/getHouseList', params)
}
