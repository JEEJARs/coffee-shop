import axios from 'axios'
<<<<<<< HEAD
import { useAuthenStore } from '../stores/authen'

export default () => {
  const authenStore = useAuthenStore()

  return axios.create({
    baseURL: 'http://localhost:8081/',
    headers: {
      Authorization: `Bearer ${authenStore.token}`,
    },
  })
=======

export default () => {
    return axios.create({
        baseURL: 'http://localhost:8081/',
    })
>>>>>>> e781e81b4e96e404962983f97dc2a8a5e084729f
}