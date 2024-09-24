import MyHeader from '@components/Header/Header'
import Banner from '@components/Banner/Banner'
import Info from '@components/Info/Info'
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling'
import styles from './styles.module.scss'
import HeadlingListProduct from '@components/HeadlingListProduct/HeadlingListProduct'
import { useEffect, useState } from 'react'
import { getProducts } from '@/api/productsService'
import PopularProduct from '@components/PopularProduct/PopularProduct'
import SaleHomePage from '@components/SaleHomePage/SaleHomePage'
function HomePage() {
  const [listProducts, setListProducts] = useState([])

  useEffect(() => {
    getProducts().then((res) => setListProducts(res.contents))
  }, [])
  return (
    <>
      <MyHeader />
      <Banner />
      <Info />
      <AdvanceHeadling />
      <HeadlingListProduct data={listProducts.slice(0, 2)} />
      <PopularProduct data={listProducts.slice(2, listProducts.length)} />
      <SaleHomePage />
    </>
  )
}

export default HomePage
