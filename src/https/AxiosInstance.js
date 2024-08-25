import axios from "axios";

const token = localStorage.getItem('token')

export const api = axios.create({
    baseURL: 'https://contact.sankyitar.store/api/v1',
    headers : {
      "Content-Type" : "application/json"
    },
    timeout: 10000
  }); 

  api.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      } 

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
