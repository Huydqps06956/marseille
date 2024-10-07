import { useSideBar } from '@/contexts/SideBarProvider'
import styles from '../styles.module.scss'
function Menu({ content, href }) {
  const { menu } = styles
  const { isOpen, setIsOpen } = useSideBar()

  return (
    <div className={menu} onClick={() => setIsOpen(true)}>
      {content}
    </div>
  )
}

export default Menu
