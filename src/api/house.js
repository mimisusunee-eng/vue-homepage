import request from "@/utils/request";

export function getHouseList(params) {
  return request("/house/getHouseList", params);
}
