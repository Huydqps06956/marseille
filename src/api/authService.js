import axiosClient from './axiosClient'

export const register = async (body) => {
  console.log('register')
  return await axiosClient.post('/register', body)
}

export const signIn = async (body) => {
  return await axiosClient.post('/login', body)
}

export const getInfo = async (userId) => {
  return await axiosClient.get(`/user/info/${userId}`)
}
