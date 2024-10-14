import { useEffect, useState } from 'react'
import styles from './styles.module.scss'

import useScrollHandling from '@/hooks/useScrollHandling'
import BoxIcon from '@components/Header/BoxIcon/BoxIcon'
import Menu from '@components/Header/Menu/Menu'
import Logo from '@icons/images/Logo-retina.png'
import { PiShoppingCart } from 'react-icons/pi'
import { BsHeart } from 'react-icons/bs'
import { TfiReload } from 'react-icons/tfi'

import classNames from 'classnames'
import { dataBoxIcon, dataMenu } from './constants'
import { useSideBar } from '@/contexts/SideBarProvider'
function MyHeader() {
  const {
    containerHeader,
    containerBoxIcon,
    containerMenu,
    containerBox,
    container,
    fixedHeader,
    topHeader
  } = styles

  const [fixedPosition, setFixedPosition] = useState(false)
  const { scrollPosition } = useScrollHandling()
  const { setIsOpen, setType } = useSideBar()
  const handleOpenSideBar = (type) => {
    setIsOpen(true)
    setType(type)
  }

  useEffect(() => {
    setFixedPosition(scrollPosition > 80)
  }, [scrollPosition])

  return (
    <div
      className={classNames(container, topHeader, {
        [fixedHeader]: fixedPosition
      })}
    >
      <div className={containerHeader}>
        <div className={containerBox}>
          <div className={containerBoxIcon}>
            {dataBoxIcon.map((item, index) => (
              <BoxIcon
                key={`icon_${item.type}${index}`}
                type={item.type}
                href={item.href}
              />
            ))}
          </div>
          <div className={containerMenu}>
            {dataMenu.slice(0, 3).map((item, index) => (
              <Menu
                content={item.content}
                href={item.href}
                key={`menu_${item.content}`}
              />
            ))}
          </div>
        </div>
        <div>
          <img
            src={Logo}
            alt='Marseille'
            style={{ width: '153px', height: '53px' }}
          />
        </div>
        <div className={containerBoxIcon}>
          <div className={containerMenu}>
            {dataMenu.slice(3, dataMenu.length).map((item, index) => (
              <Menu
                content={item.content}
                href='item.href'
                key={`menu_${item.content}`}
              />
            ))}
          </div>
          <div className={containerBoxIcon}>
            <TfiReload onClick={() => handleOpenSideBar('compare')} />
            <BsHeart onClick={() => handleOpenSideBar('wishlist')} />
            <PiShoppingCart onClick={() => handleOpenSideBar('cart')} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHeader
