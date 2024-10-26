import { createContext, useContext } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

export const ToastContext = createContext()
export const ToastProvider = ({ children }) => {
  const value = { toast }

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (context === undefined)
    throw new Error('ToastContext was used outside of ToastProvider')
  return context
}
