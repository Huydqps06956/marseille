import { createContext, useContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import { getInfo } from '@/api/authService'

export const storeContext = createContext()

export const StoreProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null)
  const [userId, setUserId] = useState(Cookies.get('userId'))

  const handleLogout = () => {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    Cookies.remove('userId')
    setUserInfo(null)
    window.location.reload()
  }

  useEffect(() => {
    if (userId) {
      getInfo(userId)
        .then((res) => {
          setUserInfo(res.data.data)
        })
        .catch((err) => console.log(err))
    }
  }, [userId])

  return (
    <storeContext.Provider value={{ userInfo, handleLogout, setUserId }}>
      {children}
    </storeContext.Provider>
  )
}
export function useStoreContext() {
  const context = useContext(storeContext)
  if (context === undefined)
    throw new Error('storeContext was used outside of storeContext')
  return context
}
