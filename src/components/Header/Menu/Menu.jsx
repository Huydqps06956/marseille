import { useSideBar } from '@/contexts/SideBarProvider'
import { useStoreContext } from '@/contexts/storeProvider'
import { useState } from 'react'
import Cookies from 'js-cookie'
import styles from '../styles.module.scss'

function Menu({ content, href }) {
  const { menu, subMenu } = styles
  const { setIsOpen, setType } = useSideBar()
  const { userInfo, handleLogout } = useStoreContext()
  const [isShowSubMenu, setIsShowSubMenu] = useState(false)

  const handleClickShowLogin = () => {
    if (content === 'Sign in' && !userInfo) setIsOpen(true)
    setType('login')
  }

  const handleRenderText = (context) => {
    if (content === 'Sign in' && userInfo) {
      return `Hello: ${userInfo?.username}`
    } else {
      return content
    }
  }

  const handleHover = () => {
    if (content === 'Sign in' && userInfo) {
      setIsShowSubMenu(true)
    }
  }

  return (
    <div
      className={menu}
      onMouseEnter={handleHover}
      onClick={handleClickShowLogin}
    >
      {handleRenderText(content)}

      {isShowSubMenu && (
        <div
          onClick={handleLogout}
          onMouseLeave={() => setIsShowSubMenu(false)}
          className={subMenu}
        >
          LOG OUT
        </div>
      )}
    </div>
  )
}

export default Menu
