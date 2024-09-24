import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import CountdownBanner from '@components/CountdownBanner/CountdownBanner'
import ProductItem from '@components/ProductItem/ProductItem'
function HeadlingListProduct({ data }) {
  const { container, containerItem } = styles
  return (
    <MainLayout>
      <div className={container}>
        <CountdownBanner />
        <div className={containerItem}>
          {data.map((item, index) => (
            <ProductItem
              key={`heading_product_${index}`}
              src={item.images[0]}
              prevSrc={item.images[1]}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </MainLayout>
  )
}

export default HeadlingListProduct
