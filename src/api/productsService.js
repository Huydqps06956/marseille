import axiosClient from './axiosClient'
export const getProducts = async () => {
  const res = await axiosClient.get('/product')
  return res.data
}
