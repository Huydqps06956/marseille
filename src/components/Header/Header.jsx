import styles from './styles.module.scss'
import { useEffect, useState } from 'react'

import BoxIcon from '@components/Header/BoxIcon/BoxIcon'
import Menu from '@components/Header/Menu/Menu'
import Logo from '@icons/images/Logo-retina.png'
import reloadIcon from '@icons/svgs/reloadicon.svg'
import hearIcon from '@icons/svgs/hearticon.svg'
import cartIcon from '@icons/svgs/carticon.svg'
import { dataBoxIcon, dataMenu } from './constants'
import useScrollHandling from '@/hooks/useScrollHandling'
import classNames from 'classnames'
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

  useEffect(() => {
    if (scrollPosition >= 80) {
      setFixedPosition(true)
    } else {
      setFixedPosition(false)
    }
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
            <img width='26px' height='26px' src={reloadIcon} alt='reload' />
            <img width='26px' height='26px' src={hearIcon} alt='heart' />
            <img width='26px' height='26px' src={cartIcon} alt='cart' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyHeader
