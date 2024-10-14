import React from 'react'
import styles from './styles.module.scss'
import { TfiReload } from 'react-icons/tfi'
import HeaderSideBar from '@/ContentSideBar/components/HeaderSideBar/HeaderSideBar'
import ItemProduct from '@/ContentSideBar/components/ItemProduct/ItemProduct'
import Button from '@components/Button/Button'

const Compare = () => {
  const { container } = styles
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          icon={<TfiReload style={{ fontSize: '20px' }} />}
          title='COMPARE'
        />
        <ItemProduct />
      </div>

      <div>
        <Button content={'VIEW COMPARE'} />
      </div>
    </div>
  )
}

export default Compare
