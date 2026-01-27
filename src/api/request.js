import api from "./index";

export const get = (url, params = {}) => {
  return api.get(url, { params });
};

export const post = (url, data = {}) => {
  return api.post(url, data);
};

export const put = (url, data = {}) => {
  return api.put(url, data);
};

export const del = (url) => {
  return api.delete(url);
};