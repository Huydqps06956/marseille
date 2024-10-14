import React from 'react'
import styles from './styles.module.scss'
import { IoIosClose } from 'react-icons/io'

const ItemProduct = () => {
  const { container, boxContent, title, price, boxClose, size } = styles
  return (
    <div className={container}>
      <img
        src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-11.1-min.jpg'
        alt=''
      />

      <div className={boxClose}>
        <IoIosClose />
      </div>

      <div className={boxContent}>
        <div className={title}>title of product</div>
        <div className={size}>Size:M</div>
        <div className={price}>$119.99</div>
        <div className={price}>SKU: 122349</div>
      </div>
    </div>
  )
}

export default ItemProduct
