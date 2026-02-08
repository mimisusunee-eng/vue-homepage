import { Request } from "../utils/request";

// 房源列表
export const GetHouseList = (data) =>
  Request(`/miniprogram/house/getHouseList`, data);

// 获取城市地区
export const AreaList = (data) => Request(`/miniprogram/dictionary/area`, data);

//房源详情
export const HouseDetail = (data) => Request(`/miniprogram/house/detail`, data);

// 租房列表
export const GetRentHouseList = (data) =>
  Request(`/miniprogram/rent/getHouseList`, data);

export const GetRentHouseDetail = (data) =>
  Request(`/miniprogram/rent/detail`, data);

// 保存用户信息
export const submitConcat = (data) => Request(`/miniprogram/House/concat`, data);

// 求购
export const Qiugou = (data) => Request(`/miniprogram/forum/qiugou`, data);

// 求租
export const Qiuzu = (data) => Request(`/miniprogram/forum/qiuzu`, data);
//预约消息推送
export const sendWechatForumMsg = data => Request(`/miniprogram/message/sendWechatForumMsg`, data)