import { useSideBar } from '@/contexts/SideBarProvider'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { TfiClose } from 'react-icons/tfi'
import Login from '@/ContentSideBar/Login/Login'
import Compare from '@/ContentSideBar/Compare/Compare'
import WishList from '@/ContentSideBar/WishList/WishList'
import Cart from '@/ContentSideBar/Cart/Cart'
const Sidebar = () => {
  const { container, overlay, sidebar, slideSideBar, boxIcon } = styles
  const { isOpen, setIsOpen, type } = useSideBar()

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleRenderContent = () => {
    switch (type) {
      case 'login':
        return <Login />
      case 'compare':
        return <Compare />
      case 'wishlist':
        return <WishList />
      case 'cart':
        return <Cart />
      default:
        return <Login />
    }
  }

  return (
    <div className={container}>
      <div
        onClick={() => handleToggle()}
        className={classNames({ [overlay]: isOpen })}
      />
      <div className={classNames(sidebar, { [slideSideBar]: isOpen })}>
        {isOpen && (
          <div className={boxIcon} onClick={handleToggle}>
            <TfiClose />
          </div>
        )}
        {handleRenderContent()}
      </div>
    </div>
  )
}

export default Sidebar
