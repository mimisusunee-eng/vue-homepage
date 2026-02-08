import axios from "axios";
import { Encrypt, GenRandomString } from "./common";

const APP_ID = GenRandomString();

export async function Request(url = "", params = {}) {
  return new Promise((resolve, _reject) => {
    params.token = "";
    axios({
      method: "post",
      url: import.meta.env.VITE_APP_API_URL + url,
      data: {
        form: Encrypt(JSON.stringify(params), APP_ID),
      },
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: APP_ID,
      },
    }).then(({ data }) => {
      resolve(data);
    })
  });
}



// Cha's old service make this in because prevent the error
const service = axios.create({
  baseURL: 'https://bighousekeeper.cn',
  timeout: 10000,
})


service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    console.log('📤 REQUEST:', config.url)
    return config
  },
  (error) => Promise.reject(error)
)



service.interceptors.response.use(
  (response) => {
    console.log('📥 RESPONSE:', response.data)
    return response.data  
  },
  (error) => {
    console.error('❌ API ERROR:', error)
    return Promise.reject(error)
  }
)

export default service


