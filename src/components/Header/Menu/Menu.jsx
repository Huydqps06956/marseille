import { useSideBar } from '@/contexts/SideBarProvider'
import styles from '../styles.module.scss'
function Menu({ content, href }) {
  const { menu } = styles
  const { setIsOpen, setType } = useSideBar()

  const handleClickShowLogin = () => {
    setIsOpen(true)
    setType('login')
  }

  return (
    <div className={menu} onClick={handleClickShowLogin}>
      {content}
    </div>
  )
}

export default Menu
