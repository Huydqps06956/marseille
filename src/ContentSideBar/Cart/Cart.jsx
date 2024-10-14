import React from 'react'
import styles from './styles.module.scss'
import { PiShoppingCartLight } from 'react-icons/pi'
import HeaderSideBar from '@/ContentSideBar/components/HeaderSideBar/HeaderSideBar'
import ItemProduct from '@/ContentSideBar/components/ItemProduct/ItemProduct'
import Button from '@components/Button/Button'

const Cart = () => {
  const { container, total, boxBtn } = styles
  return (
    <div className={container}>
      <div>
        <HeaderSideBar
          title='CART'
          icon={<PiShoppingCartLight style={{ fontSize: '30px' }} />}
        />

        <ItemProduct />
      </div>
      <div>
        <div className={total}>
          <p>SUBTOTAL:</p>
          <p>$199.99</p>
        </div>

        <div className={boxBtn}>
          <Button content={'VIEW CART'} />
          <Button content={'CHECK OUT'} isPriamry={false} />
        </div>
      </div>
    </div>
  )
}

export default Cart
