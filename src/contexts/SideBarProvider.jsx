import { createContext, useContext, useState } from 'react'

export const SideBarContext = createContext()
export const SideBarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SideBarContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </SideBarContext.Provider>
  )
}

export function useSideBar() {
  const context = useContext(SideBarContext)
  if (context === undefined)
    throw new Error('SideBarContext was used outside of DarkModeProvider')
  return context
}
