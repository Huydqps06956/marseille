import React from 'react'
import styles from './styles.module.scss'
import HeaderSideBar from '@/ContentSideBar/components/HeaderSideBar/HeaderSideBar'
import ItemProduct from '@/ContentSideBar/components/ItemProduct/ItemProduct'
import { CiHeart } from 'react-icons/ci'
import Button from '@components/Button/Button'
const WishList = () => {
  const { container } = styles
  return (
    <div className={container}>
      <div>
        <HeaderSideBar title='WHISHLIST'>
          <CiHeart style={{ fontSize: '30px' }} />
        </HeaderSideBar>
        <ItemProduct />
      </div>
      <div>
        <Button content={'VIEW WISHLIST'} />
        <Button content={'ADD ALL TO CART'} isPriamry={false} />
      </div>
    </div>
  )
}

export default WishList
