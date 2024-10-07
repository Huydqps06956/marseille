import { useSideBar } from '@/contexts/SideBarProvider'
import styles from './styles.module.scss'
import classNames from 'classnames'
import { TfiClose } from 'react-icons/tfi'
import Login from '@/ContentSideBar/Login/Login'
const Sidebar = () => {
  const { container, overlay, sidebar, slideSideBar, boxIcon } = styles
  const { isOpen, setIsOpen } = useSideBar()

  const handleToggle = () => {
    setIsOpen(!isOpen)
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
        <Login />
      </div>
    </div>
  )
}

export default Sidebar
